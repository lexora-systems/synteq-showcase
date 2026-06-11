# Incident Grouping Pseudocode

```ts
function groupIncident(event) {
  const fingerprint = stableHash({
    tenantId: event.tenantId,
    sourceType: event.sourceType,
    workflowId: event.workflowId,
    errorCategory: event.errorCategory,
    timeBucket: floorToWindow(event.receivedAt, "15m")
  });

  const existing = findOpenIncident({
    tenantId: event.tenantId,
    fingerprint
  });

  if (existing) {
    appendEvent(existing.id, event);
    updateIncidentSignals(existing.id);
    return existing.id;
  }

  return createIncident({
    tenantId: event.tenantId,
    fingerprint,
    severity: classifySeverity(event),
    title: buildSafeTitle(event)
  });
}
```

This example shows the grouping idea only. It excludes production scoring rules, persistence details, tenant authorization checks, and alert dispatch logic.
