# Deployment Overview

This document describes a public-safe deployment pattern for Synteq. It intentionally omits real project identifiers, service account details, network settings, and production commands.

## Runtime Services

- Web service: deployed as a stateless Cloud Run service.
- API service: deployed as a stateless Cloud Run service.
- Workers: deployed as worker processes or job-style Cloud Run services depending on workload.
- Scheduled jobs: triggered by Cloud Scheduler.

## Data Services

- Cloud SQL stores application and control-plane state.
- BigQuery stores normalized operational telemetry and aggregate reliability views.
- Pub/Sub carries ingestion events from API to workers.
- Redis or an equivalent managed cache can be used for dedupe, rate limiting, and distributed worker state.

## Secret Management

Runtime secrets should be stored in Secret Manager and mounted or injected through environment references. Public repos should never include:

- Service account JSON.
- Database connection strings.
- Webhook signing secrets.
- API keys or provider tokens.
- SMTP or email-provider credentials.

## Environments

A typical setup uses separate development, staging, and production environments. Each environment should have isolated secrets, databases, Pub/Sub topics, and BigQuery datasets.

## Public Showcase Notes

This showcase repo does not include deployable production infrastructure. It documents the intended deployment model and provides sample-only assets that are safe for public review.
