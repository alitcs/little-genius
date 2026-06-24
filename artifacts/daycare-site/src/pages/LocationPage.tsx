import { MapPin, Navigation, Bus, Car } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function LocationPage() {
  return (
    <div className="w-full">
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Little Genius Island<br />
                  123 Maple Grove Lane<br />
                  Ottawa, ON K1A 0A9
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center shrink-0">
                <Car size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Parking & Drop-off</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer a dedicated 15-minute loading zone for safe and seamless morning drop-offs and afternoon pick-ups right at our front entrance.
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
                  Located just a 3-minute walk from the Maple Grove transit station (Routes 45 & 88), making commuting easy for working parents.
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
          <div className="h-[400px] lg:h-auto min-h-[500px] w-full rounded-[2rem] overflow-hidden border-4 border-primary/10 shadow-lg relative bg-muted/50 flex flex-col items-center justify-center">
            {/* Map Placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDB2NDAiIHN0cm9rZT0iIzI1NjM0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]"></div>
            
            <MapPin size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground">Map Coming Soon</h3>
            <p className="text-muted-foreground mt-2">Interactive map integration in progress</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}