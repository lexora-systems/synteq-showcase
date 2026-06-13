# Security and Privacy

Synteq is designed around tenant isolation, source ownership, secret hygiene, webhook verification, and data minimization.

## Tenant and Source Isolation

Operational events, sources, signal state, incidents, metrics, and user actions are tenant-scoped. Ingestion paths verify that a source belongs to the authenticated tenant before it can contribute canonical signal history.

## Secret Hygiene

Runtime secrets belong in secure runtime storage. They must never be committed to Git, printed in logs, embedded in client-side code, or included in public examples.

## Webhook Security

Webhook integrations use provider-native signatures or timestamped HMAC verification where configured. Request limits, replay protection, idempotency, and source ownership checks are applied at ingestion boundaries.

## Data Minimization

Synteq is intended to receive workflow execution metadata, not customer records. Logs and product views avoid raw authorization headers, credentials, full webhook bodies, database URLs, and provider tokens.

## Showcase Repository Controls

This repository contains only synthetic examples and sanitized documentation. It excludes production implementation details, credentials, internal runbooks, private logs, customer data, and production infrastructure identifiers.
