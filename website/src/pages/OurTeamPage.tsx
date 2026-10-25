import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Reveal, SplitHeading, easeOutSoft } from "@/components/motion/Motion";
import { Sparkle } from "@/components/site/Decor";
import founderPortrait from "@assets/sanapfp.png";

export default function OurTeamPage() {
  return (
    <div>
      <SEO
        title="Our team"
        description="Meet the founder and director of Little Genius Island, bringing over eight years of experience in early childhood education, Montessori, and language instruction."
        path="/team"
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-gold-100/60 via-cream to-cream pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold-300/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-forest-300/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="shell relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeOutSoft }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold-300/70 via-gold-100 to-forest-200/70" aria-hidden="true" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-[6px] border-white shadow-[0_24px_50px_-24px_rgba(27,46,31,0.45)] sm:h-64 sm:w-64">
              <img
                src={founderPortrait}
                alt="Founder and Director of Little Genius Island"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <Sparkle className="animate-twinkle absolute -right-6 top-2 h-6 w-6 text-gold-500" />
            <Sparkle className="animate-drift absolute -left-5 bottom-6 h-4 w-4 text-gold-300" />
          </motion.div>

          <p className="eyebrow mt-12">Our founder &amp; director</p>
          <SplitHeading
            text="Hello, and *welcome*."
            className="mt-4 font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.05] tracking-tight text-ink"
            delay={0.3}
          />
          <Reveal delay={0.6}>
            <p className="lead mt-6">
              With more than eight years in early childhood education, Montessori and language instruction, she believes
              every child deserves to feel safe, supported and free to be themselves.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
