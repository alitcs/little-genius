import { ArrowUpRight, Bus, Car, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function LocationPage() {
  return (
    <div className="page-enter bg-[#f7f8f4]">
      <SEO
        title="Location in Newmarket"
        description="Find Little Genius Island at 78 Main St S in Newmarket, Ontario, with convenient parking and nearby public transit."
        path="/location"
      />
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-9 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#557455]">
              Find us
            </p>
            <div className="mt-4 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#1e2b22] sm:text-4xl">
              A convenient place to grow.
            </h1>
            <p className="mt-3 text-lg leading-7 text-[#68736a]">
              Visit Little Genius Island in the heart of Newmarket.
            </p>
          </header>

          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex flex-col gap-4">
              <article className="rounded-xl border border-[#dfe6dc] bg-white p-5 sm:p-6">
                <MapPin size={21} className="text-[#345b37]" aria-hidden="true" />
                <h2 className="mt-3 font-bold text-[#26352a]">Our address</h2>
                <address className="mt-2 text-sm not-italic leading-6 text-[#68736a]">
                  Little Genius Island
                  <br />
                  78 Main St S
                  <br />
                  Newmarket, ON L3Y 3Y6
                </address>
                <a
                  href="https://www.google.com/maps/place/78+Main+St+S,+Newmarket,+ON+L3Y+3Y6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex min-h-10 items-center gap-2 rounded-md font-semibold text-[#345b37] hover:text-[#243f27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
                >
                  Get directions
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <article className="rounded-xl border border-[#dfe6dc] bg-white p-5">
                  <Car size={19} className="text-[#a97925]" aria-hidden="true" />
                  <h2 className="mt-3 text-sm font-bold text-[#26352a]">Parking &amp; drop-off</h2>
                  <p className="mt-1 text-sm leading-6 text-[#68736a]">
                    Convenient parking and a dedicated drop-off area help make arrivals and pick-ups simple.
                  </p>
                </article>
                <article className="rounded-xl border border-[#dfe6dc] bg-white p-5">
                  <Bus size={19} className="text-[#345b37]" aria-hidden="true" />
                  <h2 className="mt-3 text-sm font-bold text-[#26352a]">Public transit</h2>
                  <p className="mt-1 text-sm leading-6 text-[#68736a]">
                    The location is accessible by public transit for families and caregivers.
                  </p>
                </article>
              </div>
            </div>

            <div className="h-[320px] overflow-hidden rounded-xl border border-[#dfe6dc] bg-[#e9eee6] sm:h-[400px] lg:h-full lg:min-h-[500px]">
              <iframe
                title="Map showing Little Genius Island at 78 Main Street South, Newmarket"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.301456200332!2d-79.4601127!3d44.0564834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad20590c6888b%3A0xbd3d6be385806fe4!2s78%20Main%20St%20S%2C%20Newmarket%2C%20ON%20L3Y%203Y6!5e0!3m2!1sen!2sca!4v1787285406459!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
