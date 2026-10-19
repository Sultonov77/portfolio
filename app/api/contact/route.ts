// Contact form → Telegram.
// TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are server-only env vars
// (.env.local locally, Project Settings → Environment Variables on Vercel).

const LIMITS = { name: 100, phone: 30, topic: 100, message: 4000 };

// Best-effort per-IP throttle; resets when the serverless instance restarts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function field(body: Record<string, unknown>, key: keyof typeof LIMITS) {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, LIMITS[key]) : "";
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field
  if (typeof body.website === "string" && body.website !== "") {
    return Response.json({ ok: true });
  }

  const name = field(body, "name");
  const phone = field(body, "phone");
  const topic = field(body, "topic");
  const message = field(body, "message");
  const digits = phone.replace(/\D/g, "");
  if (!name || !message || !/^[+0-9 ()-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const details = [`👤 ${name}`, `📞 ${phone}`, ...(topic ? [`🏷 ${topic}`] : [])];
  const text = ["📩 Saytdan yangi xabar", details.join("\n"), message].join("\n\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });

  if (!res.ok) {
    console.error("Contact form: Telegram sendMessage failed", res.status, await res.text());
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
