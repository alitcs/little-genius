import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoTransparent from "@assets/IMG_0974_1782260792644.svg";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src={logoTransparent} 
                alt="Little Genius Island Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mt-2 font-medium">
              Where Little Minds Bloom. A warm, nurturing bilingual daycare for curious young children.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="flex flex-col gap-3 font-semibold text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/location" className="hover:text-primary transition-colors">Location</Link></li>
              <li><Link href="/hours" className="hover:text-primary transition-colors">Hours</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-foreground">Programs</h3>
            <ul className="flex flex-col gap-3 font-semibold text-muted-foreground">
              <li>Toddler (18mo - 2yr)</li>
              <li>Preschool (3 - 4yr)</li>
              <li>Pre-K (4 - 5yr)</li>
              <li>After-School Care</li>
              <li>Bilingual Learning</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="flex flex-col gap-4 font-semibold text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
                <span>123 Maple Grove Lane<br/>Ottawa, ON K1A 0A9</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>(613) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>hello@littlegeniusisland.ca</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Little Genius Island. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}