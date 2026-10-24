import { briefingHtml } from "./briefing";

export const dynamic = "force-static";

export function GET() {
  return new Response(briefingHtml, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
