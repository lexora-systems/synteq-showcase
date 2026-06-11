export type ReliabilityInputs = {
  totalExecutions: number;
  failedExecutions: number;
  latencyP95Ms: number;
  targetLatencyP95Ms: number;
  freshnessSeconds: number;
  maxFreshnessSeconds: number;
};

export function calculateReliabilityScore(input: ReliabilityInputs): number {
  if (input.totalExecutions <= 0) {
    return 100;
  }

  const successRate = 1 - input.failedExecutions / input.totalExecutions;
  const latencyScore = ratioScore(input.targetLatencyP95Ms, input.latencyP95Ms);
  const freshnessScore = ratioScore(input.maxFreshnessSeconds, input.freshnessSeconds);

  const weighted =
    successRate * 70 +
    latencyScore * 20 +
    freshnessScore * 10;

  return clamp(Math.round(weighted), 0, 100);
}

function ratioScore(target: number, actual: number): number {
  if (actual <= target) {
    return 1;
  }

  if (actual <= 0) {
    return 0;
  }

  return clamp(target / actual, 0, 1);
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
