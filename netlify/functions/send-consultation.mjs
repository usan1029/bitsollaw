// netlify/functions/send-consultation.mjs
import nodemailer from "nodemailer";

const json = (data, status = 200, extraHeaders = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", ...extraHeaders },
  });

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export default async (request, context) => {
  // CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ ok: false, error: "Method Not Allowed" }, 405, corsHeaders);
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { name, phone, email, practiceArea, content, privacyAgreed } = body;

    if (!name || !phone || !practiceArea || !content || privacyAgreed !== true) {
      return json({ ok: false, error: "필수 항목 누락 또는 미동의" }, 400, corsHeaders);
    }

    const {
      GMAIL_USER,
      GMAIL_APP_PASSWORD,
      ALERT_TO_EMAILS, // 권장
      ALERT_TO_EMAIL,  // 오타 대비
      SITE_NAME = "빛솔 법률사무소",
    } = process.env;

    const recipients = (ALERT_TO_EMAILS || ALERT_TO_EMAIL || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || recipients.length === 0) {
      return json(
        { ok: false, error: "환경변수 미설정(GMAIL_USER/GMAIL_APP_PASSWORD/ALERT_TO_EMAIL(S))" },
        500,
        corsHeaders
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });

    const subject = `[${SITE_NAME}] 온라인 상담 신청 - ${name} / ${practiceArea}`;
    const html = `
      <h2>온라인 상담 신청</h2>
      <p><b>성명:</b> ${name}</p>
      <p><b>연락처:</b> ${phone}</p>
      <p><b>이메일:</b> ${email || "-"}</p>
      <p><b>상담 분야:</b> ${practiceArea}</p>
      <p><b>상담 내용:</b><br>${String(content || "").replace(/\n/g, "<br>")}</p>
      <hr>
      <small>자동 알림 메일 — 수신: ${recipients.join(", ")}</small>
    `;

    await transporter.sendMail({
      from: `"${SITE_NAME} 상담" <${GMAIL_USER}>`,
      to: recipients,
      subject,
      html,
      replyTo: email && /\S+@\S+\.\S+/.test(email) ? email : undefined,
    });

    return json({ ok: true, message: "상담 신청 접수 완료" }, 200, corsHeaders);
  } catch (err) {
    console.error("send-consultation error:", err);
    return json({ ok: false, error: "메일 발송 실패" }, 500, corsHeaders);
  }
};
