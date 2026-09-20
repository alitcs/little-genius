import { MapPin, Navigation, Bus, Car } from "lucide-react";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export default function LocationPage() {
  return (
    <div className="w-full">
      <SEO
        title="Little Genius Island — Location in Ottawa"
        description="Find Little Genius Island in Ottawa. Our daycare offers a safe Montessori-style bilingual environment for children under 6, with easy parking and nearby transit."
        path="/location"
      />
      {/* Header */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Our Location</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A convenient, safe, and easily accessible space for your daily drop-offs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="flex flex-col gap-10 justify-center">
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Address</h3>
                <address className="text-lg text-muted-foreground leading-relaxed not-italic">
                  Little Genius Island<br />
                  78 Main St S<br />
                  Newmarket, ON L3Y 3Y6
                </address>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center shrink-0">
                <Car size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Parking & Drop-off</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 Convenient parking and a dedicated drop-off area make arrivals and pick-ups simple, safe, and stress-free for families.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                <Bus size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Transit</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conveniently accessible by public transit, making it easy for families and caregivers to get to and from daycare. 
                </p>
              </div>
            </div>

            <div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
            
          </div>

          {/* Map Side */}
          <div className="h-[360px] md:h-[420px] lg:h-auto min-h-[360px] lg:min-h-[500px] w-full overflow-hidden rounded-[2rem] border-4 border-primary/10 bg-muted/50 shadow-lg">
            <iframe
              title="Little Genius Island location map"
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
      </section>

      <CTASection />
    </div>
  );
}