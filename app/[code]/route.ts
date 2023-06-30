import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: Request) {
  const code = new URL(request.url).pathname.split("/")[1];
  const headers = new Headers();

  headers.set("Content-Type", "image/jpg");

  const file = fs.readFileSync(`./public/${code}.jpg`);
  const blob = new Blob([file], {type: 'image/jpg'})
  
  return new NextResponse(blob, { status: 200, statusText: "OK", headers });
}
