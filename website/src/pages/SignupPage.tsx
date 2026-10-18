import { ArrowLeft, CalendarDays, Mail } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export type SignupService = "daycare" | "private-tutoring" | "piano-lessons";

const serviceDetails: Record<
  SignupService,
  { name: string; description: string }
> = {
  daycare: {
    name: "Montessori Daycare",
    description: "Bilingual, Montessori-inspired care for curious little learners.",
  },
  "private-tutoring": {
    name: "Private Tutoring",
    description: "Personalized learning support designed around your child.",
  },
  "piano-lessons": {
    name: "Piano Lessons",
    description: "A joyful start to learning and making music.",
  },
};

export default function SignupPage({ service }: { service: SignupService }) {
  const { name, description } = serviceDetails[service];
  const isDaycare = service === "daycare";

  return (
    <section className="min-h-[65vh] bg-[#f7f8f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SEO
        title={`${name} sign-up`}
        description={`Sign-up for ${name} at Little Genius Island is in progress. Contact our team with questions${isDaycare ? " or book a daycare tour" : ""}.`}
        path={`/signup/${service}`}
      />
      <div className="mx-auto max-w-2xl">
        <a
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#526b54] hover:text-[#2f4a33]"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to services
        </a>

        <div className="mt-8 rounded-2xl border border-[#e3e9df] bg-white p-7 shadow-[0_18px_50px_-36px_rgba(32,57,36,0.35)] sm:p-10">
          <span className="inline-flex rounded-full bg-[#f1f3ed] px-3 py-1.5 text-sm font-semibold text-[#5f6d60]">
            Sign-up in progress
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#1e2b22] sm:text-4xl">
            {name}
          </h1>
          <p className="mt-3 text-lg leading-8 text-[#68736a]">{description}</p>
          <p className="mt-5 leading-7 text-[#68736a]">
            We’re getting online sign-up ready. There’s nothing you need to
            submit here just yet—please check back soon or get in touch with
            our team if you have a question.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {isDaycare && (
              <Link
                href="/book-tour"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#345b37] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#29492c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
              >
                <CalendarDays size={18} aria-hidden="true" />
                Book a daycare tour
              </Link>
            )}
            <a
              href="mailto:info@littlegeniusisland.ca"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d5ddd2] bg-white px-5 py-3 font-semibold text-[#345b37] transition-colors hover:bg-[#f5f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
            >
              <Mail size={18} aria-hidden="true" />
              Email our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
