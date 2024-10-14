import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // You can add any design or logging logic here if needed, e.g., logging the request URL
  console.log("Middleware executed for URL:", request.url);

  // Optionally manipulate the response headers or perform other simple actions
  response.headers.set("X-Custom-Header", "DesignMode");

  return response;
}

export const config = {
  matcher: "/(.*)", // Apply middleware to all routes
};
