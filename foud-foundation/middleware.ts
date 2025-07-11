import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { method, nextUrl } = request;
  const urlPath = `${nextUrl.pathname}${nextUrl.search}`;

  // Collect query params
  const queryParams: Record<string, string> = Object.fromEntries(
    nextUrl.searchParams.entries()
  );

  let body: unknown = null;

  // Attempt to read body for non-GET/HEAD/OPTIONS requests.
  if (!["GET", "HEAD", "OPTIONS"].includes(method)) {
    const contentType = request.headers.get("content-type") || "";

    try {
      const cloned = request.clone();
      if (contentType.includes("application/json")) {
        body = await cloned.json();
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        const form = await cloned.formData();
        body = Object.fromEntries(form.entries());
      } else if (contentType.includes("text/plain")) {
        body = await cloned.text();
      } else {
        // For other content-types, skip to avoid large binary logs
        body = "[unlogged content-type]";
      }
    } catch {
      body = "[unavailable]";
    }
  }

  console.log(
    `[HTTP] ${new Date().toISOString()} - ${method} ${urlPath} | query=${JSON.stringify(
      queryParams
    )} | body=${JSON.stringify(body)}`
  );

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
