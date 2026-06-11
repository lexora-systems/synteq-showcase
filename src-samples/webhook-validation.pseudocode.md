# Webhook Validation Pseudocode

```ts
function verifyWebhookSignature({ rawBody, timestamp, signature, signingSecret }) {
  if (!timestamp || !signature) {
    throw unauthorized("missing webhook signature");
  }

  if (isOlderThan(timestamp, "5m")) {
    throw unauthorized("stale webhook signature");
  }

  const signedPayload = `${timestamp}.${rawBody}`;
  const expected = hmacSha256(signingSecret, signedPayload);

  if (!constantTimeEqual(signature, expected)) {
    throw unauthorized("invalid webhook signature");
  }
}
```

Production systems should also apply request size limits, replay protection, source ownership checks, rate limits, and structured audit events.
