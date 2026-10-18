import { ArrowRight, CalendarX, Clock } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const schedule = [
  { day: "Monday–Friday", hours: "7:00 AM–6:00 PM" },
  { day: "Saturday–Sunday", hours: "Closed", closed: true },
];

export default function HoursPage() {
  return (
    <div className="page-enter bg-[#f7f8f4]">
      <SEO
        title="Hours of Operation"
        description="See the weekly hours for Little Genius Island daycare in Newmarket. Open Monday to Friday, 7:00 AM to 6:00 PM."
        path="/hours"
      />
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="mb-9 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#557455]">
              Plan your day
            </p>
            <div className="mt-4 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#1e2b22] sm:text-4xl">
              Hours of operation
            </h1>
            <p className="mt-3 text-lg leading-7 text-[#68736a]">
              A consistent weekday schedule for your family.
            </p>
          </header>

          <div className="overflow-hidden rounded-xl border border-[#dfe6dc] bg-white">
            <div className="flex items-center gap-3 border-b border-[#e7ebe4] px-5 py-4 sm:px-7">
              <Clock size={20} className="text-[#345b37]" aria-hidden="true" />
              <h2 className="font-bold text-[#26352a]">Weekly schedule</h2>
            </div>
            <dl className="divide-y divide-[#e7ebe4] px-5 sm:px-7">
              {schedule.map(({ day, hours, closed }) => (
                <div
                  key={day}
                  className="flex flex-col gap-1 py-5 transition-colors hover:bg-[#fbfcfa] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <dt className="font-semibold text-[#35483a]">{day}</dt>
                  <dd className={closed ? "text-[#7a847b]" : "font-bold text-[#345b37]"}>
                    {hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5">
            <article className="rounded-xl border border-[#e2e8df] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <CalendarX size={19} className="text-[#a97925]" aria-hidden="true" />
                <h2 className="font-bold text-[#26352a]">Holiday closures</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#68736a]">
                We close on statutory holidays. These include New Year’s Day,
                Family Day, Good Friday, Victoria Day, Canada Day, Labour Day,
                Thanksgiving, Christmas Day, and Boxing Day.
              </p>
            </article>
          </div>

          <Link
            href="/book-tour"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-[#345b37] hover:text-[#243f27]"
          >
            Come see us in person
            <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
