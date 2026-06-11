# Example Gemini Prompt Template

This template is sanitized and uses synthetic placeholders only.

```text
You are helping an operations team understand a workflow incident.

Rules:
- Use only the context below.
- Do not invent customer names, credentials, or private infrastructure details.
- Keep the response concise and action-oriented.
- If the evidence is incomplete, say what is missing.

Incident:
- Title: {{incident_title}}
- Severity: {{severity}}
- Workflow: {{workflow_name}}
- Environment: {{environment}}
- Status: {{incident_status}}

Reliability window:
- Total executions: {{total_executions}}
- Failed executions: {{failed_executions}}
- Success rate: {{success_rate}}
- Baseline success rate: {{baseline_success_rate}}
- P95 latency: {{latency_p95_ms}} ms
- Freshness: {{freshness_seconds}} seconds

Recent sanitized errors:
{{redacted_error_summaries}}

Return JSON with:
{
  "summary": "one or two sentences",
  "likely_causes": ["short cause"],
  "recommended_next_steps": ["operator action"],
  "escalation": "none | monitor | page"
}
```
