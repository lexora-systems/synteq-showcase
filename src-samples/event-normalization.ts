export type RawWorkflowPayload = {
  source: string;
  event_type: string;
  workflow_id: string;
  execution_id: string;
  status: "succeeded" | "failed" | "running" | "cancelled";
  started_at?: string;
  finished_at?: string;
  error?: {
    category?: string;
    message?: string;
  };
};

export type NormalizedWorkflowEvent = {
  eventId: string;
  tenantId: string;
  sourceType: string;
  workflowId: string;
  executionId: string;
  status: string;
  durationMs: number | null;
  errorCategory: string | null;
  safeSummary: string | null;
  receivedAt: string;
};

export function normalizeWorkflowEvent(input: {
  tenantId: string;
  payload: RawWorkflowPayload;
  receivedAt?: Date;
}): NormalizedWorkflowEvent {
  const startedAt = input.payload.started_at ? new Date(input.payload.started_at) : null;
  const finishedAt = input.payload.finished_at ? new Date(input.payload.finished_at) : null;
  const durationMs =
    startedAt && finishedAt ? Math.max(0, finishedAt.getTime() - startedAt.getTime()) : null;

  return {
    eventId: `demo_${input.payload.execution_id}`,
    tenantId: input.tenantId,
    sourceType: input.payload.source,
    workflowId: input.payload.workflow_id,
    executionId: input.payload.execution_id,
    status: input.payload.status,
    durationMs,
    errorCategory: input.payload.error?.category ?? null,
    safeSummary: input.payload.error?.message ? redactOperationalText(input.payload.error.message) : null,
    receivedAt: (input.receivedAt ?? new Date()).toISOString()
  };
}

function redactOperationalText(value: string): string {
  return value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .replace(/\b(?:token|password|secret|api_key)=\S+/gi, "[redacted-secret]");
}
