import { motion } from "motion/react";
import {
  ShieldCheck,
  Eye,
  Award,
  MapPinned,
  Zap,
  Headphones,
  Handshake,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const reasons = [
  { icon: ShieldCheck, title: "Trusted Advice", desc: "Guidance rooted in honesty, not commission." },
  { icon: Eye, title: "Transparent Process", desc: "Every step, every number — clearly shared." },
  { icon: Award, title: "Professional Consultation", desc: "Structured, thorough, and always prepared." },
  { icon: MapPinned, title: "Strong Local Knowledge", desc: "Deep familiarity with every major society." },
  { icon: Zap, title: "Fast Communication", desc: "Quick replies on WhatsApp and calls." },
  { icon: Headphones, title: "Reliable Customer Service", desc: "Support that doesn't stop at closing." },
  { icon: Handshake, title: "Smooth Transactions", desc: "Paperwork and coordination handled end-to-end." },
];

export function WhyChoose() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why Choose Us"
        title={
          <>
            Why Choose <span className="text-gradient-primary">Naveed Real Estate</span>
          </>
        }
        subtitle="A consultancy built on trust, transparency, and a genuine commitment to your outcome."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.55 }}
            className="group rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-[var(--gold)]/15 group-hover:text-[var(--gold)]">
              <r.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">{r.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
