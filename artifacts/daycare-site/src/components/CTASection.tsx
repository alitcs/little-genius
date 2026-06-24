import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Ready to join our Little Genius family?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
            Schedule a tour to see our magical spaces in person and meet our dedicated educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-bold px-8 py-4 rounded-full text-lg shadow-sm">
              Book a Tour
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 transition-colors font-bold px-8 py-4 rounded-full text-lg border border-white/20">
              Join Our Waitlist
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>
    </section>
  );
}