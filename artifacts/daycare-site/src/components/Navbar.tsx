import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoTransparent from "@assets/joe.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Location", href: "/location" },
    { name: "Hours", href: "/hours" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={logoTransparent} 
            alt="Little Genius Island Logo" 
            className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-primary leading-none">Little Genius Island</span>
            <span className="text-sm font-semibold text-accent leading-none">Le petit génie</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-base font-bold transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-full font-bold transition-colors"
          >
            Book a Tour
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-lg font-bold ${
                isActive(link.href) ? "bg-primary/10 text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-bold"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}