# Judging Notes

## Suggested Review Path

1. Read the product overview in [../README.md](../README.md).
2. Review the architecture diagram in [../assets/synteq-architecture.svg](../assets/synteq-architecture.svg).
3. Open [data-flow.md](data-flow.md) to understand how events become incidents.
4. Inspect the synthetic examples in [../examples](../examples).
5. Inspect the limited code samples in [../src-samples](../src-samples).
6. Read [../SUBMISSION.md](../SUBMISSION.md) for the concise Devpost summary.

## What To Look For

- Clear problem framing around silent workflow failures.
- Practical use of Google Cloud managed services.
- Gemini usage that supports operators instead of replacing them.
- Data-minimizing AI prompt design.
- Separation between public showcase material and private production implementation.

## Demo Narrative

The recommended demo flow:

1. A workflow source emits a failed execution event.
2. Synteq normalizes the event and updates reliability metrics.
3. Related failures are grouped into an incident.
4. Gemini generates a concise operator summary and next steps.
5. The operator reviews the incident and chooses a remediation path.

## Public Repo Scope

This repository is intentionally limited. It is meant to demonstrate architecture, product thinking, and sample implementation patterns without publishing production code or operational secrets.
