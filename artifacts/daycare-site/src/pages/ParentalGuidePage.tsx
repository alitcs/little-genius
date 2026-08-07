export default function ParentalGuidePage() {
  return (
    <section className="min-h-[calc(100dvh-6rem)] flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full rounded-[2rem] bg-white/90 border border-border p-10 shadow-xl shadow-primary/10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Parental Guide</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          This page is under construction. Check back soon for helpful parenting tips,
          schedules, and resources for your family's journey at Little Genius Island.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
