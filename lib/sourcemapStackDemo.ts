import { SourcemapStackDemoError } from "./sourcemapStackErrors";

/** Deepest frame — should appear at the top of the symbolicated stack. */
function sourcemapDemoDeepest(): never {
  throw new SourcemapStackDemoError(
    "Client source map demo: error thrown in sourcemapDemoDeepest()",
  );
}

function sourcemapDemoLevel4(): void {
  sourcemapDemoDeepest();
}

function sourcemapDemoLevel3(): void {
  sourcemapDemoLevel4();
}

function sourcemapDemoLevel2(): void {
  sourcemapDemoLevel3();
}

function sourcemapDemoLevel1(): void {
  sourcemapDemoLevel2();
}

/**
 * Call from a click handler (or similar). Uncaught, it produces a deep stack
 * across this file so you can verify browser source maps in Sentry.
 */
export function runSourcemapStackDemo(): void {
  sourcemapDemoLevel1();
}
