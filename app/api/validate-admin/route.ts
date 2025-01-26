import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { adminCode } = await req.json();

  if (adminCode === process.env.ADMIN_CODE) {
    return NextResponse.json({ valid: true }, { status: 200 });
  } else {
    return NextResponse.json(
      { valid: false, message: "Invalid admin code" },
      { status: 401 }
    );
  }
}
