import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
      console.error("Missing email configuration:", {
        host: !!process.env.EMAIL_SERVER_HOST,
        user: !!process.env.EMAIL_SERVER_USER,
        password: !!process.env.EMAIL_SERVER_PASSWORD,
      })
      return NextResponse.json(
        { error: "Email server not configured" },
        { status: 500 }
      )
    }

    // Create transporter with Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.EMAIL_SERVER_HOST,
      port: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: "vincentotienoakuku@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Thank you for contacting Vincent Otieno",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for your message. I have received your inquiry and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Vincent Otieno</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          { error: "Email authentication failed. Please check your credentials." },
          { status: 500 }
        )
      }
      if (error.message.includes("ENOTFOUND")) {
        return NextResponse.json(
          { error: "Email server not found. Please check your configuration." },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
