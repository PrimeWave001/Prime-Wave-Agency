import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FloatingButtons() {
  const waUrl = waLink("Hi Prime Wave! I would like to get a free proposal.");

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden group-hover:inline-block bg-[#0F1630] border border-white/10 text-[#F5F7FA] text-xs font-semibold px-3 py-2 rounded-lg shadow-lg">
        Chat on WhatsApp
      </span>
      <span className="wa-pulse w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl" style={{ background: "#25D366" }}>
        <MessageCircle size={26} />
      </span>
    </a>
  );
}
