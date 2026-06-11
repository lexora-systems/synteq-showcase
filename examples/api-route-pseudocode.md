# Example API Route Pseudocode

```ts
post("/v1/ingest/workflow-event", async (request, reply) => {
  const tenant = await authenticateTenant(request);
  const rawBody = await readRawBody(request);

  verifyWebhookSignature({
    rawBody,
    signatureHeader: request.headers["x-demo-signature"],
    timestampHeader: request.headers["x-demo-timestamp"],
    signingSecret: runtimeSecret("WEBHOOK_SIGNING_SECRET")
  });

  const normalized = normalizeWorkflowEvent({
    tenantId: tenant.id,
    sourceType: request.body.source,
    payload: request.body
  });

  await publishToQueue("workflow-events", normalized);

  return reply.code(202).send({
    accepted: true,
    event_id: normalized.event_id
  });
});
```

This is intentionally pseudocode. It does not include production route handlers, database calls, internal authorization logic, or real secret names.
