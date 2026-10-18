import {
  CalendarCheck2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import SEO from "@/components/SEO";
import Cal from "@calcom/embed-react"

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: "905 977 1151",
    href: "tel:+19059771151",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@littlegeniusisland.ca",
    href: "mailto:info@littlegeniusisland.ca",
    accent: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "78 Main St S, Newmarket",
    href: "https://www.google.com/maps/place/78+Main+St+S,+Newmarket,+ON+L3Y+3Y6",
    accent: "bg-accent/20 text-accent",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7f8f4]">
      <SEO
        title="Book a Daycare Tour"
        description="Choose a time to visit Little Genius Island Montessori daycare in Newmarket."
        path="/book-tour"
      />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="pt-2">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                Book a daycare tour
              </h1>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Choose a time that works for you. We’d love to show you around
                Little Genius Island in person.
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <h2 className="text-sm font-bold text-foreground">Need help?</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Contact us directly and we’ll be happy to help you arrange a visit.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {contactCards.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === "Visit us" ? "_blank" : undefined}
                      rel={label === "Visit us" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-3 text-sm font-medium text-[#456345] hover:underline"
                    >
                      <Icon size={17} aria-hidden="true" />
                      <span>{label === "Visit us" ? value : `${label}: ${value}`}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-border bg-white px-4 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CalendarCheck2 size={21} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">Choose a date and time</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    30 min
                  </span>
                </div>

                <div className="bg-[#fbfcfa] p-3 sm:p-4">
                  <div className="overflow-hidden rounded-xl border border-border bg-white">
                    <Cal
                      calLink="https://cal.com/little-genius-island-eyzs6m/30min"
                      style={{ width: "100%", height: "100%", overflow: "scroll" }}
                      config={{ layout: "month_view", theme: "light" }}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}