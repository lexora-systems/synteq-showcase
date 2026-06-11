# Architecture

Synteq is structured as an operational intelligence system for workflow automation. The core design separates ingestion, normalization, reliability analytics, incident management, and human-readable insight generation.

## High-Level Components

- Web app: operator dashboard, source setup, incidents, reliability views, and team settings.
- API service: authentication, tenant routing, source management, incident APIs, and control-plane operations.
- Ingestion layer: receives workflow events and webhook callbacks, verifies signatures, and publishes normalized work.
- Worker layer: consumes queued events, normalizes payloads, writes telemetry, updates reliability windows, and groups incidents.
- Analytics layer: aggregates execution reliability in queryable time windows.
- AI insight layer: sends redacted incident context to Gemini through Vertex AI and stores generated operator guidance.
- Alerting layer: dispatches incident handoffs through configured channels.

## Google Cloud Reference Architecture

1. Cloud Run hosts the web and API services.
2. Pub/Sub buffers incoming workflow events and protects the API from bursty webhook traffic.
3. Cloud SQL stores tenants, users, workflow sources, incident state, and control-plane records.
4. BigQuery stores normalized operational events for analytics and reliability windows.
5. Cloud Scheduler triggers aggregate, anomaly, and alert jobs on a recurring cadence.
6. Secret Manager stores runtime credentials and provider secrets.
7. Vertex AI provides Gemini models for incident summaries and next-step recommendations.

See [../assets/synteq-architecture.png](../assets/synteq-architecture.png) for a visual diagram.

## Multi-Tenant Boundary

Every event, source, incident, and metric is associated with a tenant identifier. The API and worker layers apply tenant scoping before reading or writing operational data. Showcase examples use synthetic tenant identifiers only.

## AI Boundary

Gemini prompts are built from sanitized operational context. The model receives incident facts, aggregate reliability signals, and redacted metadata. It does not need raw customer payloads, credentials, webhook secrets, or full database records.

## Design Principle

Synteq treats workflow observability as an operational decision system, not just a log viewer. The architecture is built to answer what happened, how widespread it is, how urgent it is, and what an operator should do next.
