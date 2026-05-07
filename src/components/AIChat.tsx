import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { askAI } from "@/utils/ai.functions";

type Msg = { role: "user" | "assistant"; content: string };

export function AIChat() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm the Prime Wave AI assistant. Ask me about our services, pricing, or process." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const reply = await askAI({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Sorry, I had trouble responding. Please reach out via WhatsApp +1 226 855 6194." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
      <div className="bg-navy px-5 py-4 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
        <div>
          <p className="text-white font-semibold text-sm">Prime Wave AI</p>
          <p className="text-white/60 text-xs">Online · Replies instantly</p>
        </div>
      </div>
      <div ref={scrollRef} className="h-96 overflow-y-auto p-5 space-y-4 bg-surface">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-navy text-white rounded-br-sm" : "bg-white border border-border text-navy rounded-bl-sm"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-border px-4 py-3 rounded-2xl">
              <Loader2 size={16} className="animate-spin text-gold" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about pricing, services, timelines..."
          className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:border-gold text-sm"
        />
        <button onClick={send} disabled={loading} className="bg-gold text-white px-5 rounded-md hover:opacity-90 transition disabled:opacity-50">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
