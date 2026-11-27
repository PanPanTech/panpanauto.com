import { site } from "../lib/site";

// One canonical host. www and the production pages.dev host 301 to the apex in a
// single hop, keeping path and query. Preview hosts (<hash>.panpanauto.pages.dev)
// are left alone so branch previews still work.
const redirectHosts = new Set(["www.panpanauto.com", "panpanauto.pages.dev"]);

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const url = new URL(context.request.url);
  if (redirectHosts.has(url.hostname)) {
    const target = new URL(url.pathname + url.search, site.url);
    return Response.redirect(target.toString(), 301);
  }
  return context.next();
}
