import { ArrowRight, BookOpen, Music2, Sprout } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const services = [
  {
    number: "01",
    title: "Montessori Daycare",
    description: "Bilingual, Montessori-inspired care for curious little learners.",
    icon: Sprout,
    details: "/daycare",
    signup: "/signup/daycare",
    tourAvailable: true,
  },
  {
    number: "02",
    title: "Private Tutoring",
    description: "Program information is in development.",
    icon: BookOpen,
    details: "/private-tutoring",
    signup: "/signup/private-tutoring",
    tourAvailable: false,
  },
  {
    number: "03",
    title: "Piano Lessons",
    description: "Program information is in development.",
    icon: Music2,
    details: "/piano-lessons",
    signup: "/signup/piano-lessons",
    tourAvailable: false,
  },
] as const;

export default function ServicesPage() {
  return (
    <section className="page-enter min-h-[65vh] bg-[#f7f8f4] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SEO
        title="Our Services"
        description="Choose Montessori daycare, private tutoring, or piano lessons at Little Genius Island."
        path="/services"
      />
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#557455]">
            Our services
          </p>
          <div className="mt-4 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#1e2b22] sm:text-4xl">
            Choose what you’re looking for.
          </h1>
          <p className="mt-3 text-lg leading-7 text-[#68736a]">
            Choose a program to learn more or sign up.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-[#dfe6dc] bg-white shadow-[0_18px_55px_-45px_rgba(32,57,36,0.45)]">
          {services.map(({ number, title, description, icon: Icon, details, signup, tourAvailable }) => (
            <article
              key={title}
              className="page-enter-child group grid gap-5 border-b border-[#e7ebe4] px-5 py-6 transition-colors last:border-b-0 hover:bg-[#fbfcfa] sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-6 sm:px-7 sm:py-7"
              style={{ animationDelay: `${Number(number.slice(-1)) * 70}ms` }}
            >
              <span className="text-sm font-bold tabular-nums text-[#b18431]">
                {number}
              </span>
              <Link
                href={details}
                className="group/details flex min-w-0 items-start gap-4 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b37]"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f1f4ef] text-[#456345] transition-all duration-200 group-hover/details:scale-105 group-hover/details:bg-[#345b37] group-hover/details:text-white">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-[#26352a] transition-colors group-hover/details:text-[#345b37]">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#68736a]">
                    {description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#345b37]">
                    Learn about this program
                    <ArrowRight size={15} className="transition-transform group-hover/details:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
              <div className="flex flex-col gap-2 sm:min-w-44">
                {tourAvailable && (
                  <Link
                    href="/book-tour"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#345b37] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#29492c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
                  >
                    Book a tour <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
                <Link
                  href={signup}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#f1f4ef] px-4 py-2 text-sm font-semibold text-[#35483a] transition-colors hover:bg-[#e8ede5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
                >
                  Sign-up in progress
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#778178]">
          Questions?{" "}
          <a
            href="mailto:info@littlegeniusisland.ca"
            className="font-semibold text-[#345b37] decoration-[#d09a36] underline underline-offset-4"
          >
            Email our team
          </a>
        </p>
      </div>
    </section>
  );
}
