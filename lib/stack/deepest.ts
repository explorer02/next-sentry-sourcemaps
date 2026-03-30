import { SourcemapStackDemoError } from "../sourcemapStackErrors";

export function sourcemapDemoDeepest(): never {
  throw new SourcemapStackDemoError(
    "Client source map demo: error thrown in lib/stack/deepest.ts",
  );
}
