# Synteq Public Showcase Summary

## What Synteq Does

Synteq monitors workflow execution signals and turns scattered operational events into source freshness, reliability windows, incidents, timelines, and alerting context.

## Why It Matters

Business workflows run across automation tools, CI systems, webhooks, and custom services. When those workflows fail silently, teams lose time reconstructing what happened from disconnected logs. Synteq provides a focused reliability view for workflow health and incident context.

## Implemented Product Flow

1. Choose a GitHub or generic workflow source.
2. Configure the signed webhook or API-key ingestion path.
3. Send a real workflow execution signal.
4. Synteq validates source ownership and normalizes the event.
5. Durable source/workspace signal state and reliability views update.
6. Related failures gain incident and timeline context.
7. Operators review the evidence and choose the next action.

## Current Foundations

- Workflow, heartbeat, and operational-event ingestion.
- Generic webhook/API-key and GitHub Actions sources.
- Source freshness and canonical workspace maturity state.
- Reliability windows, operational dashboards, and incident lifecycle.
- Alert policy and delivery foundations.
- Tenant isolation, idempotency, signature verification, and sanitization patterns.

Incident guidance is currently deterministic and rules-based. AI root-cause analysis and automated remediation are not presented as implemented capabilities.

## What This Showcase Includes

- Product overview and public-safe architecture documentation.
- Synthetic examples of normalized events, incidents, reliability metrics, and webhook payloads.
- Limited sample code for event normalization, scoring, grouping, and webhook validation.
- Static architecture and product-screen mockups.

## What Is Intentionally Excluded

- Production code and proprietary implementation details.
- Real credentials, service-account files, API keys, tokens, database URLs, and webhook secrets.
- Customer data, production logs, private runbooks, production URLs, and infrastructure state.
- Deployable production infrastructure or internal operations procedures.
