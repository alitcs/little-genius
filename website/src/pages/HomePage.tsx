import { ArrowRight, CalendarDays, Sprout } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import daycareVideo from "@/assets/daycare-vid.mp4";

export default function HomePage() {
  return (
    <section className="page-enter flex items-center bg-[#f7f8f4] px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[min(76vh,48rem)] lg:px-8 lg:py-16">
      <SEO
        title="Little Genius Island"
        description="Choose a service at Little Genius Island or book a Montessori daycare tour in Newmarket."
        path="/"
      />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="page-enter-child py-4 sm:py-8 lg:py-10">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#456345]">
            <Sprout size={17} aria-hidden="true" />
            Little Genius Island
          </p>
          <div className="mt-5 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-[#1e2b22] sm:text-5xl lg:text-6xl">
            A thoughtful place to grow.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[#68736a]">
            Find the right learning experience for your child, or come see our
            daycare in person.
          </p>
          <div className="mt-8 flex max-w-md flex-col gap-3">
            <Link
              href="/services"
              className="group inline-flex min-h-14 items-center justify-between gap-3 rounded-lg bg-[#345b37] px-5 py-4 font-semibold text-white transition-colors hover:bg-[#29492c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
            >
              Explore our services
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/book-tour"
              className="inline-flex min-h-14 items-center justify-between gap-3 rounded-lg border border-[#cdd8c9] bg-white px-5 py-4 font-semibold text-[#2f4a33] transition-colors hover:border-[#345b37] hover:bg-[#f0f4ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
            >
              <span className="inline-flex items-center gap-3">
                <CalendarDays size={18} aria-hidden="true" />
                Book a daycare tour
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-[#778178]">
            <span className="h-px w-6 bg-[#d09a36]" aria-hidden="true" />
            Montessori-inspired · Bilingual · Child-centered
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-2 -top-2 h-16 w-16 border-r border-t border-[#d09a36] sm:-right-3 sm:-top-3 sm:h-24 sm:w-24" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#dce6d7] shadow-[0_24px_60px_-32px_rgba(32,57,36,0.38)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label="A look inside the Little Genius Island daycare"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
            >
              <source src={daycareVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/30 bg-[#243b2b]/90 px-4 py-3 text-white backdrop-blur-sm sm:px-5">
              <span className="text-sm font-semibold">A little glimpse of our day</span>
              <span className="h-px flex-1 bg-white/40" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide text-white/80">NEWMARKET, ON</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 h-12 w-12 border-b border-l border-[#345b37] sm:-bottom-3 sm:-left-3 sm:h-20 sm:w-20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
