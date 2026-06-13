# Review Notes

## Suggested Review Path

1. Read [../README.md](../README.md).
2. Review [../assets/synteq-architecture.svg](../assets/synteq-architecture.svg).
3. Open [data-flow.md](data-flow.md).
4. Inspect the synthetic examples in [../examples](../examples).
5. Inspect the limited patterns in [../src-samples](../src-samples).

## What To Look For

- Clear problem framing around silent workflow failures.
- Source ownership and signal-normalization boundaries.
- Separation of real signal history from test, demo, and simulation activity.
- Source freshness, reliability windows, and incident context.
- Honest separation between implemented capabilities and future themes.
- Separation between public showcase material and private production implementation.

## Demo Narrative

1. Configure a workflow source.
2. Send a failed execution event.
3. Synteq validates and normalizes the event.
4. Source and reliability state update.
5. Related failures gain incident and timeline context.
6. The operator reviews the evidence and chooses the next action.

## Public Repository Scope

This repository demonstrates product thinking and selected implementation patterns without publishing production code, customer data, credentials, private infrastructure, or internal operations procedures.
