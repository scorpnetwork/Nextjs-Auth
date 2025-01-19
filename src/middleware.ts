import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export function middleware(req: NextRequest) {
  const cookiesHeader = req.headers.get("cookie");
  const parsedCookies = cookie.parse(cookiesHeader || "");

  const token = parsedCookies["token"];

  const protectedPaths = ["/auth/login", "/auth/register"];

  if (protectedPaths.includes(req.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to home page
  }

  if (!token && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // Redirect to login page
  }

  if (!token && !protectedPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // Redirect to login page
  }

  return NextResponse.next(); // Allow the request to proceed
}

export const config = {
  matcher: ["/", "/about/:path*", "/auth/login", "/auth/register"],
};
