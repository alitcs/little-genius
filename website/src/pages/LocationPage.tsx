import SEO from "@/components/SEO";
import PageHeader from "@/components/site/PageHeader";
import { TextLink } from "@/components/site/ButtonLink";
import { Reveal } from "@/components/motion/Motion";
import { site } from "@/data/site";

export default function LocationPage() {
  return (
    <div>
      <SEO
        title="Location in Newmarket"
        description="Find Little Genius Island at 78 Main St S in Newmarket, Ontario."
        path="/location"
      />
      <PageHeader eyebrow="Visit us" title="Find us in *Newmarket*." lead="We're in the heart of town on Main Street South." />
      <section className="shell pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Address</p>
            <address className="mt-4 font-serif text-2xl not-italic leading-snug text-ink">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </address>
            <div className="mt-6">
              <TextLink href={site.mapsUrl}>Get directions</TextLink>
            </div>
            <p className="eyebrow mt-10">Contact</p>
            <p className="mt-4 leading-8 text-ink-soft">
              <a href={site.phoneHref} className="hover:text-forest-700">{site.phone}</a>
              <br />
              <a href={site.emailHref} className="hover:text-forest-700">{site.email}</a>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="h-[340px] overflow-hidden rounded-[1.75rem] bg-forest-50 sm:h-[460px] lg:h-full lg:min-h-[500px]">
            <iframe
              title="Map showing Little Genius Island at 78 Main Street South, Newmarket"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.301456200332!2d-79.4601127!3d44.0564834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad20590c6888b%3A0xbd3d6be385806fe4!2s78%20Main%20St%20S%2C%20Newmarket%2C%20ON%20L3Y%203Y6!5e0!3m2!1sen!2sca!4v1787285406459!5m2!1sen!2sca"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
