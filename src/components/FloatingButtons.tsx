import { useState } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { AIChat } from "./AIChat";

export function FloatingButtons() {
  const [aiOpen, setAiOpen] = useState(false);
  const waUrl = "https://wa.me/12268556194?text=" + encodeURIComponent("Hi Prime Wave! I would like to get a free proposal.");

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 items-start">
        <button
          onClick={() => setAiOpen(true)}
          aria-label="Open AI Assistant"
          className="group flex items-center gap-2"
        >
          <span className="w-14 h-14 rounded-full bg-gold text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
            <Sparkles size={24} />
          </span>
          <span className="hidden group-hover:inline-block bg-navy text-white text-xs font-semibold px-3 py-2 rounded-md shadow-lg">Ask our AI</span>
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2"
        >
          <span className="wa-pulse w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl" style={{ background: "#25D366" }}>
            <MessageCircle size={26} />
          </span>
          <span className="hidden group-hover:inline-block bg-navy text-white text-xs font-semibold px-3 py-2 rounded-md shadow-lg">Chat on WhatsApp</span>
        </a>
      </div>

      {aiOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setAiOpen(false)}>
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setAiOpen(false)}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-navy shadow-lg flex items-center justify-center hover:bg-gold hover:text-white transition"
            >
              <X size={20} />
            </button>
            <AIChat />
          </div>
        </div>
      )}
    </>
  );
}
