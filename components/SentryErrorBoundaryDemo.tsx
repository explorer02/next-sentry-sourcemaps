import { ErrorBoundary } from "@sentry/nextjs";
import { useState } from "react";

class ErrorBoundaryDemoError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ErrorBoundaryDemoError";
  }
}

/** Throws during render so React error boundaries (and Sentry) can catch it. */
function RenderPhaseBug({ fire }: { fire: boolean }) {
  if (fire) {
    throw new ErrorBoundaryDemoError(
      "Sentry ErrorBoundary demo: intentional render-phase error",
    );
  }
  return null;
}

export function SentryErrorBoundaryDemo() {
  const [fire, setFire] = useState(false);
  const [boundaryKey, setBoundaryKey] = useState(0);

  return (
    <div className="demo-panel">
      <h2>Error boundary</h2>
      <p className="demo-panel__hint">
        Render-phase errors are caught by Sentry&apos;s{" "}
        <code>ErrorBoundary</code> and reported with component stack metadata.
      </p>
      <ErrorBoundary
        key={boundaryKey}
        beforeCapture={(scope) => {
          scope.setTag("demo", "error-boundary");
        }}
        fallback={({ error, componentStack, eventId }) => (
          <div className="demo-panel__fallback">
            <p>
              <strong>Caught by ErrorBoundary</strong> — check this issue in
              Sentry (component stack + symbolicated frames).
            </p>
            <p className="demo-panel__event-id">
              <span>event id:</span> <code>{eventId}</code>
            </p>
            <pre className="demo-panel__pre">
              {error instanceof Error ? error.message : String(error)}
            </pre>
            <details className="demo-panel__details">
              <summary>Component stack</summary>
              <pre className="demo-panel__pre">{componentStack}</pre>
            </details>
            <button
              type="button"
              className="demo-panel__reset"
              onClick={() => {
                setFire(false);
                setBoundaryKey((k) => k + 1);
              }}
            >
              Reset boundary
            </button>
          </div>
        )}
      >
        <div className="demo-panel__actions">
          <button
            type="button"
            className="demo-panel__trigger"
            disabled={fire}
            onClick={() => setFire(true)}
          >
            Trigger render error
          </button>
          <RenderPhaseBug fire={fire} />
        </div>
      </ErrorBoundary>
    </div>
  );
}
