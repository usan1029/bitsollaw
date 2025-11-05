// Node 18+ (Netlify). ESM
// 첫 클릭에서도 백그라운드 메일 트리거가 반드시 나가도록 내부URL 우선 + 2차 fallback 호출
// 응답은 즉시 200, 트리거는 전송 개시만 보장하고 계속 진행(Promise.race; Abort 안함)

const HOURS_TEXT = `📅 근무 가능 시간
- 평일: 09:00 ~ 18:00
- 점심: 12:00 ~ 13:00 (전화/방문 지연 가능)
- 토/일·공휴일: 예약 상담만 진행`;
const CATEGORIES = ["민사","보험","노동","산재","회생","형사","가사"];
const AGENTS = ["이재헌 실장","민은정 실장"];

function qr(label, messageText){ return { label, action:"message", messageText }; }
function kakaoText(text, quicks=[]){
  return { version:"2.0", template:{ outputs:[{ simpleText:{ text } }], quickReplies: quicks } };
}
function menuReply(){
  const quicks = [qr("상담원 연결","상담원 연결"), qr("근무시간","근무시간"), qr("사건 고르기","사건 고르기"), ...CATEGORIES.map(c=>qr(c,c))];
  return kakaoText(
    "원하시는 항목을 선택해주세요. \n - 상담원 연결 \n - 사건 고르기 (민사/보험/노동/산재/회생/형사/가사) \n - 근무시간",
    quicks
  );
}
function categoryReply(cat){
  const pick = AGENTS[Math.floor(Math.random()*AGENTS.length)];
  const text = `선택하신 사건유형: [${cat}]
간단히 사연을 보내주시면 ${pick}이(가) 우선 안내드리겠습니다.
지금 상담원 연결을 원하시면 아래 버튼을 눌러주세요.`;
  return kakaoText(text, [qr("상담원 연결","상담원 연결"), qr("메뉴","메뉴")]);
}
function ok(body){
  return { statusCode:200, headers:{"Content-Type":"application/json; charset=utf-8"}, body: JSON.stringify(body) };
}

// --- 전송 개시만 보장하고, 기다림은 최대 waitMs까지 (요청은 계속 진행) ---
async function fire(url, init, waitMs=1200) {
  console.log("[kakao-skill] fire →", url);
  const p = fetch(url, init).catch(e => {
    console.error("[kakao-skill] fire error:", e?.code || e?.message || e);
  });
  await Promise.race([ p, new Promise(res => setTimeout(res, waitMs)) ]);
}

function isConnectIntent(utter, req){
  const raw = (utter || "").trim();
  const t = raw.normalize("NFKD").replace(/\s+/g,"").toLowerCase();
  if (!t) return false;
  // 흔한 변형 포함
  const keys = ["상담원연결","상담연결","상담원","상담사연결","operator"];
  if (keys.some(k => t.includes(k))) return true;
  // 혹시 액션 타입으로 들어오는 경우도 허용
  if (req?.action?.type) return true;
  return false;
}

export async function handler(event){
  if(event.httpMethod !== "POST") return { statusCode:405, body:"Method Not Allowed" };

  let req={}; try{ req = JSON.parse(event.body || "{}"); }catch{}
  const utter = (req?.userRequest?.utterance || "").trim();
  const user  =  req?.userRequest?.user;
  const lower = utter.toLowerCase();

  console.log("[kakao-skill] invoked. utter=", utter);

  // 0) 기본 진입
  if(!utter || ["메뉴","menu","시작","start"].includes(lower)) return ok(menuReply());

  // 1) 근무시간
  if(lower.includes("근무") || lower.includes("영업") || lower === "근무시간"){
    return ok(kakaoText(HOURS_TEXT, [qr("상담원 연결","상담원 연결"), qr("메뉴","메뉴")]));
  }

  // 2) 사건 고르기
  if(lower.includes("사건 고르기") || lower.includes("사건유형") || CATEGORIES.includes(utter)){
    if(CATEGORIES.includes(utter)) return ok(categoryReply(utter));
    return ok(kakaoText("사건유형을 선택해주세요.", CATEGORIES.map(c=>qr(c,c)).concat([qr("메뉴","메뉴")] ) ));
  }

  // 3) 상담원 연결 → 백그라운드 트리거 (내부 URL → 외부 URL 순차)
  if(isConnectIntent(utter, req)){
    const pick = AGENTS[Math.floor(Math.random()*AGENTS.length)];
    const payload = { utter:"상담원 연결", user: { id: user?.id || "kakao", properties: { nickname: user?.properties?.nickname || "카카오사용자" } }, raw: req };
    const body = JSON.stringify(payload);

    // 1차: 내부 URL (Netlify가 제공)
    const internal =
      process.env.URL ||              // prod 내부
      process.env.DEPLOY_PRIME_URL || // preview 내부
      (event?.headers?.host ? `https://${event.headers.host}` : "");

    const bgPath = "/.netlify/functions/notify-operator-background";
    const headers = { "Content-Type":"application/json", "Accept":"application/json" };

    try {
      if (internal) {
        await fire(internal + bgPath, { method:"POST", headers, body }, 1200);
      } else {
        console.warn("[kakao-skill] no internal URL");
      }
    } catch (e) {
      console.error("[kakao-skill] internal fire exception:", e);
    }

    // 2차: 외부 커스텀 도메인 fallback (네가 curl로 성공하던 그 주소)
    try {
      await fire("https://bitsollaw.com" + bgPath, { method:"POST", headers, body }, 1200);
    } catch (e) {
      console.error("[kakao-skill] external fire exception:", e);
    }

    console.log("[kakao-skill] notify fired (internal→external sequence end)");

    return ok(
      kakaoText(
        `담당자 연결 접수 완료 (${pick}).\n📧 이메일 알림 전송 준비중`,
        [qr("사건 고르기","사건 고르기"), qr("근무시간","근무시간"), qr("메뉴","메뉴")]
      )
    );
  }

  // 4) 기타 — 기본 응답
  const pick = AGENTS[Math.floor(Math.random()*AGENTS.length)];
  return ok(kakaoText(`무엇을 도와드릴까요? 현재는 [${pick}] 담당자가 응대 예정입니다.`, [qr("상담원 연결","상담원 연결"), qr("메뉴","메뉴")]));
}
