import type { NextApiRequest, NextApiResponse } from "next";
import { runSourcemapStackDemoOnServer } from "@/lib/sourcemapStackDemoServer";

/** Deep server-side stack for source map verification (captured by Sentry as 500). */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  void req;
  void res;
  runSourcemapStackDemoOnServer();
}
