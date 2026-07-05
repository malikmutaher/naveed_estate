import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        href={telLink}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call Naveed Real Estate"
        className="md:hidden grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-[0_10px_30px_-8px_rgba(15,118,110,0.6)]"
      >
        <Phone className="h-6 w-6" />
      </motion.a>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] animate-pulse-ring"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.28c-.28-.14-1.67-.83-1.93-.92-.26-.09-.45-.14-.63.14-.19.28-.72.92-.89 1.11-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.09 4.9 4.34.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.67-.68 1.91-1.34.23-.66.23-1.22.16-1.34-.07-.11-.26-.19-.54-.32z" />
          <path d="M27.05 4.9C24.13 1.98 20.25.38 16.1.38 7.53.38.55 7.36.55 15.93c0 2.74.72 5.42 2.08 7.78L.38 31.62l8.11-2.13a15.5 15.5 0 007.61 1.94h.01c8.57 0 15.55-6.98 15.55-15.55 0-4.15-1.62-8.05-4.61-10.98zM16.11 28.79h-.01a12.85 12.85 0 01-6.54-1.79l-.47-.28-4.81 1.26 1.29-4.7-.31-.48a12.83 12.83 0 01-1.96-6.86c0-7.09 5.77-12.86 12.85-12.86 3.43 0 6.65 1.34 9.08 3.77a12.75 12.75 0 013.77 9.09c-.01 7.09-5.78 12.85-12.89 12.85z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-charcoal px-3 py-2 text-xs font-medium text-white shadow-lg group-hover:block">
          Chat with us on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
