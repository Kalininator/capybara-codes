import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const code = new URL(request.url).pathname.split("/")[1];
  return NextResponse.redirect(`${request.url}.jpg`);
}
