// For App Router - app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,     // Your email
      pass: process.env.SMTP_PASS,     // App password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,         // The recipient email
    subject: `New Contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
