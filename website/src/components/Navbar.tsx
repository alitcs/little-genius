import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoTransparent from "@assets/joe.png";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Our team", href: "/team" },
  { name: "Hours", href: "/hours" },
  { name: "Location", href: "/location" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8ece5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Little Genius Island home">
          <img
            src={logoTransparent}
            alt="Little Genius Island"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`group relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-[#345b37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345b37] ${
                isActive(href) ? "text-[#345b37]" : "text-[#58645a]"
              }`}
            >
              {name}
              <span
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-[#d09a36] transition-transform duration-200 ${
                  isActive(href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                aria-hidden="true"
              />
            </Link>
          ))}
          <Link
            href="/book-tour"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#345b37] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#29492c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37]"
          >
            Book a tour
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#35483a] transition-colors hover:bg-[#f1f4ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345b37] xl:hidden"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-menu-enter border-t border-[#e8ece5] bg-white px-4 py-4 shadow-lg xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg border-l-2 px-3 py-3 text-base font-semibold transition-all duration-200 hover:translate-x-1 hover:bg-[#f3f6f1] hover:text-[#345b37] ${
                  isActive(href)
                    ? "border-[#d09a36] bg-[#f3f6f1] text-[#345b37]"
                    : "border-transparent text-[#58645a]"
                }`}
              >
                {name}
              </Link>
            ))}
            <Link
              href="/book-tour"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#345b37] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#29492c]"
            >
              Book a tour
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
