# Synteq Showcase

Synteq is an operational intelligence layer for workflow automation teams. It watches business-critical automations, normalizes events from tools such as n8n, GitHub Actions, GoHighLevel, and webhooks, then turns failures, latency drift, and reliability patterns into incidents and action-oriented operational insight.

This repository is a sanitized public showcase for Devpost and Google for Startups review. It demonstrates the product architecture, technical approach, data flow, and selected implementation patterns without exposing production code, secrets, customer data, deployment credentials, or sensitive business logic.

## Problem

Modern teams run revenue, onboarding, support, and fulfillment through automation platforms. When those workflows fail silently, teams often discover the issue from a customer complaint, a broken handoff, or a missed SLA. Logs exist, but they are fragmented across vendors and rarely explain operational impact.

Synteq helps teams answer:

- Which workflows are unhealthy right now?
- Which failures need attention first?
- Is this a one-off error or a reliability trend?
- What should an operator do next?

## Key Features

- Event ingestion for workflow executions, heartbeats, scheduler runs, and webhook callbacks.
- Normalized operational event model across workflow vendors.
- Reliability windows for success rate, failure rate, latency, freshness, and cost signals.
- Incident grouping for repeated or related workflow failures.
- Control-plane setup for workflow sources, ingestion keys, alert channels, and team roles.
- Gemini-assisted operational insight generation for incident summaries and next steps.
- Google Cloud deployment pattern using managed services for ingestion, compute, storage, analytics, and secrets.

## Google Cloud + Gemini Usage

The production architecture is designed around Google Cloud managed services:

- Cloud Run hosts stateless API and web workloads.
- Pub/Sub buffers ingest events and decouples webhook traffic from analysis workers.
- Cloud SQL stores tenant, incident, workflow, and control-plane state.
- BigQuery stores normalized operational telemetry and powers reliability windows.
- Cloud Scheduler triggers aggregate, anomaly, and alert dispatch jobs.
- Secret Manager stores runtime secrets and provider credentials.
- Vertex AI with Gemini generates concise incident narratives, likely causes, and operator next steps from sanitized operational context.

## Demo

- Video link: `https://youtu.be/ncGceCxQi2c`
- Architecture diagram: [assets/synteq-architecture.svg](assets/synteq-architecture.svg)

## Tech Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Fastify-style API patterns, TypeScript
- Data: Cloud SQL, BigQuery, Redis-style distributed cache patterns
- Messaging: Pub/Sub-style event queue
- AI: Vertex AI with Gemini for operational insight generation
- Security: HMAC webhook verification, RBAC, secret indirection, tenant isolation, redacted AI prompts

## What Is Included

- Sanitized product and architecture documentation.
- Synthetic JSON examples for workflow events, incidents, reliability metrics, and webhook payloads.
- Limited sample code for event normalization, reliability scoring, grouping, and webhook validation.
- Static visual assets for architecture and product screens.

## What Is Excluded

- Production source code and private business logic.
- `.env` files, credentials, service account JSON, API keys, tokens, webhooks, database URLs, and private logs.
- Customer data, real user data, production URLs, internal runbooks, and infrastructure state.
- Full deployment automation and private operations procedures.

## Submission Note

This is a public-safe showcase repository. It is intentionally not the full production repository. The goal is to help judges understand Synteq's product, architecture, Google Cloud usage, Gemini usage, and implementation style while protecting credentials, users, infrastructure, and intellectual property.
