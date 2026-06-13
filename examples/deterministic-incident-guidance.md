# Deterministic Incident Guidance Example

Synteq currently uses rules and templates to provide concise operator guidance from sanitized incident evidence.

```json
{
  "generated_by": "rules_v1",
  "summary": "Failure rate increased for the onboarding workflow during the current reliability window.",
  "evidence": [
    "8 failed executions in 15 minutes",
    "success rate declined from the recent baseline"
  ],
  "recommended_actions": [
    "Check the external dependency status",
    "Inspect the most recent sanitized failure category",
    "Monitor for a successful recovery execution"
  ],
  "confidence": "medium"
}
```

The example is synthetic. It does not represent automated root-cause analysis or automated remediation.
