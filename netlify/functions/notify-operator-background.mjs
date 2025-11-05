// Netlify Background Function (-background 로 끝나야 함)
// 네가 준 원본을 그대로 기반 + 다중 수신자 지원 + 로그 강화

import nodemailer from "nodemailer";

const FROM = process.env.GMAIL_USER;
const PASS = process.env.GMAIL_APP_PASSWORD;
const TO   = process.env.ALERT_TO_EMAIL || FROM;
const recipients = String(TO).split(/[,;]\s*/).filter(Boolean);

const transporter = (FROM && PASS)
  ? nodemailer.createTransport({
      host:"smtp.gmail.com", port:465, secure:true,
      auth:{ user: FROM, pass: PASS }
    })
  : null;

const esc = (s) => String(s||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");

export async function handler(event){
  console.log("[notify-bg] invoked", new Date().toISOString());

  if(event.httpMethod !== "POST") {
    console.warn("[notify-bg] method:", event.httpMethod);
    return { statusCode:405, body:"Method Not Allowed" };
  }

  let req={}; try{ req = JSON.parse(event.body || "{}"); }catch(e){ console.error("[notify-bg] JSON parse err", e); }
  const { utter, user, raw } = req;

  if (!transporter) {
    console.error("[notify-bg] transporter missing (env?)");
    return { statusCode: 202, body: "queued" };
  }

  const subject = `🔔 카카오 상담원 연결 요청 | 입력: ${String(utter||"").slice(0,20)}`;
  const html = `
    <h3>카카오 챗봇 상담원 연결 요청</h3>
    <ul>
      <li><b>카카오 유저ID:</b> ${user?.id || "-"}</li>
      <li><b>닉네임:</b> ${user?.properties?.nickname || "-"}</li>
      <li><b>최근 입력:</b> ${esc(utter)}</li>
      <li><b>수신시각:</b> ${new Date().toLocaleString("ko-KR",{ timeZone:"Asia/Seoul" })}</li>
    </ul>
    <pre style="white-space:pre-wrap;background:#f6f8fa;padding:12px;border-radius:8px;">${esc(JSON.stringify(raw,null,2))}</pre>`.trim();

  try {
    await transporter.sendMail({ from: FROM, to: recipients, subject, html });
    console.log("[notify-bg] mail sent →", recipients.join(", "));
  } catch (e) {
    console.error("[notify-bg] sendMail failed", e);
  }

  return { statusCode: 202, body: "queued" };
}
