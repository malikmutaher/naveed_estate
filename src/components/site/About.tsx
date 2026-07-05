import { motion } from "motion/react";
import { CheckCircle2, Home, Building2, TrendingUp, HandshakeIcon, Users, Heart } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const values = [
  { icon: Home, title: "Residential Guidance", desc: "Homes for families of every size." },
  { icon: Building2, title: "Commercial Guidance", desc: "Offices, shops & mixed-use spaces." },
  { icon: TrendingUp, title: "Investment Advice", desc: "Grow wealth with informed decisions." },
  { icon: HandshakeIcon, title: "Transparent Dealings", desc: "No hidden costs, ever." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your happiness is our metric." },
  { icon: Users, title: "Long-term Relationships", desc: "Advisors for life, not one deal." },
];

const ILLUSTRATION =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80";

export function About() {
  return (
    <Section id="about" alt>
      <SectionHeader
        eyebrow="About Us"
        title={
          <>
            Honest consultation. <span className="text-gradient-primary">Real results.</span>
          </>
        }
        subtitle="For years, Naveed Real Estate has helped families, professionals, and investors navigate Lahore's property market with clarity and confidence."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
            <img
              src={ILLUSTRATION}
              alt="Modern Lahore residence"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-[var(--shadow-elevated)] sm:block sm:-right-6 lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15">
                <CheckCircle2 className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs font-medium text-muted-foreground">Transparent Process</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We believe real estate is more than a transaction — it's a milestone. That's why every
            consultation begins with listening: your goals, your budget, and the life you're building.
            From <span className="font-semibold text-foreground">residential homes</span> to
            <span className="font-semibold text-foreground"> commercial spaces</span> and
            <span className="font-semibold text-foreground"> long-term investments</span>, we bring
            local expertise, integrity, and unwavering care to every deal.
          </motion.p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group flex gap-3 rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground">{v.title}</div>
                  <div className="text-sm text-muted-foreground">{v.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
