# Architecture

Synteq is structured as a workflow reliability intelligence system. The design separates source setup, authenticated ingestion, normalization, durable signal state, reliability analytics, incident management, and operator-facing views.

## High-Level Components

- Web application: source setup, activation guidance, operational overview, incidents, reliability views, and settings.
- API service: authentication, tenant routing, source management, ingestion, incidents, alerts, and control-plane operations.
- Ingestion layer: validates schemas, signatures, tenant/source ownership, request limits, and idempotency.
- Normalization layer: maps workflow and provider events into shared operational signals.
- Signal-state layer: records durable real and preview history for workspaces and sources after successful persistence.
- Analytics layer: stores execution telemetry and produces rolling reliability windows.
- Incident layer: groups related failures and maintains sanitized timelines and attention views.
- Alerting foundation: manages policies, channels, and dispatch state where delivery infrastructure is configured.

## Data Boundaries

- Transactional storage holds tenant, user, source, signal-state, incident, and control-plane records.
- Analytical storage holds execution telemetry and reliability aggregates.
- Optional queued ingestion can decouple bursty webhook traffic from persistence workers.
- Runtime secrets remain outside source control.

## Workspace Maturity

Workspace maturity is backend-owned and tenant-scoped. It uses durable real signal history plus active ingest-capable source inventory. Demo, simulation, and test history remains preview-only. Delivery verification and API-key use are not treated as proof of successful real ingestion.

The supported states are `new`, `configuring`, `active`, `degraded`, `demo_preview`, and `unknown`.

## Design Principle

Synteq focuses on workflow reliability and operational awareness. It is not positioned as a full replacement for logs, traces, APM, or broader observability platforms.
