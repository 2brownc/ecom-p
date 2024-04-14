import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthentication } from "./app/actions";

export async function middleware(request: NextRequest) {
  // Check if trying to access prefs page
  if (request.nextUrl.pathname.startsWith("/prefs")) {
    // Check if user is authenticated
    const isAuthenticated = await checkAuthentication();

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  }

  // Check if trying to access login page
  if (request.nextUrl.pathname.startsWith("/login")) {
    // Check if user is already authenticated
    const isAuthenticated = await checkAuthentication();

    // If authenticated, redirect to prefs page
    if (isAuthenticated) {
      return NextResponse.rewrite(new URL("/prefs", request.url));
    }
  }

  if (request.nextUrl.pathname === "/") {
    // Check if user is already authenticated
    const isAuthenticated = await checkAuthentication();

    // If authenticated, redirect to prefs page
    if (isAuthenticated) {
      return NextResponse.rewrite(new URL("/prefs", request.url));
    }
  }

  // Check if trying to access signup page
  if (request.nextUrl.pathname.startsWith("/signup")) {
    // Check if user is already authenticated
    const isAuthenticated = await checkAuthentication();

    // If authenticated, redirect to prefs page
    if (isAuthenticated) {
      return NextResponse.rewrite(new URL("/prefs", request.url));
    }
  }
}
