import SEO from "@/components/SEO";

export default function OurTeamPage() {
  return (
    <>
      <SEO
        title="Little Genius Island — Our Team"
        description="Coming soon: Meet the caring and dedicated team behind Little Genius Island. Our team is committed to creating a welcoming, supportive, and engaging environment where every child can learn, grow, and feel at home."
        path="/team"
      />
      <section className="min-h-[calc(100dvh-6rem)] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full rounded-[2rem] bg-white/90 border border-border p-10 shadow-xl shadow-primary/10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          This page is under construction. Check back soon for info about our team at Little Genius Island.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </section>
    </>
  );
}
