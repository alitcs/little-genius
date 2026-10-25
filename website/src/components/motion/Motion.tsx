import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const easeOutSoft = [0.22, 0.8, 0.24, 1] as const;

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}

export function PageTransition({ children, routeKey }: { children: ReactNode; routeKey: string }) {
  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOutSoft }}
    >
      {children}
    </motion.div>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

export function Reveal({ children, className, delay = 0, y = 28, x = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.85, delay, ease: easeOutSoft }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants = (gap: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren } },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutSoft } },
};

export function Stagger({
  children,
  className,
  gap = 0.12,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/**
 * Headline whose words rise into view. Wrap a word in *asterisks* to set it in
 * the italic accent style, e.g. "A place to *grow*".
 */
export function SplitHeading({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  const plain = text.replace(/\*/g, "");
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn(className)}
      aria-label={plain}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants(0.055, delay)}
    >
      {words.map((word, index) => {
        const accent = word.startsWith("*") || word.endsWith("*");
        const clean = word.replace(/\*/g, "");
        return (
          <span key={`${clean}-${index}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className={cn("inline-block", accent && "italic text-forest-600")}
              variants={{
                hidden: { y: "110%" },
                show: { y: "0%", transition: { duration: 0.9, ease: easeOutSoft } },
              }}
            >
              {clean}
            </motion.span>
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </MotionTag>
  );
}
