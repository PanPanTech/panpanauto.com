// Replaces app/inquiry/route.ts. Static export cannot emit a 301 route handler.
// Pages serves both /inquiry and /inquiry/ from this file and keeps the query string.
export async function onRequest(context: { request: Request }): Promise<Response> {
  const url = new URL(context.request.url);
  url.pathname = "/contact/";
  return Response.redirect(url.toString(), 301);
}
