import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE, telLink, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas We Cover" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[var(--shadow-soft)] border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            className={cn(
              "h-10 w-auto max-w-[140px] shrink-0 rounded-xl object-contain",
              !scrolled && "bg-white/90 p-1",
            )}
          />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-base font-bold sm:text-lg",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              Naveed Real Estate
            </span>
            <span
              className={cn(
                "text-[11px] font-medium tracking-wide uppercase",
                scrolled ? "text-primary" : "text-white/80",
              )}
            >
              Trusted in Lahore
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors group",
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white",
              )}
            >
              {l.label}
              <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[var(--gold)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-2xl border-2 px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5",
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white/70 text-white hover:bg-white hover:text-primary",
            )}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden grid h-10 w-10 place-items-center rounded-xl transition-colors",
            scrolled ? "bg-muted text-foreground" : "bg-white/15 text-white backdrop-blur",
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-border"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-4 py-3 text-sm font-semibold text-primary"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
