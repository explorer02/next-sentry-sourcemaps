/** Thrown from nested demo stacks so Sentry can group and label them. */
export class SourcemapStackDemoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SourcemapStackDemoError";
  }
}
