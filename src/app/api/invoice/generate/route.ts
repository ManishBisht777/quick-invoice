import { generatePdf } from "@/server/generatePdf";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ name: "manish" });
}

export async function POST(request: NextRequest) {
  const result = await generatePdf(request);
  return result;
}
