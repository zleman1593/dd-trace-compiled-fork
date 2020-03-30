"use strict";

// const URL = require("url-parse");
// const Writer = require("./writer");
// const Scheduler = require("./scheduler");
const libHoney = require("libhoney");
const createHash = require("crypto").createHash;

class HoneycombExporter {
  constructor({ url, hostname, port, flushInterval }, prioritySampler) {
    //   this._url = url || new URL(`http://${hostname || "localhost"}:${port}`);
    //   this._writer = new Writer(this._url, prioritySampler);
    //   if (flushInterval > 0) {
    //     this._scheduler = new Scheduler(
    //       () => this._writer.flush(),
    //       flushInterval
    //     );
    //   }
    //   this._scheduler && this._scheduler.start();
  }

  export(spans, rootSpan) {
    return HoneycombDataDogForwarder.forwardTrace(spans, rootSpan);
    // this._writer.append(spans);

    // if (!this._scheduler) {
    //   this._writer.flush();
    // }
  }
}

module.exports = HoneycombExporter;

let _honeycombSdk;
/**
 * Initialize Honeycomb library
 */
function getHoneycombSdk() {
  if (_honeycombSdk) {
    return _honeycombSdk;
  }
  if (process.env.HONEYCOMB_WRITE_KEY) {
    _honeycombSdk = new libHoney({
      writeKey: process.env.HONEYCOMB_WRITE_KEY,
      // This is WELL Specific atm
      dataset: `well-${process.env.SERVICE}-${process.env.ENV.toLowerCase()}`
    });
  }
  return _honeycombSdk;
}
// Singleton https://refactoring.guru/design-patterns/singleton/typescript/example
class HoneycombDataDogForwarder {
  /**
   * Have to call this immediately before span.finish()
   * Will extract sample rates, create formatted spans for the trace and send the sampled trace to honeycomb
   * Does not wait on honeycomb transmission.
   * @param ddSpan
   * @returns Void
   */
  static forwardTrace(spans, rootSpan) {
    try {
      // If there is parent ID don't try to send to honeycomb yet. Only do it for the root span.
      if (rootSpan._parentId == null) {
        // If there is parent ID don't try to send to honeycomb yet. Only do it for the root span.
        const rootSampleRate =
          rootSpan.getBaggageItem("rootSampleRate") != null
            ? parseInt(rootSpan.getBaggageItem("rootSampleRate"), 10)
            : undefined;
        const childSpanSampleRate =
          rootSpan.getBaggageItem("childSpanSampleRate") != null
            ? parseInt(rootSpan.getBaggageItem("childSpanSampleRate"), 10)
            : undefined;
        const slowTraceLimitMs =
          rootSpan.getBaggageItem("slowTraceLimitMs") != null
            ? parseInt(rootSpan.getBaggageItem("slowTraceLimitMs"), 10)
            : undefined;
        return HoneycombDataDogForwarder.sendTraceToHoneycomb({
          spans,
          rootSampleRate: rootSampleRate,
          childSpanSampleRate: childSpanSampleRate || rootSampleRate,
          slowTraceLimitMs
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes a trace (array of spans) generated from Datadog and sends it to honeycomb with sampling
   * @param rootSpanDd A root span which is an instance of the dd-trace Span class.
   * @param childSpans [] An array of spans representing a trace which are instances of the dd-trace Span class.
   * @param rootSampleRate Number Root sample rate must be set such that root is sampled whenever a child is sampled.
   * @param childSpanSampleRate Number The rate that child spans should be sampled if the root span/trace is sampled
   * @param slowTraceLimitMs Number in ms. How long in milliseconds a trace needs to take before being considered slow
   * @returns Void
   */
  static async sendTraceToHoneycomb({
    spans,
    rootSampleRate = 1,
    childSpanSampleRate = 1,
    slowTraceLimitMs = 3000
  }) {
    const hny = getHoneycombSdk();
    if (hny == null) {
      return;
    }
    // Use honeycomb SDK, not beeline to send spans for a trace to honeycomb
    const rootSpan = spans.shift();
    const traceId = rootSpan.trace.trace_id.toString();
    const isError = false;
    //TODO: const isError = spans[0].isError;
    if (isError) {
      // Sample all errors
      console.info({ traceId }, "trace with errors");
      childSpanSampleRate = 1;
      rootSampleRate = 1;
    }
    const isSlow = rootSpan.duration_ms > slowTraceLimitMs;
    if (isSlow) {
      console.info(
        { traceId, duration_ms: rootSpan.duration_ms },
        "slow trace"
      );
      // Sample all very slow traces since they are more likely to be interesting
      childSpanSampleRate = 1;
      rootSampleRate = 1;
    }

    const {
      shouldSample: shouldSampleTrace
    } = HoneycombDataDogForwarder.deterministicSampler(rootSampleRate, traceId);
    if (shouldSampleTrace) {
      const event = hny.newEvent();
      event.timestamp = new Date(rootSpan.timestamp);
      event.sampleRate = rootSampleRate;
      event.add(rootSpan);
      event.add({ childSpanCount: spans.length });
      let spanPromises = [event.sendPresampled()];
      const {
        shouldSample: shouldSampleChildSpans
      } = HoneycombDataDogForwarder.deterministicSampler(
        childSpanSampleRate,
        traceId
      );
      // Will only sample child spans if trace will be kept

      if (shouldSampleChildSpans) {
        spans.forEach(span => {
          //Todo: Add server stats here
          const event = hny.newEvent();
          event.add(span);
          event.timestamp = new Date(span.timestamp);
          event.sampleRate = childSpanSampleRate;
          spanPromises.push(event.sendPresampled());
        });
      }
      await Promise.all(spanPromises).catch(console.error);
    }
  }

  /**
   *
   * @param sampleRate
   * @param traceId
   * Taken from https://github.com/honeycombio/beeline-nodejs/blob/d1895731cd52e1fd848fe62f6bb5457c678aeec5/lib/deterministic_sampler.js
   */
  static deterministicSampler(sampleRate, traceId) {
    const MAX_UINT32 = Math.pow(2, 32) - 1;

    const sum = createHash("sha1")
      .update(traceId)
      .digest();

    const upperBound = (MAX_UINT32 / sampleRate) >>> 0;

    return {
      shouldSample: sum.readUInt32BE(0) <= upperBound,
      sampleRate
    };
  }
}
