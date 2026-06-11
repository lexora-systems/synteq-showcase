# Data Flow

## 1. Workflow Event Received

A workflow platform, webhook source, or scheduler sends an execution event to Synteq. The API validates the request shape and verifies the webhook signature when configured.

## 2. Event Queued

The API publishes the event to a queue. This decouples external webhook traffic from normalization and analytics work.

## 3. Event Normalized

A worker converts vendor-specific payloads into a shared operational event model:

- Tenant
- Source
- Workflow
- Status
- Start and finish timestamps
- Latency
- Error category
- Redacted metadata

## 4. Telemetry Written

Normalized events are written to analytical storage. Application state such as sources, incidents, users, and alert configuration remains in transactional storage.

## 5. Reliability Windows Updated

Scheduled jobs calculate success rate, failure rate, latency drift, missing heartbeat state, freshness, and incident pressure over rolling windows.

## 6. Incidents Grouped

Related failures are grouped into incidents using sanitized grouping signals such as workflow identifier, source type, error category, and time window.

## 7. Gemini Insight Generated

Synteq builds a redacted prompt from incident context and reliability metrics. Gemini returns a short operator-facing summary, likely causes, next steps, and escalation guidance.

## 8. Operator Acts

The dashboard and alert channels present the incident, reliability context, and AI-assisted guidance to the operator.
