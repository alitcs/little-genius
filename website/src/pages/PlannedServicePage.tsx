import { ArrowLeft, ArrowRight, BookOpen, Music2 } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export type PlannedService = "private-tutoring" | "piano-lessons";

const serviceDetails: Record<
  PlannedService,
  { name: string; icon: typeof BookOpen; description: string }
> = {
  "private-tutoring": {
    name: "Private Tutoring",
    icon: BookOpen,
    description: "Program details are in development. We’ll share more about tutoring options here soon.",
  },
  "piano-lessons": {
    name: "Piano Lessons",
    icon: Music2,
    description: "Program details are in development. We’ll share more about piano lessons here soon.",
  },
};

export default function PlannedServicePage({ service }: { service: PlannedService }) {
  const { name, icon: Icon, description } = serviceDetails[service];

  return (
    <div className="page-enter bg-[#f7f8f4]">
      <SEO
        title={name}
        description={`${name} at Little Genius Island. Program details are in development.`}
        path={`/${service}`}
      />
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#526b54] transition-colors hover:text-[#2f4a33]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All services
          </Link>

          <div className="mt-7 rounded-xl border border-[#dfe6dc] bg-white p-6 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#345b37] text-white">
              <Icon size={22} aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-[#a97925]">
              Program details in development
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1e2b22] sm:text-4xl">
              {name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#68736a]">
              {description}
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-[#68736a]">
              Online sign-up is also in progress. Please check back soon for
              program information and registration details.
            </p>

            <div className="mt-8 flex flex-col gap-3 border-t border-[#e7ebe4] pt-6 sm:flex-row">
              <Link
                href={`/signup/${service}`}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#345b37] px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#29492c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
              >
                Sign-up in progress
                <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
