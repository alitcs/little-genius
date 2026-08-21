import {
  ArrowRight,
  CalendarCheck2,
  Clock3,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { InlineWidget } from "react-calendly";
import SEO from "@/components/SEO";

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: "647 712 1144",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "sanazin14@gmail.com",
    accent: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "78 Main St S, Newmarket",
    accent: "bg-accent/20 text-accent",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),transparent_28%)]">
      <SEO
        title="Little Genius Island — Contact"
        description="Contact Little Genius Island daycare in Ottawa to schedule a tour, ask about bilingual Montessori programs, or join our waitlist for children ages 11 months to 6 years."
        path="/contact"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-[0_25px_80px_-30px_rgba(34,94,34,0.35)] backdrop-blur-sm sm:p-8">
                <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">
                  Let’s build a joyful start for your child.
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Whether you’re exploring options, checking availability, or getting ready to enroll,
                  we’d love to meet you and show you what makes Little Genius Island so special.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-muted/30 p-3">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Ages
                    </p>
                    <p className="mt-2 text-l font-black text-foreground">11 mos–6 yrs</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/30 p-3">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Programs
                    </p>
                    <p className="mt-2 text-l font-black text-foreground">Montessori</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/30 p-3">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Support
                    </p>
                    <p className="mt-2 text-l font-black text-foreground">Waitlist</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card/90 p-5 shadow-[0_18px_55px_-30px_rgba(21,53,21,0.35)] sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CalendarCheck2 size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-muted-foreground">
                      Connect with us
                    </p>
                    <p className="text-xl font-black text-foreground">Let’s chat</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {contactCards.map(({ icon: Icon, label, value, accent }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-[1.5rem] border border-border bg-muted/25 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent}`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 text-lg font-black text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-white shadow-[0_30px_80px_-30px_rgba(34,94,34,0.4)]">
                <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/5 via-background to-secondary/5 px-4 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <CalendarCheck2 size={21} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                        Schedule a call
                      </p>
                      <p className="text-lg font-black text-foreground">Let’s get started</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    30 min
                  </span>
                </div>

                <div className="bg-gradient-to-br from-primary/[0.03] via-background to-secondary/[0.04] p-3 sm:p-4">
                  <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
                    <InlineWidget
                      url="https://calendly.com/lepetitgenie26/30min"
                      styles={{
                        height: "880px",
                        width: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}