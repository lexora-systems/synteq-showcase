# Data Flow

## 1. Source Configured

An operator configures a GitHub integration or a generic workflow source with an ingestion key.

## 2. Workflow Signal Received

A workflow platform or webhook source sends an execution signal. The API validates the request shape, authentication or signature, and tenant-owned source identity.

## 3. Event Normalized

Provider-specific fields are mapped into a shared operational event model containing source, workflow, execution status, timestamps, duration, environment, and sanitized metadata.

## 4. Event Persisted

Operational events are written to transactional or analytical storage according to the ingestion path. Duplicate and rejected events do not create new canonical signal history.

## 5. Signal State Recorded

After successful persistence, server-owned signal origin updates durable workspace and source state. Real history is separate from test, simulation, and demo preview history.

## 6. Reliability and Freshness Updated

Source freshness uses the last persisted real signal. Rolling reliability windows summarize success, failure, timeout, latency, and related operational evidence.

## 7. Incident Context Built

Related failures can open, refresh, or resolve incidents. Timelines and attention views present sanitized evidence for operators.

## 8. Operator Acts

The dashboard and configured alerting surfaces present source state, reliability context, incidents, and deterministic guidance. The operator remains responsible for diagnosis and remediation.
