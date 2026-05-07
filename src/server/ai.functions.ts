import { createServerFn } from "@tanstack/react-start";

const SYSTEM = `You are the Prime Wave Agency AI assistant. Answer questions about web design, pricing starting from $299, services including web design, SEO, ecommerce, WhatsApp bots and maintenance. Our founder is Marcus Derrick. We are based in Canada. WhatsApp is +12268556194. Email is info.primewaveagency@gmail.com. Always be professional, helpful and encourage visitors to get in touch. Keep replies concise (2-4 sentences).`;

type Msg = { role: "user" | "assistant"; content: string };

export const askAI = createServerFn({ method: "POST" })
  .inputValidator((d: { messages: Msg[] }) => d)
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) return "Our AI is not configured yet. Please reach us on WhatsApp +1 226 855 6194 or email info.primewaveagency@gmail.com.";
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM }, ...data.messages],
      }),
    });
    if (!res.ok) {
      return "I'm having trouble responding right now. Please reach out via WhatsApp +1 226 855 6194.";
    }
    const json = await res.json() as { choices?: Array<{ message?: { content?: string } }> };
    return json.choices?.[0]?.message?.content ?? "Could you rephrase that?";
  });
