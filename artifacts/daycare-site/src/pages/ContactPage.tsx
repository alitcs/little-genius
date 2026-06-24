import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            We'd love to hear from you. Reach out to schedule a tour or ask any questions!
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're ready to join our waitlist or just want to learn more about our bilingual programs, our team is here to help.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground">Call Us</p>
                  <p className="text-xl font-bold text-foreground">(613) 555-0123</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground">Email Us</p>
                  <p className="text-xl font-bold text-foreground">hello@littlegeniusisland.ca</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground">Visit Us</p>
                  <p className="text-lg font-bold text-foreground">123 Maple Grove Lane, Ottawa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-sm text-foreground ml-2">Parent's Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-bold text-sm text-foreground ml-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-bold text-sm text-foreground ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                    placeholder="(613) 555-0000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="inquiry" className="font-bold text-sm text-foreground ml-2">I'm interested in...</label>
                <select 
                  id="inquiry" 
                  className="bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium appearance-none"
                >
                  <option>Scheduling a Tour</option>
                  <option>Joining the Waitlist</option>
                  <option>Pricing & Enrollment</option>
                  <option>General Questions</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-sm text-foreground ml-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium resize-none"
                  placeholder="Tell us a bit about your child..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                Send Message
              </button>
              <p className="text-xs text-center text-muted-foreground mt-2 font-medium">
                *This is a demo form. No data will be sent.
              </p>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}