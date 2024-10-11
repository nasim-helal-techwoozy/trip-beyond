import { NextRequest, NextResponse } from "next/server";
import { authTp } from "./utils/axios/authTp";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  /*======Start of================AUTHENTICATION TO TRAVELPORT API RESOURCE================= */
  const tpAuthToken = request.cookies.get("tpAuthToken");
  if (!tpAuthToken) {
    const { access_token, expires_in } = await authTp();
    response.cookies.set("tpAuthToken", access_token, {
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: expires_in,
    });
  }
  /*======End of================AUTHENTICATION TO TRAVELPORT API RESOURCE================= */

  return response;
}

export const config = {
  matcher: "/(.*)", // Apply middleware to all routes
};
