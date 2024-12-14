import { clerkMiddleware } from "@clerk/nextjs/server"; // Added for Clerk
import { NextResponse } from "next/server"; // Added for NextResponse

export default clerkMiddleware((req) => {
  // ...existing code...
  return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
        "/api/:path*",
    ],
};