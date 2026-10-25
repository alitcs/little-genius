import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SplitHeading, easeOutSoft } from "@/components/motion/Motion";
import { Sparkle } from "@/components/site/Decor";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function PageHeader({ eyebrow, title, lead, children, align = "left", className }: PageHeaderProps) {
  const centered = align === "center";

  return (
    <header className={cn("relative overflow-hidden soft-grain", className)}>
      <Sparkle className="animate-twinkle absolute right-[12%] top-24 h-5 w-5 text-gold-300" />
      <Sparkle className="animate-drift absolute right-[22%] top-44 h-3 w-3 text-gold-500/70" />
      <div className={cn("shell pb-14 pt-16 sm:pb-20 sm:pt-24", centered && "text-center")}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutSoft }}
        >
          {eyebrow}
        </motion.p>
        <SplitHeading
          text={title}
          className={cn("display-xl mt-5 max-w-4xl", centered && "mx-auto")}
          delay={0.1}
        />
        {lead && (
          <motion.div
            className={cn("lead mt-6 max-w-2xl", centered && "mx-auto")}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: easeOutSoft }}
          >
            {lead}
          </motion.div>
        )}
        {children && (
          <motion.div
            className={cn("mt-9 flex flex-wrap gap-3", centered && "justify-center")}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOutSoft }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </header>
  );
}
