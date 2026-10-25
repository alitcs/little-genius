import { cn } from "@/lib/utils";

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-6 w-6", className)} fill="currentColor">
      <path d="M12 0c.6 6.6 4.8 11.4 12 12-7.2.6-11.4 5.4-12 12-.6-6.6-4.8-11.4-12-12C7.2 11.4 11.4 6.6 12 0Z" />
    </svg>
  );
}

export function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 96" aria-hidden="true" className={cn("h-24 w-16", className)} fill="none">
      <path d="M32 94V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M32 74c-14-2-22-12-22-26 14 2 22 12 22 26Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M32 56c14-2 22-12 22-26-14 2-22 12-22 26Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M32 36c-9-2-14-8-14-18 9 2 14 8 14 18Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function StarDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 text-gold-500", className)} aria-hidden="true">
      <span className="h-px w-12 bg-gold-500/50" />
      <Sparkle className="h-3.5 w-3.5" />
      <span className="h-px w-12 bg-gold-500/50" />
    </div>
  );
}
