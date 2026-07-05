import { motion } from "motion/react";
import { Phone, MessageCircle, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 animate-float-slow">
        <img
          src={HERO_IMG}
          alt="Luxury home in Lahore"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
          Trusted Real Estate Consultancy · Lahore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Naveed Real Estate
          <span className="mt-3 block bg-gradient-to-r from-white via-white to-[var(--gold)] bg-clip-text text-transparent">
            Your Trusted Consultant in Lahore
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
        >
          Helping families and investors make confident real estate decisions through honest advice,
          professional consultation, and deep local market expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href={telLink}
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elevated)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] sm:text-base"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Call Now
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-2xl border-2 border-white/80 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-primary sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
        >
          {[
            { icon: ShieldCheck, label: "Honest & Transparent" },
            { icon: MapPin, label: "5+ Premium Areas" },
            { icon: Sparkles, label: "Personalized Guidance" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md"
            >
              <item.icon className="h-5 w-5 shrink-0 text-[var(--gold)]" />
              <span className="text-xs font-medium sm:text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40 pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
