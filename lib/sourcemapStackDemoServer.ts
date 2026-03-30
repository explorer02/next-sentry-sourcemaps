import { SourcemapStackDemoError } from "./sourcemapStackErrors";

function serverStackDeepest(): never {
  throw new SourcemapStackDemoError(
    "Server source map demo: error thrown in serverStackDeepest()",
  );
}

function serverStackLevel4(): void {
  serverStackDeepest();
}

function serverStackLevel3(): void {
  serverStackLevel4();
}

function serverStackLevel2(): void {
  serverStackLevel3();
}

function serverStackLevel1(): void {
  serverStackLevel2();
}

/** Used from API routes to exercise Node/server bundle source maps. */
export function runSourcemapStackDemoOnServer(): void {
  serverStackLevel1();
}
