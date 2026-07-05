import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner, AWT Phase 2",
    img: "/images/testimonial-ahmed.jpg",
    review:
      "Naveed sahab helped us find our family home without a single hidden surprise. He treated our budget like his own — patient, honest, and always available.",
  },
  {
    name: "Sana Iqbal",
    role: "Investor, Bahria Orchard",
    img: "/images/testimonial-sana.jpg",
    review:
      "I've worked with many agents in Lahore. Naveed stands apart because he explains the market clearly and never pressures you. My investments have performed beautifully.",
  },
  {
    name: "Bilal Ahmad",
    role: "Business Owner, Lake City",
    img: "/images/testimonial-bilal.jpg",
    review:
      "Finding the right commercial space felt overwhelming until we met Naveed. Professional, well-connected, and truly cared about our business needs.",
  },
  {
    name: "Farah Malik",
    role: "Homebuyer, Fazaia",
    img: "/images/testimonial-farah.jpg",
    review:
      "The paperwork side was the part I feared most. Naveed's team made it painless and clear. I'd recommend them to anyone buying their first home.",
  },
];

export function Testimonials() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Testimonials"
        title={
          <>
            What our <span className="text-gradient-primary">clients say</span>
          </>
        }
        subtitle="Real stories from families and investors who trusted us with their biggest decisions."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 4) * 0.1, duration: 0.55 }}
            className="group relative flex flex-col rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]"
          >
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10 transition-colors group-hover:text-primary/25" />
            <div className="flex gap-0.5 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.review}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <img
                src={t.img}
                alt={t.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/10"
                loading="lazy"
              />
              <div className="min-w-0">
                <div className="truncate font-semibold text-foreground">{t.name}</div>
                <div className="truncate text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
