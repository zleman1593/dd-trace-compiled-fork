const log = require("./log");
const format = require("./format");
const format_honeycomb = require("./format_honeycomb");
class SpanProcessor {
  constructor(exporter, prioritySampler) {
    this._exporter = exporter;
    this._prioritySampler = prioritySampler;
  }

  process(span) {
    const spanContext = span.context();
    const trace = spanContext._trace;

    if (trace.started.length === trace.finished.length) {
      this._prioritySampler.sample(spanContext);

      if (spanContext._traceFlags.sampled === false) {
        log.debug(
          () => `Dropping trace due to user configured filtering: ${trace}`
        );
        this._erase(trace);
        return;
      }

      // const formattedSpans = trace.finished.map(format);
      const formattedSpans = trace.finished.map(format_honeycomb);
      this._exporter.export(formattedSpans, trace.finished[0]);
      this._erase(trace);
    }
  }

  _erase(trace) {
    trace.finished.forEach(span => {
      span.context()._tags = {};
    });

    trace.started = [];
    trace.finished = [];
  }
}

module.exports = SpanProcessor;
