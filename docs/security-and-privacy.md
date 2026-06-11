# Security and Privacy

Synteq is designed around tenant isolation, secret hygiene, webhook verification, and data minimization.

## Tenant Isolation

Every operational event, source, incident, metric, and user action is scoped to a tenant. API and worker code should verify tenant ownership before returning or mutating records.

## Secret Hygiene

Production secrets belong in Secret Manager or equivalent secure runtime storage. They should never be committed to Git, printed in logs, inserted into AI prompts, or embedded in client-side code.

## Webhook Security

Webhook integrations should use timestamped HMAC signatures or equivalent provider-native verification. Requests with missing, stale, or invalid signatures should be rejected before they enter the queue.

## AI Privacy

Gemini prompts should use redacted operational context:

- Keep workflow names and synthetic identifiers when helpful.
- Remove credentials, tokens, emails, phone numbers, and payload bodies unless explicitly safe.
- Prefer aggregate metrics over raw customer records.
- Store generated insight with provenance and timestamps.

## Logging

Logs should avoid raw headers, authorization values, full webhook bodies, database URLs, and provider tokens. Error messages should be actionable without exposing sensitive data.

## Showcase Repository Controls

This repository is sanitized. It excludes production implementation details, credentials, internal runbooks, private logs, and customer data.
