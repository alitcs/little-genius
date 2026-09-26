import { BookOpen, Heart, Sprout, UsersRound } from "lucide-react";
import SEO from "@/components/SEO";
import founderPortrait from "@assets/sanapfp.png";

export default function OurTeamPage() {
  return (
    <div className="w-full">
      <SEO
        title="Little Genius Island — Our Team"
        description="Meet the founder and director of Little Genius Island, bringing over eight years of experience in early childhood education, Montessori, and language instruction."
        path="/team"
      />
      <section className="overflow-hidden bg-[#EDF5E1] px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-bold text-primary">
              <Heart size={16} fill="currentColor" />
              The people behind the care
            </span>
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.16em] text-accent">Founder &amp; Director</p>
              <h1 className="max-w-2xl text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
                A thoughtful start for every little genius.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Meet the founder whose experience and care shape a welcoming place for children to learn, grow, and feel at home.
            </p>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[490px] lg:order-2">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-secondary/70 sm:-inset-4" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border-8 border-white bg-white shadow-2xl">
              <img
                src={founderPortrait}
                alt="Founder and Director of Little Genius Island"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-3 shadow-lg sm:left-8">
              <p className="text-sm font-black text-primary">10+ years</p>
              <p className="text-sm font-semibold text-muted-foreground">in early learning</p>
            </div>
          </div>
        </div>
      </section>

      <section id="founder-story" className="scroll-mt-24 px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <p className="mb-3 font-bold uppercase tracking-[0.16em] text-accent">A little about her</p>
            <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              Experience guided by heart.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Early childhood is a time for big discoveries. She is dedicated to making those everyday moments feel safe, joyful, and full of possibility.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              With over eight years of experience in early childhood education, Montessori, and language instruction, our Founder and Director has a genuine passion for helping young children learn, grow, and discover the world around them.
            </p>
            <p>
              She believes that every child is unique and deserves to feel safe, supported, and encouraged to be themselves. Her approach focuses on creating a warm and welcoming environment where children can build confidence, develop independence, and learn through curiosity, creativity, play, and meaningful experiences.
            </p>
            <p>
              With experience in French education, kindergarten, curriculum planning, and early learning, she brings both professional knowledge and a personal commitment to making each child’s early years positive and memorable.
            </p>
            <p>
              As the founder of our centre, she is dedicated to creating a place where children feel at home and families feel confident knowing their children are cared for with patience, kindness, and genuine attention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 font-bold uppercase tracking-[0.16em] text-accent">The little things that matter</p>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">Care you can feel every day.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-border bg-card p-7 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Heart size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">A sense of belonging</h3>
              <p className="leading-relaxed text-muted-foreground">A warm, patient environment where children feel safe, supported, and at home.</p>
            </article>
            <article className="rounded-3xl border border-border bg-card p-7 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/30 text-secondary-foreground">
                <Sprout size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Room to become</h3>
              <p className="leading-relaxed text-muted-foreground">Children are encouraged to build confidence and independence at their own pace.</p>
            </article>
            <article className="rounded-3xl border border-border bg-card p-7 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <BookOpen size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Learning through discovery</h3>
              <p className="leading-relaxed text-muted-foreground">Curiosity, creativity, play, and meaningful experiences make each day an opportunity to learn.</p>
            </article>
          </div>
          <div className="mt-10 flex items-center justify-center gap-3 text-center text-muted-foreground">
            <UsersRound size={20} className="shrink-0 text-primary" />
            <p className="font-semibold">A close partnership with families is part of every child’s story.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
