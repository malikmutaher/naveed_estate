import { motion } from "motion/react";
import {
  KeyRound,
  Tag,
  TrendingUp,
  Home,
  Building2,
  Compass,
  FileText,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const services = [
  { icon: KeyRound, title: "Buying Consultation", desc: "Find the right property at the right price with unbiased guidance." },
  { icon: Tag, title: "Selling Consultation", desc: "Position, price, and present your property for the best outcome." },
  { icon: TrendingUp, title: "Property Investment", desc: "Data-backed insights for long-term returns and portfolio growth." },
  { icon: Home, title: "Residential Consultation", desc: "Homes matched to your family, lifestyle, and future plans." },
  { icon: Building2, title: "Commercial Consultation", desc: "Offices, plazas, and retail spaces that support your business." },
  { icon: Compass, title: "Market Guidance", desc: "Real-time trends across Lahore's leading residential societies." },
  { icon: FileText, title: "Documentation Assistance", desc: "Verification, transfers, and paperwork done the right way." },
  { icon: Headphones, title: "Customer Support", desc: "One trusted point of contact — before, during, and after." },
];

export function Services() {
  return (
    <Section id="services" alt>
      <SectionHeader
        eyebrow="Our Services"
        title={
          <>
            End-to-end real estate <span className="text-gradient-primary">consultation</span>
          </>
        }
        subtitle="Every service designed around one goal: helping you make a decision you'll be proud of years from now."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.55 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-[var(--primary-hover)] group-hover:text-white group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
