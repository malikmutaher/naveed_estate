import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  ShieldCheck,
  Smile,
  MapPinned,
  HeartHandshake,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { SITE, telLink, waLink } from "@/lib/site";

const OWNER_IMG = "/images/owner.jpg";

const achievements = [
  { icon: ShieldCheck, title: "Trusted Consultant" },
  { icon: Award, title: "Professional Guidance" },
  { icon: Smile, title: "Client Satisfaction" },
  { icon: MapPinned, title: "Local Market Expertise" },
  { icon: HeartHandshake, title: "Personalized Support" },
];

export function Owner() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Meet the Owner"
        title={
          <>
            The person behind <span className="text-gradient-primary">every honest deal</span>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-5 lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
            <img
              src={OWNER_IMG}
              alt="Waheed Akhter Gazi — Founder & Real Estate Consultant"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <div className="font-display text-2xl font-bold sm:text-3xl">Waheed Akhter Gazi</div>
              <div className="text-sm text-white/85">Founder & Real Estate Consultant</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 flex flex-col"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            With deep roots in Lahore's real estate landscape, Waheed Akhter Gazi has spent years walking clients
            through every kind of property decision — from a first family home to strategic investment
            portfolios. His approach is refreshingly simple: listen carefully, share the full picture,
            and never rush a client into a deal that isn't right for them.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Based in AWT Housing Scheme Phase 2, he's a familiar and trusted name across Lahore's most
            respected communities.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[var(--gold)]/15 group-hover:text-[var(--gold)]">
                  <a.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{a.title}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary px-5 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label="Social link"
                className="group grid h-10 w-10 place-items-center rounded-xl border border-border bg-white text-primary transition-all hover:-translate-y-0.5 hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-[var(--shadow-gold)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
