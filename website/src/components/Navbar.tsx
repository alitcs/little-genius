import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoTransparent from "@assets/joe.png";
import locationIcon from "@assets/icons/map.png";
import hoursIcon from "@assets/icons/clock.png";
import guideIcon from "@assets/icons/parental-guide.png";
import teamIcon from "@assets/icons/team.png";
import locationIconHover from "@assets/icons/map-hover.png";
import hoursIconHover from "@assets/icons/clock-hover.png";
import guideIconHover from "@assets/icons/parental-guide-hover.png";
import teamIconHover from "@assets/icons/team-hover.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Location",
      href: "/location",
    },
    {
      name: "Hours",
      href: "/hours",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Team",
      href: "/team",
    },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src={logoTransparent}
            alt="Little Genius Island Logo"
            className="h-22 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-base font-bold text-black transition-colors hover:text-[#495A1C] focus-visible:text-[#495A1C]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-2.5 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Tour
          </Link>
        </nav>

        <button
          className="p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 flex w-full flex-col gap-4 border-b border-border bg-background px-4 py-4 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-bold text-black transition-colors hover:text-[#495A1C] focus-visible:text-[#495A1C] ${
                isActive(link.href) ? "bg-primary/10" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="px-4 pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full rounded-xl bg-primary px-6 py-3 text-center font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}