import { motion } from "motion/react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export const AREAS = [
  {
    name: "AWT Housing Scheme Phase 2",
    desc: "Jatti Umrah Road, Lahore — a well-planned, secure community with strong long-term value.",
    img: "/images/area-awt.jpg",
    map: "https://maps.google.com/?q=AWT+Housing+Scheme+Phase+2+Lahore",
  },
  {
    name: "Fazaia Housing Scheme",
    desc: "Modern infrastructure, family-friendly neighbourhoods, and reliable civic amenities.",
    img: "/images/area-fazaia.jpg",
    map: "https://maps.google.com/?q=Fazaia+Housing+Scheme+Lahore",
  },
  {
    name: "Sui Gas Housing Society",
    desc: "Established society with mature landscaping and steadily appreciating property values.",
    img: "/images/area-sui-gas.jpg",
    map: "https://maps.google.com/?q=Sui+Gas+Housing+Society+Lahore",
  },
  {
    name: "Bahria Orchard",
    desc: "Premium gated community with resort-like amenities and premium build quality.",
    img: "/images/area-bahria-orchard.jpg",
    map: "https://maps.google.com/?q=Bahria+Orchard+Lahore",
  },
  {
    name: "Lake City Lahore",
    desc: "Master-planned lifestyle destination with golf, schools, and premium residential blocks.",
    img: "/images/area-lake-city.jpg",
    map: "https://maps.google.com/?q=Lake+City+Lahore",
  },
];

export function Areas() {
  return (
    <Section id="areas">
      <SectionHeader
        eyebrow="Areas We Cover"
        title={
          <>
            Trusted across Lahore's <span className="text-gradient-primary">premier communities</span>
          </>
        }
        subtitle="Providing trusted real estate consultation across Lahore's leading residential communities."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <motion.a
            key={a.name}
            href={a.map}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={a.img}
                alt={a.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                <MapPin className="h-3.5 w-3.5" />
                Lahore
              </div>
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--gold)] text-charcoal opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {a.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
