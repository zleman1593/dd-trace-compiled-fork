/**
 * The below code is mostly copied from DataDog tracer source and slightly adapted to better support honeycomb backend for dd-tracer.
 * https://github.com/DataDog/dd-trace-js/blob/0e0265374a23a31b4f2ec4522560720e1b4dcf92/packages/dd-trace/src/format.js
 *
 * Allows DD spans to be converted to a format that can be sent to honeycomb
 */
const constants = {
  SAMPLING_PRIORITY_KEY: "_sampling_priority_v1",
  ANALYTICS_KEY: "_dd1.sr.eausr",
  ORIGIN_KEY: "_dd.origin",
  HOSTNAME_KEY: "_dd.hostname"
};
const SAMPLING_PRIORITY_KEY = constants.SAMPLING_PRIORITY_KEY;
const ANALYTICS_KEY = constants.ANALYTICS_KEY;
const ANALYTICS = constants.ANALYTICS_KEY;
const ORIGIN_KEY = constants.ORIGIN_KEY;
const HOSTNAME_KEY = constants.HOSTNAME_KEY;

const map = {
  "service.name": "service",
  "span.type": "type",
  "resource.name": "resource"
};

/**
 *
 * @param span
 * @returns HoneycombDDSpan
 */
export function formatSpansForHoneycomb(span) {
  const honeycombSpan = formatSpan(span);

  extractError(honeycombSpan, span);
  extractTags(honeycombSpan, span);
  extractContext(honeycombSpan, span);
  extractAnalytics(honeycombSpan, span);

  return honeycombSpan;
}

function formatSpan(span) {
  const spanContext = span.context();
  const traceContext = spanContext._trace.traceContext;
  // Root span won't have a duration because it isn't finished when this is called.
  const duration_ms =
    spanContext._parentId != null
      ? Math.round(span._duration)
      : new Date().getTime() - span._startTime;
  //TODO Remove special sample rate baggage items?
  return {
    timestamp: new Date(span._startTime),
    trace: {
      trace_id: spanContext._traceId,
      span_id: spanContext._spanId,
      parent_id: spanContext._parentId
    },
    name: serialize(spanContext._name),
    resource: serialize(spanContext._name),
    error: 0,
    meta: {},
    metrics: {},

    start: Math.round(span._startTime * 1e6),
    duration_ms
  };
}

function extractTags(trace, span) {
  const context = span.context();

  const origin = context._trace.origin;

  const tags = context._tags;

  const hostname = context._hostname;

  const priority = context._sampling.priority;

  Object.keys(tags).forEach(tag => {
    switch (tag) {
      case "service.name":
      case "span.type":
      case "resource.name":
        addTag(trace, {}, map[tag], tags[tag]);
        break;
      case HOSTNAME_KEY:
      case ANALYTICS:
        break;
      case "error":
        if (tags[tag]) {
          trace.error = 1;
        }
        break;
      case "error.type":
      case "error.msg":
      case "error.stack":
        trace.error = 1;
      default:
        addTag(trace.meta, trace.metrics, tag, tags[tag]);
    }
  });

  if (span.tracer()._service === tags["service.name"]) {
    addTag(trace.meta, trace.metrics, "language", "javascript");
  }

  addTag(trace.meta, trace.metrics, SAMPLING_PRIORITY_KEY, priority);
  addTag(trace.meta, trace.metrics, ORIGIN_KEY, origin);
  addTag(trace.meta, trace.metrics, HOSTNAME_KEY, hostname);
}
function extractContext(trace, span) {
  const context = span.context();
  const traceContext = {
    ...context._trace.traceContext,
    ...context._baggageItems
  };
  Object.keys(traceContext).forEach(contextKey => {
    switch (contextKey) {
      case "error":
        if (traceContext[contextKey]) {
          trace.error = 1;
        }
        break;
      case "error.type":
      case "error.msg":
      case "error.stack":
        trace.error = 1;
      default:
        addTag(trace.meta, trace.metrics, contextKey, traceContext[contextKey]);
    }
  });
}

function extractError(trace, span) {
  const error = span.context()._tags["error"];

  if (error instanceof Error) {
    trace.meta["error.msg"] = error.message;
    trace.meta["error.type"] = error.name;
    trace.meta["error.stack"] = error.stack;
  }
}

function extractAnalytics(trace, span) {
  let analytics = span.context()._tags[ANALYTICS];

  if (analytics === true) {
    analytics = 1;
  } else {
    analytics = parseFloat(analytics);
  }

  if (!isNaN(analytics)) {
    trace.metrics[ANALYTICS_KEY] = Math.max(Math.min(analytics, 1), 0);
  }
}

function addTag(meta, metrics, key, value, seen?) {
  switch (typeof value) {
    case "string":
      meta[key] = value;
      break;
    case "number":
      if (isNaN(value)) break;
      metrics[key] = value;
      break;
    case "undefined":
      break;
    case "object":
      if (value === null) break;

      if (!Array.isArray(value)) {
        addObjectTag(meta, metrics, key, value, seen);
        break;
      }

    default:
      addTag(meta, metrics, key, serialize(value));
  }
}

function addObjectTag(meta, metrics, key, value, seen) {
  seen = seen || [];

  if (~seen.indexOf(value)) {
    meta[key] = "[Circular]";
    return;
  }

  seen.push(value);

  Object.keys(value).forEach(prop => {
    addTag(meta, metrics, `${key}.${prop}`, value[prop], seen);
  });

  seen.pop();
}

function serialize(obj) {
  try {
    return obj && typeof obj.toString !== "function"
      ? JSON.stringify(obj)
      : String(obj);
  } catch (e) {
    console.error(e);
  }
}
