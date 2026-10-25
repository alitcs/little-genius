import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@assets/joe.png";
import ButtonLink from "@/components/site/ButtonLink";
import { easeOutSoft } from "@/components/motion/Motion";
import { routes, site } from "@/data/site";
import { cn } from "@/lib/utils";

const menuLinks = [
  { name: "Our team", href: routes.team },
  { name: "Hours", href: routes.hours },
  { name: "Location", href: routes.location },
  { name: "FAQ", href: routes.faq },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const restartFlow = () => {
    setOpen(false);
    window.dispatchEvent(new Event("lgi:restart"));
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="shell flex h-20 items-center justify-between sm:h-24">
          <Link href={routes.home} onClick={restartFlow} aria-label="Little Genius Island home" className="relative z-50 shrink-0 rounded-full bg-cream/90 px-4 py-1.5 backdrop-blur">
                      <img src={logo} alt="Little Genius Island" className="h-10 w-auto object-contain sm:h-12" />
          </Link>
          <button
            type="button"
            className="relative z-50 inline-flex h-12 items-center gap-2 rounded-full border border-forest-900/10 bg-white/70 px-5 text-sm font-semibold text-forest-900 backdrop-blur transition-colors hover:bg-white"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            aria-label="Site menu"
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-cream px-6 pb-10 pt-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="mx-auto flex w-full max-w-xl flex-col"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {menuLinks.map(({ name, href }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutSoft } },
                  }}
                  className="border-b border-forest-900/10"
                >
                  <Link
                    href={href}
                    onClick={(event) => {
                      if (location === href) {
                        event.preventDefault();
                        window.location.reload();
                      }
                    }}
                    className={cn(
                      "flex items-center justify-between py-5 font-serif text-4xl tracking-tight",
                      location === href ? "text-forest-600" : "text-ink",
                    )}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: easeOutSoft }}
            >
              <ButtonLink href={routes.home} onClick={restartFlow}>Start sign-up</ButtonLink>
              {site.daycareLive && (
                <ButtonLink href={routes.tour} variant="secondary" arrow={false}>
                  Book a tour
                </ButtonLink>
              )}
              <a href={site.phoneHref} className="mt-4 text-center text-sm font-medium text-ink-soft">
                Questions? Call {site.phone}
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
