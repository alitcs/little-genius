import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoTransparent from "@assets/joe.png";

const footerLinkClass =
  "transition-colors hover:text-[#345b37] focus-visible:text-[#345b37]";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e8ece5] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="Little Genius Island home">
              <img
                src={logoTransparent}
                alt="Little Genius Island"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-[#68736a]">
              Thoughtful learning and care for little learners, from daycare to
              tutoring and music.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1BF6qM1poT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Little Genius Island on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f4ef] text-[#456345] transition-colors hover:bg-[#e3eadf]"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/little_genius_island/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Little Genius Island on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f4ef] text-[#456345] transition-colors hover:bg-[#e3eadf]"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#26352a]">Explore</h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[#68736a]">
              <li><Link href="/" className={footerLinkClass}>Home</Link></li>
              <li><Link href="/services" className={footerLinkClass}>Services</Link></li>
              <li><Link href="/daycare" className={footerLinkClass}>Montessori daycare</Link></li>
              <li><Link href="/team" className={footerLinkClass}>Our team</Link></li>
              <li><Link href="/hours" className={footerLinkClass}>Hours</Link></li>
              <li><Link href="/location" className={footerLinkClass}>Location</Link></li>
              <li><Link href="/faq" className={footerLinkClass}>FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#26352a]">Our services</h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[#68736a]">
              <li><Link href="/daycare" className={footerLinkClass}>Montessori daycare</Link></li>
              <li><Link href="/private-tutoring" className={footerLinkClass}>Private tutoring</Link></li>
              <li><Link href="/piano-lessons" className={footerLinkClass}>Piano lessons</Link></li>
              <li><Link href="/book-tour" className={footerLinkClass}>Book a tour</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#26352a]">Get in touch</h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm text-[#68736a]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#557455]" size={17} />
                <span>78 Main St S,<br />Newmarket, ON L3Y 3Y6</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#557455]" size={17} />
                <a href="tel:+19059771151" className={footerLinkClass}>905 977 1151</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#557455]" size={17} />
                <a href="mailto:info@littlegeniusisland.ca" className={footerLinkClass}>
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#e8ece5] pt-6 text-sm text-[#7a847b]">
          <p>&copy; {new Date().getFullYear()} Little Genius Island. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
