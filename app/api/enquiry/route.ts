import { NextResponse } from "next/server";

// Receives admission enquiries from the hero form.
// Connect this to email (Resend / Nodemailer), a Google Sheet, or your school ERP.
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data?.parent || !/^[6-9]\d{9}$/.test(String(data?.phone ?? "")) || !data?.grade) {
    return NextResponse.json(
      { ok: false, error: "Enter the parent’s name, a 10-digit mobile number and the class." },
      { status: 400 }
    );
  }
  console.log("New admission enquiry:", data);
  return NextResponse.json({ ok: true });
}
