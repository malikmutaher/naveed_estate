import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { SITE, telLink, waLink } from "@/lib/site";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const items = [
    { icon: MapPin, label: "Office Address", value: SITE.address },
    { icon: Phone, label: "Phone", value: SITE.phone, href: telLink },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: "Business Hours", value: SITE.hours },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Get in Touch"
        title={
          <>
            Let's talk about your <span className="text-gradient-primary">next move</span>
          </>
        }
        subtitle="Have a question or ready to explore properties? We'd love to hear from you."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {items.map((it, i) => {
            const Wrap: any = it.href ? "a" : "div";
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Wrap
                  {...(it.href ? { href: it.href } : {})}
                  className="group flex gap-4 rounded-3xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-1 font-medium text-foreground break-words">{it.value}</div>
                  </div>
                </Wrap>
              </motion.div>
            );
          })}

          <div className="mt-2 grid grid-cols-2 gap-3">
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-5 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-3 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Naveed Real Estate — Office Map"
              src="https://www.google.com/maps?q=31.3545025,74.2154122&z=17&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              toast.success("Thanks! We'll be in touch shortly.");
              (e.target as HTMLFormElement).reset();
            }, 900);
          }}
          className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" placeholder="Mutaher Malik etc." required />
            <Field label="Phone" name="phone" type="tel" placeholder="0300-0000000" required />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@example.com" className="mt-4" />
          <div className="mt-4">
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about the property you're looking for..."
              className="mt-1.5 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-elevated)] disabled:opacity-60"
          >
            {submitting ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            We usually respond within a few hours during business hours.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}
