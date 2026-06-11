# Synteq Devpost Submission Summary

## What Synteq Does

Synteq monitors automated workflows and turns scattered execution data into operational intelligence. It helps teams detect silent workflow failures, understand reliability trends, group related incidents, and decide what to fix first.

## Why It Matters

Business workflows increasingly run across automation tools, CRMs, schedulers, webhooks, and custom integrations. When those automations break, teams lose time reconstructing what happened from disconnected logs. Synteq gives operators a single reliability view for workflow health, incident context, and next actions.

## Google Cloud Usage

Synteq is designed for a managed Google Cloud deployment:

- Cloud Run for API and web services.
- Pub/Sub for event ingestion and worker decoupling.
- Cloud SQL for application state.
- BigQuery for operational telemetry and reliability analytics.
- Cloud Scheduler for recurring aggregate, anomaly, and alert jobs.
- Secret Manager for runtime credential storage.

## Gemini / Vertex AI Usage

Synteq uses Gemini through Vertex AI to generate operational insight from sanitized incident context. The prompt includes workflow status, recent failures, reliability windows, and redacted metadata. Gemini returns a concise summary, likely causes, suggested next steps, and escalation guidance for human operators.

## What This Showcase Includes

- Product overview and architecture documentation.
- Sanitized data-flow and deployment notes.
- Synthetic examples of normalized events, incidents, metrics, and webhook payloads.
- Limited sample code for event normalization, scoring, grouping, and webhook verification.
- Static diagrams and product-screen mockups.

## What Is Intentionally Excluded

- Production codebase and proprietary business logic.
- Real credentials, service account JSON, API keys, tokens, database URLs, and webhook secrets.
- Customer data, production logs, private runbooks, exact infrastructure state, and private deployment automation.

This repository is intended to be safe for public judging while still showing the technical substance and product thinking behind Synteq.
