import { useId, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeOutSoft } from "@/components/motion/Motion";

const controlClass = (invalid: boolean) =>
  cn(
    "w-full rounded-2xl border bg-white px-5 text-base text-ink shadow-[0_1px_0_rgba(27,46,31,0.03)] transition-all duration-200 placeholder:text-ink-soft/55 focus:outline-none focus:ring-4",
    invalid
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
      : "border-forest-900/15 hover:border-forest-700/40 focus:border-forest-700 focus:ring-forest-700/12",
  );

export function ErrorText({ id, children }: { id?: string; children?: string }) {
  return (
    <AnimatePresence initial={false}>
      {children && (
        <motion.p
          id={id}
          role="alert"
          className="mt-2 text-sm font-medium text-red-600"
          initial={{ opacity: 0, y: -4, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: easeOutSoft }}
        >
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function LabelRow({ children, optional }: { children: ReactNode; optional?: boolean }) {
  return (
    <span className="mb-2 flex items-baseline justify-between gap-3 text-sm font-semibold text-ink">
      <span>{children}</span>
      {optional && <span className="text-xs font-medium uppercase tracking-wider text-ink-soft/70">Optional</span>}
    </span>
  );
}

type BaseProps = { label: string; optional?: boolean; hint?: string; error?: string };

export function TextInput({
  label,
  optional,
  hint,
  error,
  id,
  className,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="block">
        <LabelRow optional={optional}>{label}</LabelRow>
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? messageId : undefined}
        className={cn(controlClass(Boolean(error)), "h-14")}
        {...rest}
      />
      {hint && !error && (
        <p id={messageId} className="mt-2 text-sm text-ink-soft">
          {hint}
        </p>
      )}
      <ErrorText id={error ? messageId : undefined}>{error}</ErrorText>
    </div>
  );
}

export function TextArea({
  label,
  optional,
  hint,
  error,
  id,
  className,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="block">
        <LabelRow optional={optional}>{label}</LabelRow>
      </label>
      <textarea
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? messageId : undefined}
        className={cn(controlClass(Boolean(error)), "min-h-28 resize-y py-4 leading-7")}
        {...rest}
      />
      {hint && !error && (
        <p id={messageId} className="mt-2 text-sm text-ink-soft">
          {hint}
        </p>
      )}
      <ErrorText id={error ? messageId : undefined}>{error}</ErrorText>
    </div>
  );
}

type GroupProps = BaseProps & { name: string };

export type ChipOption = { value: string; label: string };

export function Chips({
  legend,
  optional,
  hint,
  error,
  name,
  options,
  value,
  onChange,
  multiple = false,
}: Omit<GroupProps, "label"> & {
  legend: string;
  options: ChipOption[];
  value: string[];
  onChange: (next: string[]) => void;
  multiple?: boolean;
}) {
  const toggle = (option: string) => {
    if (!multiple) return onChange([option]);
    onChange(value.includes(option) ? value.filter((item) => item !== option) : [...value, option]);
  };

  return (
    <fieldset data-invalid={error ? "true" : undefined}>
      <legend className="w-full">
        <LabelRow optional={optional}>{legend}</LabelRow>
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const checked = value.includes(option.value);
          return (
            <label key={option.value} className="cursor-pointer">
              <input
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => toggle(option.value)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-[15px] font-medium transition-all duration-200 active:scale-95 peer-focus-visible:ring-4 peer-focus-visible:ring-forest-700/20",
                  checked
                    ? "border-forest-700 bg-forest-700 text-white shadow-[0_8px_20px_-12px_rgba(39,69,41,0.8)]"
                    : "border-forest-900/15 bg-white text-ink-soft hover:border-forest-700/50 hover:text-ink",
                )}
              >
                {checked && <Check size={15} aria-hidden="true" />}
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
      {hint && !error && <p className="mt-2 text-sm text-ink-soft">{hint}</p>}
      <ErrorText>{error}</ErrorText>
    </fieldset>
  );
}

export type Choice = {
  value: string;
  title: string;
  subtitle?: string;
  aside?: string;
  badge?: string;
};

export function ChoiceCards({
  legend,
  optional,
  hint,
  error,
  name,
  options,
  value,
  onChange,
  columns = 1,
}: Omit<GroupProps, "label"> & {
  legend: string;
  options: Choice[];
  value: string;
  onChange: (next: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <fieldset data-invalid={error ? "true" : undefined}>
      <legend className="w-full">
        <LabelRow optional={optional}>{legend}</LabelRow>
      </legend>
      <div className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2")}>
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label key={option.value || "none"} className="cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "flex h-full items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-200 peer-focus-visible:ring-4 peer-focus-visible:ring-forest-700/20",
                  checked
                    ? "border-forest-700 bg-forest-50 shadow-[0_12px_28px_-20px_rgba(39,69,41,0.7)]"
                    : "border-forest-900/15 bg-white hover:border-forest-700/45",
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                    checked ? "border-forest-700 bg-forest-700 text-white" : "border-forest-900/25 bg-white",
                  )}
                  aria-hidden="true"
                >
                  <motion.span
                    initial={false}
                    animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: easeOutSoft }}
                    className="flex"
                  >
                    <Check size={14} strokeWidth={3} />
                  </motion.span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="font-semibold text-ink">{option.title}</span>
                    {option.badge && (
                      <span className="rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-semibold text-gold-600">
                        {option.badge}
                      </span>
                    )}
                  </span>
                  {option.subtitle && <span className="mt-0.5 block text-sm text-ink-soft">{option.subtitle}</span>}
                </span>
                {option.aside && <span className="shrink-0 font-serif text-xl text-forest-800">{option.aside}</span>}
              </span>
            </label>
          );
        })}
      </div>
      {hint && !error && <p className="mt-2 text-sm text-ink-soft">{hint}</p>}
      <ErrorText>{error}</ErrorText>
    </fieldset>
  );
}

export function Disclosure({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  const id = useId();

  return (
    <div className="rounded-2xl border border-dashed border-forest-900/20 bg-forest-50/50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-[15px] font-semibold text-forest-800"
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: easeOutSoft }}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg leading-none text-forest-700"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutSoft }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-5 pb-6 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
