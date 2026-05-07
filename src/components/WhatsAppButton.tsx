import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const url = `https://wa.me/12268556194?text=${encodeURIComponent("Hi Prime Wave! I would like to get a free proposal.")}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <span className="hidden group-hover:inline-block bg-navy text-white text-xs font-semibold px-3 py-2 rounded-md shadow-lg">Chat with us</span>
      <span className="wa-pulse w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl" style={{ background: "#25D366" }}>
        <MessageCircle size={26} />
      </span>
    </a>
  );
}
