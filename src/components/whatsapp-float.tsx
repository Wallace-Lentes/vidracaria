import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511999990000?text=Olá!%20Gostaria%20de%20um%20orçamento."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </a>
  );
}
