import { motion } from "motion/react";
import { MapPin, ExternalLink, Download } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { AREAS } from "./Areas";

export function MapSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Find Us"
        title={
          <>
            Find Us & Explore Our <span className="text-gradient-primary">Service Areas</span>
          </>
        }
        subtitle="Visit our office in AWT Housing Scheme Phase 2, or explore the communities we serve across Lahore."
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-muted/30 p-4">
        <div>
          <p className="text-sm font-semibold text-foreground">AWT Housing Society Map</p>
          <p className="text-sm text-muted-foreground">Download the PDF map for quick reference anytime.</p>
        </div>
        <a
          href="/images/awt-housing-map.pdf"
          download="awt-housing-map.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          Download Map
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-elevated)]"
      >
        <iframe
          title="Naveed Real Estate — Office Location"
          src="https://www.google.com/maps?q=31.3545025,74.2154122&z=17&output=embed"
          className="h-[380px] w-full sm:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
            className="group flex flex-col rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">{a.name}</h3>
            <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{a.desc}</p>
            <a
              href={a.map}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View on Google Maps <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
