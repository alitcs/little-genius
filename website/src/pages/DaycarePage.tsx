import { ArrowRight, BookOpen, Heart, Languages, Sprout } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const programs = [
  {
    ages: "18–30 months",
    name: "Toddler Exploration",
    description:
      "A safe, sensory-rich environment for early language, movement, and social discovery through guided play.",
  },
  {
    ages: "30 months–6 years",
    name: "Preschool Discovery",
    description:
      "A welcoming setting to build independence and curiosity through creative activities and hands-on learning.",
  },
];

export default function DaycarePage() {
  return (
    <div className="page-enter">
      <SEO
        title="Montessori Daycare"
        description="Explore Little Genius Island's bilingual Montessori-inspired daycare for toddlers and preschoolers in Newmarket, Ontario."
        path="/daycare"
      />

      <section className="bg-[#f7f8f4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="page-enter-child">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#456345]">
              <Sprout size={17} aria-hidden="true" />
              Montessori-inspired daycare
            </p>
            <div className="mt-5 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#1e2b22] sm:text-5xl">
              A caring place to learn, play, and grow.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#68736a]">
              Little Genius Island offers a warm, bilingual environment where
              children can explore at their own pace, build confidence, and
              discover the world through play.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-tour"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#345b37] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#29492c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
              >
                Book a daycare tour
                <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/signup/daycare"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#cdd8c9] bg-white px-5 py-3 font-semibold text-[#345b37] transition-colors hover:border-[#345b37] hover:bg-[#f0f4ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
              >
                Daycare sign-up
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-xl border border-[#dfe6dc] bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
              <Languages className="text-[#345b37]" size={22} aria-hidden="true" />
              <h2 className="mt-3 font-bold text-[#26352a]">Bilingual learning</h2>
              <p className="mt-1 text-sm leading-6 text-[#68736a]">
                English and French woven into everyday activities and play.
              </p>
            </div>
            <div className="rounded-xl border border-[#dfe6dc] bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
              <Heart className="text-[#b18431]" size={22} aria-hidden="true" />
              <h2 className="mt-3 font-bold text-[#26352a]">Care with connection</h2>
              <p className="mt-1 text-sm leading-6 text-[#68736a]">
                A supportive environment that helps children feel welcome and secure.
              </p>
            </div>
            <div className="rounded-xl border border-[#dfe6dc] bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
              <BookOpen className="text-[#345b37]" size={22} aria-hidden="true" />
              <h2 className="mt-3 font-bold text-[#26352a]">Learning by doing</h2>
              <p className="mt-1 text-sm leading-6 text-[#68736a]">
                Hands-on experiences encourage curiosity and growing independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#557455]">
              Our programs
            </p>
            <div className="mt-4 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#1e2b22] sm:text-4xl">
              The right space for each stage.
            </h2>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {programs.map((program, index) => (
              <article
                key={program.name}
                className="group rounded-xl border border-[#dfe6dc] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c9b2] hover:shadow-[0_18px_45px_-35px_rgba(32,57,36,0.55)] sm:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-sm font-bold text-[#a97925]">{program.ages}</p>
                <h3 className="mt-3 text-xl font-bold text-[#26352a]">{program.name}</h3>
                <p className="mt-2 max-w-xl leading-7 text-[#68736a]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-[#e3e9df] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[#68736a]">
              Want to learn more about our day-to-day routine?
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <Link href="/hours" className="text-[#345b37] underline decoration-[#d09a36] underline-offset-4 hover:text-[#243f27]">
                Hours of operation
              </Link>
              <Link href="/team" className="text-[#345b37] underline decoration-[#d09a36] underline-offset-4 hover:text-[#243f27]">
                Meet our team
              </Link>
              <Link href="/location" className="text-[#345b37] underline decoration-[#d09a36] underline-offset-4 hover:text-[#243f27]">
                Find us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
