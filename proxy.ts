import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const { pathname } = request.nextUrl;

  if (!session && pathname.startsWith("/notes")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (
    session &&
    (pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/notes", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/notes/:path*", "/sign-in", "/sign-up"],
};
