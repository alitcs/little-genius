import { Heart, Sprout, UsersRound } from "lucide-react";
import SEO from "@/components/SEO";
import founderPortrait from "@assets/sanapfp.png";

const values = [
  {
    icon: Heart,
    title: "A sense of belonging",
    description: "A patient, welcoming environment where children feel at home.",
  },
  {
    icon: Sprout,
    title: "Room to become",
    description: "Children build confidence and independence at their own pace.",
  },
  {
    icon: UsersRound,
    title: "Families are partners",
    description: "Open communication helps each child feel known and supported.",
  },
];

export default function OurTeamPage() {
  return (
    <div className="page-enter bg-[#f7f8f4]">
      <SEO
        title="Our Team"
        description="Meet the founder and director of Little Genius Island, bringing over eight years of experience in early childhood education, Montessori, and language instruction."
        path="/team"
      />
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="page-enter-child relative mx-auto w-full max-w-sm">
            <div className="absolute -right-2 -top-2 h-16 w-16 border-r border-t border-[#d09a36] sm:-right-3 sm:-top-3 sm:h-24 sm:w-24" aria-hidden="true" />
            <div className="aspect-[4/4.2] overflow-hidden rounded-xl bg-[#e4eadd]">
              <img
                src={founderPortrait}
                alt="Founder and Director of Little Genius Island"
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.025]"
              />
            </div>
            <p className="mt-3 text-sm text-[#778178]">
              Founder &amp; Director · 8+ years in early learning
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#557455]">
              The people behind the care
            </p>
            <div className="mt-4 h-px w-16 bg-[#d09a36]" aria-hidden="true" />
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#1e2b22] sm:text-4xl lg:text-5xl">
              Experience guided by heart.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#68736a]">
              Our founder brings more than eight years of experience in early
              childhood education, Montessori, and language instruction. Her
              work in French education, kindergarten, and curriculum planning
              informs a warm, thoughtful approach to each child’s early years.
            </p>
            <p className="mt-4 leading-7 text-[#68736a]">
              She believes every child deserves to feel safe, supported, and
              encouraged to be themselves. Curiosity, creativity, play, and
              meaningful experiences help children grow in confidence and
              independence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e3e9df] bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#557455]">
              What matters to us
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1e2b22] sm:text-3xl">
              Care you can feel every day.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="page-enter-child rounded-xl border border-[#e3e9df] bg-[#fbfcfa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c9b2] hover:shadow-[0_16px_36px_-30px_rgba(32,57,36,0.55)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Icon size={20} className="text-[#345b37]" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-[#26352a]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#68736a]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
