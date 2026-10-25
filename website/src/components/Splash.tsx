import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@assets/joe.png";
import { Sparkle } from "@/components/site/Decor";

const STORAGE_KEY = "lgi-splash-seen";
const ease = [0.76, 0, 0.24, 1] as const;

function shouldShow() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

export default function Splash() {
  const [visible, setVisible] = useState(shouldShow);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const open = window.setTimeout(() => setOpening(true), reduce ? 300 : 2100);
    const done = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage unavailable */
      }
      document.body.style.overflow = "";
      setVisible(false);
    }, reduce ? 500 : 3100);
    return () => {
      window.clearTimeout(open);
      window.clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100]" role="presentation" aria-hidden="true">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-forest-900"
            animate={{ y: opening ? "-100%" : "0%" }}
            transition={{ duration: 0.95, ease }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-forest-900"
            animate={{ y: opening ? "100%" : "0%" }}
            transition={{ duration: 0.95, ease }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            animate={{ opacity: opening ? 0 : 1, scale: opening ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <Sparkle className="animate-twinkle absolute -right-6 -top-6 h-7 w-7 text-gold-300" />
              <Sparkle className="animate-drift absolute -bottom-4 -left-8 h-4 w-4 text-gold-500" />
              <motion.div
                className="flex h-44 w-44 items-center justify-center rounded-full bg-cream shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:h-52 sm:w-52"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 0.8, 0.24, 1] }}
              >
                <img src={logo} alt="" className="h-28 w-28 object-contain sm:h-32 sm:w-32" />
              </motion.div>
            </div>
            <motion.p
              className="mt-8 font-serif text-xl italic text-gold-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              Le petit génie
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
