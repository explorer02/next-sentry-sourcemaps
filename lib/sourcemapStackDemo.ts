import { sourcemapDemoLevel1 } from "./stack/level1";

/**
 * Call from a click handler (or similar). Uncaught, it produces a deep stack
 * across multiple files so you can verify browser source maps in Sentry.
 */
export function runSourcemapStackDemo(): void {
  sourcemapDemoLevel1();
}
