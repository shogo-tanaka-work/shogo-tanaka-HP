import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body as { name?: string; email?: string; message?: string }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Resend API key not configured" }, { status: 500 })
    }

    const contactEmail = process.env.CONTACT_EMAIL
    if (!contactEmail) {
      return NextResponse.json({ error: "Contact email not configured" }, { status: 500 })
    }

    const payload = {
      from: contactEmail,
      to: [email],
      subject: `お問い合わせ: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errText = await res.text()
      return NextResponse.json({ error: "Failed to send email", detail: errText }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}

