import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9779818633814"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
