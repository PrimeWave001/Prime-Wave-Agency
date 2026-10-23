export const WHATSAPP_URL = "https://wa.me/639758278768";
export const WHATSAPP_DISPLAY = "+63 975 827 8768";
export const EMAIL = "info.primewaveagency@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/primewave301";
export const TELEGRAM_URL = "https://t.me/primewave2";

export const waLink = (text?: string) =>
  WHATSAPP_URL + (text ? "?text=" + encodeURIComponent(text) : "");

export const FIVERR_PROFILES = [
  {
    name: "Howser M",
    tag: "🇩🇪 Deutschsprachige Kunden",
    specialty: "Web design & WordPress for German-speaking clients",
    url: "https://de.fiverr.com/s/Zoo1Zmk",
    role: "Web Design & WordPress",
  },
  {
    name: "Katherine Gilmore",
    tag: "",
    specialty: "UI/UX design & WordPress development",
    url: "https://www.fiverr.com/s/9ddaB0Y",
    role: "UI/UX Design & WordPress",
  },
  {
    name: "Sarah Davis",
    tag: "",
    specialty: "Website design, redesign & e-commerce",
    url: "https://www.fiverr.com/s/xrrbQal",
    role: "Design, Redesign & E-commerce",
  },
] as const;
