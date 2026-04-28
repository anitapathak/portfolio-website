import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; // This is your verified email

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const htmlContent = `
      <h1>Message from: ${subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>Here is the message you submitted:</p>
      <p><strong>${message}</strong></p>
      <p>Visitor Email: ${email}</p>
      <p>We will get back to you soon.</p>
    `;

    const data = await resend.emails.send({
      // FIXED: Must use this specific address for testing
      from: "onboarding@resend.dev", 
      
      // FIXED: On Free Tier, you can only send to yourself
      to: [fromEmail], 
      
      // ADDED: This ensures when you click "Reply" in your inbox, it goes to the visitor
      reply_to: email, 
      
      subject: subject,
      html: htmlContent, 
    });

    return NextResponse.json(data);
  } catch (error) {
    // Improved error logging to help you debug
    console.error("Resend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}