import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { SITE, telLink } from "@/lib/site";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas We Cover" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Buying Consultation",
  "Selling Consultation",
  "Investment Advice",
  "Residential Consultation",
  "Commercial Consultation",
  "Documentation Assistance",
];

const areas = [
  "AWT Housing Scheme Phase 2",
  "Fazaia Housing Scheme",
  "Sui Gas Housing Society",
  "Bahria Orchard",
  "Lake City Lahore",
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--charcoal)] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={SITE.logo}
                alt={`${SITE.name} logo`}
                className="h-10 w-auto max-w-[140px] shrink-0 rounded-xl object-contain bg-white/90 p-1"
              />
              <span className="font-display text-lg font-bold">Naveed Real Estate</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Your trusted real estate consultant in Lahore — honest advice, transparent process, and
              long-term relationships.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/50 hover:bg-white/10 hover:text-[var(--gold)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--gold)]">
                {l.label}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <span key={s} className="hover:text-[var(--gold)] cursor-default">{s}</span>
            ))}
          </FooterCol>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a href={telLink} className="flex gap-3 hover:text-[var(--gold)]">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-[var(--gold)]">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Areas Covered
              </div>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {areas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Naveed Real Estate. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/40 hover:text-[var(--gold)]"
          >
            Back to Top <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">{children}</div>
    </div>
  );
}
