import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, Pencil, Plus, X } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { easeOutSoft } from "@/components/motion/Motion";
import { Sparkle } from "@/components/site/Decor";
import ButtonLink from "@/components/site/ButtonLink";
import { formatPrice, perSession, type LessonService } from "@/data/lessons";
import { routes, site } from "@/data/site";
import { submitToNetlify } from "./netlify";
import AvailabilityPicker from "./Availability";
import { ChoiceCards, Chips, Disclosure, ErrorText, TextArea, TextInput, type Choice } from "./fields";
import {
  buildSubmission,
  contactMethods,
  daycareProgramOptions,
  describeChild,
  emptyContact,
  methodLabel,
  newChild,
  signupServices,
  validateChildren,
  validateContact,
  type ChildEntry,
  type ContactEntry,
  type Errors,
  type SessionChoice,
  type SignupService,
} from "./signup-model";

const stepLabels = ["Your child", "Your details", "Review"];

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 36 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -36 }),
};

const packageChoices = (lesson: LessonService): Choice[] => [
  { value: "", title: "I'll decide later", subtitle: "We'll help you choose when we get in touch" },
  ...lesson.packages.map((pkg) => ({
    value: String(pkg.sessions),
    title: pkg.label,
    subtitle: pkg.sessions > 1 ? `About ${formatPrice(perSession(pkg))} per session` : "1 hour",
    aside: formatPrice(pkg.price),
    badge: pkg.savings ?? undefined,
  })),
];

const stepHeading: Record<SignupService, { title: string; lead: string }> = {
  daycare: {
    title: "Which program, and who's joining us?",
    lead: "Choose the program that fits your child's age. We can always adjust together.",
  },
  "piano-lessons": {
    title: "Who's learning piano?",
    lead: "Just the basics for now. We'll sort out the rest together.",
  },
  "private-tutoring": {
    title: "What would your child like help with?",
    lead: "Start with the subjects, then tell us a little about your child.",
  },
};

function ChildFields({
  service,
  child,
  index,
  total,
  errors,
  optionalOpen,
  onToggleOptional,
  onChange,
  onRemove,
}: {
  service: SignupService;
  child: ChildEntry;
  index: number;
  total: number;
  errors: Errors;
  optionalOpen: boolean;
  onToggleOptional: () => void;
  onChange: (patch: Partial<ChildEntry>) => void;
  onRemove: () => void;
}) {
  const lesson = signupServices[service].lesson;
  const error = (field: string) => errors[`${child.id}.${field}`];

  return (
    <motion.section
      layout="position"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.22 } }}
      transition={{ duration: 0.5, ease: easeOutSoft }}
      className={cn("flex flex-col gap-7", total > 1 && "rounded-3xl border border-forest-900/10 bg-cream/60 p-5 sm:p-7")}
      aria-label={`Child ${index + 1}`}
    >
      {total > 1 && (
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl text-ink">Child {index + 1}</h3>
          {index > 0 && (
            <button
              type="button"
              onClick={onRemove}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-white hover:text-red-600"
            >
              <X size={15} aria-hidden="true" /> Remove
            </button>
          )}
        </div>
      )}

      {service === "daycare" && (
        <ChoiceCards
          legend="Program applying for"
          name={`${child.id}-program`}
          options={daycareProgramOptions}
          value={child.program}
          onChange={(program) => onChange({ program })}
          error={error("program")}
        />
      )}

      {service === "private-tutoring" && (
        <Chips
          legend="Subjects"
          hint="Choose as many as you like."
          name={`${child.id}-subjects`}
          options={(lesson?.subjects ?? []).map((subject) => ({ value: subject, label: subject }))}
          value={child.subjects}
          onChange={(subjects) => onChange({ subjects })}
          multiple
          error={error("subjects")}
        />
      )}

      <div className={cn("grid gap-5", service !== "daycare" && "sm:grid-cols-[1fr_9rem]")}>
        <TextInput
          label="Child's name"
          name={`${child.id}-name`}
          autoComplete="off"
          placeholder="First name"
          value={child.name}
          onChange={(event) => onChange({ name: event.target.value })}
          error={error("name")}
        />
        {service !== "daycare" && (
          <TextInput
            label="Age"
            name={`${child.id}-age`}
            inputMode="numeric"
            autoComplete="off"
            placeholder="e.g. 7"
            maxLength={2}
            value={child.age}
            onChange={(event) => onChange({ age: event.target.value.replace(/\D/g, "") })}
            error={error("age")}
          />
        )}
      </div>

      {lesson && (
        <Disclosure
          label="Add grade, schedule and package preferences"
          open={optionalOpen}
          onToggle={onToggleOptional}
        >
          <TextInput
            label="Grade level"
            optional
            name={`${child.id}-grade`}
            placeholder="e.g. JK, SK, 3rd grade"
            value={child.grade}
            onChange={(event) => onChange({ grade: event.target.value })}
          />
          <ChoiceCards
            legend="Session package"
            optional
            name={`${child.id}-package`}
            options={packageChoices(lesson)}
            value={child.sessions}
            onChange={(sessions) => onChange({ sessions: sessions as SessionChoice })}
          />
          <div>
            <p className="mb-3 text-sm font-semibold text-ink">
              Weekly schedule <span className="font-normal text-ink-soft">(optional)</span>
            </p>
            <AvailabilityPicker
              value={child.availability}
              onChange={(availability) => onChange({ availability })}
            />
          </div>
          {service === "private-tutoring" && child.subjects.length > 1 && (
            <TextInput
              label="How to split the hours across subjects"
              optional
              name={`${child.id}-split`}
              placeholder="e.g. 2 hours Math, 1 hour English"
              value={child.split}
              onChange={(event) => onChange({ split: event.target.value })}
            />
          )}
        </Disclosure>
      )}
    </motion.section>
  );
}

function ReviewBlock({ title, onEdit, children }: { title: string; onEdit: () => void; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-forest-900/10 bg-cream/60 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-serif text-xl text-ink">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-forest-700 transition-colors hover:bg-white"
        >
          <Pencil size={14} aria-hidden="true" /> Edit
        </button>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function SuccessPanel({
  service,
  contact,
  childNames,
}: {
  service: SignupService;
  contact: ContactEntry;
  childNames: string[];
}) {
  const meta = signupServices[service];
  const who = childNames.length > 1 ? childNames.slice(0, -1).join(", ") + " and " + childNames[childNames.length - 1] : childNames[0];
  const firstName = contact.parentName.trim().split(" ")[0];

  const steps = [
    {
      title: "We review your request",
      body: "Our team is already on it. There's nothing more you need to do online.",
    },
    {
      title: `We reach out by ${methodLabel(contact.method).toLowerCase()}`,
      body: "You'll hear from us shortly with when you can come in to get started.",
    },
    {
      title: "You visit to finish in person",
      body: "Contract signing and payment happen in person at our Newmarket location.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOutSoft }}
      className="text-center"
      role="status"
    >
      <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-gold-500"
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0.6],
              x: Math.cos((i / 8) * Math.PI * 2) * 74,
              y: Math.sin((i / 8) * Math.PI * 2) * 74,
            }}
            transition={{ duration: 1.3, delay: 0.35, ease: easeOutSoft }}
          >
            <Sparkle className="h-4 w-4" />
          </motion.span>
        ))}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-forest-700 text-white shadow-[0_20px_40px_-20px_rgba(39,69,41,0.9)]"
        >
          <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <motion.path
              d="M5 12.5l4.5 4.5L19 7.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOutSoft }}
            />
          </svg>
        </motion.div>
      </div>

      <h2 className="display-lg mt-8">Thank you{firstName ? `, ${firstName}` : ""}.</h2>
      <p className="lead mx-auto mt-4 max-w-xl">
        We've received your {meta.name.toLowerCase()} request for {who}. Our team is taking it from here and will be in
        touch shortly by {methodLabel(contact.method).toLowerCase()}.
      </p>

      <ol className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.12, ease: easeOutSoft }}
            className="rounded-2xl border border-forest-900/10 bg-cream/70 p-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-100 font-serif text-base text-gold-600">
              {index + 1}
            </span>
            <p className="mt-3 font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-6 text-ink-soft">{step.body}</p>
          </motion.li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {service === "daycare" && (
          <ButtonLink href={routes.tour}>Book a tour</ButtonLink>
        )}
        <ButtonLink
          href={routes.home}
          variant={service === "daycare" ? "secondary" : "primary"}
          arrow={false}
          onClick={() => window.dispatchEvent(new Event("lgi:restart"))}
        >
          Back to home
        </ButtonLink>
      </div>
      <p className="mt-8 text-sm text-ink-soft">
        Need to change something? Call us at{" "}
        <a href={site.phoneHref} className="font-semibold text-forest-700 underline underline-offset-4">
          {site.phone}
        </a>
        .
      </p>
    </motion.div>
  );
}

export default function SignupWizard({ service }: { service: SignupService }) {
  const meta = signupServices[service];
  const lesson = meta.lesson;
  const [children, setChildren] = useState<ChildEntry[]>(() => [newChild()]);
  const [contact, setContact] = useState<ContactEntry>(emptyContact);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [errorTick, setErrorTick] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [optionalOpen, setOptionalOpen] = useState<Record<string, boolean>>({});

  const topRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, status]);

  useEffect(() => {
    if (!errorTick) return;
    const target = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]');
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    const field = target.matches("input, textarea") ? target : target.querySelector<HTMLElement>("input");
    field?.focus({ preventScroll: true });
  }, [errorTick]);

  const clearErrors = (prefix: string) =>
    setErrors((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => key.startsWith(prefix) && delete next[key]);
      return next;
    });

  const updateChild = (id: string, patch: Partial<ChildEntry>) => {
    setChildren((list) => list.map((child) => (child.id === id ? { ...child, ...patch } : child)));
    Object.keys(patch).forEach((field) => clearErrors(`${id}.${field}`));
  };

  const updateContact = (patch: Partial<ContactEntry>) => {
    setContact((current) => ({ ...current, ...patch }));
    clearErrors("contact.");
  };

  const goTo = (target: number, dir: number) => {
    setDirection(dir);
    setStep(target);
    setStatus("idle");
  };

  const next = () => {
    const found = step === 0 ? validateChildren(service, children) : validateContact(contact);
    if (Object.keys(found).length) {
      setErrors(found);
      setErrorTick((tick) => tick + 1);
      return;
    }
    setErrors({});
    goTo(step + 1, 1);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
    if (step < 2) return next();

    const found = { ...validateChildren(service, children), ...validateContact(contact) };
    if (Object.keys(found).length) {
      setErrors(found);
      goTo(Object.keys(found).some((key) => !key.startsWith("contact.")) ? 0 : 1, -1);
      setErrorTick((tick) => tick + 1);
      return;
    }

    setStatus("sending");
    try {
      await submitToNetlify(meta.formName, buildSubmission(service, children, contact));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const heading = stepHeading[service];

  if (status === "sent") {
    return (
      <div ref={topRef} className="scroll-mt-28 rounded-[2rem] border border-forest-900/10 bg-white p-7 shadow-[0_30px_80px_-50px_rgba(27,46,31,0.45)] sm:p-12">
        <SuccessPanel service={service} contact={contact} childNames={children.map((child) => child.name.trim())} />
      </div>
    );
  }

  return (
    <div
      ref={topRef}
      className="scroll-mt-28 rounded-[2rem] border border-forest-900/10 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(27,46,31,0.45)] sm:p-10"
    >
      <ol className="flex items-start gap-3" aria-label="Sign-up progress">
        {stepLabels.map((label, index) => (
          <li key={label} className="flex-1" aria-current={index === step ? "step" : undefined}>
            <div className="h-1 overflow-hidden rounded-full bg-forest-900/10">
              <motion.div
                className="h-full rounded-full bg-forest-700"
                initial={false}
                animate={{ width: index <= step ? "100%" : "0%" }}
                transition={{ duration: 0.6, ease: easeOutSoft }}
              />
            </div>
            <p
              className={cn(
                "mt-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:text-xs",
                index === step ? "text-forest-800" : "text-ink-soft/55",
              )}
            >
              <span className="hidden sm:inline">{index + 1}. </span>
              {label}
            </p>
          </li>
        ))}
      </ol>

      <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-9 sm:mt-11">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: easeOutSoft }}
          >
            {step === 0 && (
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-serif text-[1.7rem] leading-tight tracking-tight text-ink sm:text-4xl">{heading.title}</h2>
                  <p className="mt-3 text-ink-soft">{heading.lead}</p>
                </div>

                <AnimatePresence initial={false}>
                  {children.map((child, index) => (
                    <ChildFields
                      key={child.id}
                      service={service}
                      child={child}
                      index={index}
                      total={children.length}
                      errors={errors}
                      optionalOpen={Boolean(optionalOpen[child.id])}
                      onToggleOptional={() =>
                        setOptionalOpen((current) => ({ ...current, [child.id]: !current[child.id] }))
                      }
                      onChange={(patch) => updateChild(child.id, patch)}
                      onRemove={() => setChildren((list) => list.filter((item) => item.id !== child.id))}
                    />
                  ))}
                </AnimatePresence>

                {children.length < 6 && (
                  <button
                    type="button"
                    onClick={() => setChildren((list) => [...list, newChild()])}
                    className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl border border-dashed border-forest-700/35 px-5 text-[15px] font-semibold text-forest-700 transition-all duration-300 hover:border-forest-700 hover:bg-forest-50"
                  >
                    <Plus size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-90" />
                    Add another child
                  </button>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-7">
                <div>
                  <h2 className="font-serif text-[1.7rem] leading-tight tracking-tight text-ink sm:text-4xl">How can we reach you?</h2>
                  <p className="mt-3 text-ink-soft">We'll get back to you using whichever way you prefer.</p>
                </div>
                <TextInput
                  label="Your name"
                  name="parent_name"
                  autoComplete="name"
                  placeholder="Parent or guardian"
                  value={contact.parentName}
                  onChange={(event) => updateContact({ parentName: event.target.value })}
                  error={errors["contact.parentName"]}
                />
                <Chips
                  legend="Preferred way to be contacted"
                  name="preferred_contact"
                  options={contactMethods.map(({ value, label }) => ({ value, label }))}
                  value={[contact.method]}
                  onChange={([method]) => updateContact({ method: method as ContactEntry["method"] })}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextInput
                    label="Email"
                    optional={contact.method !== "email"}
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={contact.email}
                    onChange={(event) => updateContact({ email: event.target.value })}
                    error={errors["contact.email"]}
                  />
                  <TextInput
                    label="Phone"
                    optional={contact.method === "email"}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(905) 555-0123"
                    value={contact.phone}
                    onChange={(event) => updateContact({ phone: event.target.value })}
                    error={errors["contact.phone"]}
                  />
                </div>
                <TextArea
                  label="Anything you'd like us to know?"
                  optional
                  name="notes"
                  placeholder="Questions, scheduling needs, or anything that helps us prepare."
                  value={contact.notes}
                  onChange={(event) => updateContact({ notes: event.target.value })}
                />
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-serif text-[1.7rem] leading-tight tracking-tight text-ink sm:text-4xl">Everything look right?</h2>
                  <p className="mt-3 text-ink-soft">Take a quick look, then send it to our team.</p>
                </div>

                <ReviewBlock title={children.length > 1 ? "Your children" : "Your child"} onEdit={() => goTo(0, -1)}>
                  <div className="flex flex-col gap-5">
                    {children.map((child, index) => (
                      <dl key={child.id} className="grid gap-x-6 gap-y-2 text-[15px] sm:grid-cols-[9rem_1fr]">
                        {describeChild(service, child, index)
                          .split("\n")
                          .map((line) => {
                            const [label, ...rest] = line.split(": ");
                            return (
                              <div key={line} className="contents">
                                <dt className="text-ink-soft">{label}</dt>
                                <dd className="font-medium text-ink">{rest.join(": ")}</dd>
                              </div>
                            );
                          })}
                      </dl>
                    ))}
                  </div>
                </ReviewBlock>

                <ReviewBlock title="Your details" onEdit={() => goTo(1, -1)}>
                  <dl className="grid gap-x-6 gap-y-2 text-[15px] sm:grid-cols-[9rem_1fr]">
                    <dt className="text-ink-soft">Name</dt>
                    <dd className="font-medium text-ink">{contact.parentName}</dd>
                    {contact.email && (
                      <>
                        <dt className="text-ink-soft">Email</dt>
                        <dd className="break-all font-medium text-ink">{contact.email}</dd>
                      </>
                    )}
                    {contact.phone && (
                      <>
                        <dt className="text-ink-soft">Phone</dt>
                        <dd className="font-medium text-ink">{contact.phone}</dd>
                      </>
                    )}
                    <dt className="text-ink-soft">Preferred contact</dt>
                    <dd className="font-medium text-ink">{methodLabel(contact.method)}</dd>
                    {contact.notes && (
                      <>
                        <dt className="text-ink-soft">Notes</dt>
                        <dd className="font-medium text-ink">{contact.notes}</dd>
                      </>
                    )}
                  </dl>
                </ReviewBlock>

                <p className="flex items-start gap-3 rounded-2xl bg-gold-100/70 p-5 text-[15px] leading-7 text-forest-900">
                  <Check size={18} className="mt-1 shrink-0 text-gold-600" aria-hidden="true" />
                  <span>
                    Nothing to pay online. Once our team reaches out, you'll sign your contract and pay in person
                    {lesson ? "" : ", with monthly tuition confirmed at that visit"}.
                  </span>
                </p>

                <div aria-live="polite">
                  <ErrorText>
                    {status === "error"
                      ? `Something went wrong sending your request. Please try again, or call us at ${site.phone}.`
                      : undefined}
                  </ErrorText>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-col-reverse gap-3 border-t border-forest-900/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => goTo(step - 1, -1)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold text-ink-soft transition-colors hover:text-forest-800"
            >
              <ArrowLeft size={17} aria-hidden="true" /> Back
            </button>
          ) : (
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold text-ink-soft transition-colors hover:text-forest-800"
            >
              <ArrowLeft size={17} aria-hidden="true" /> Back
            </button>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-forest-700 px-9 py-3 text-base font-semibold text-white shadow-[0_14px_34px_-16px_rgba(39,69,41,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-800 disabled:translate-y-0 disabled:opacity-80"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending
              </>
            ) : step === 2 ? (
              <>
                {status === "error" ? "Try again" : "Send my request"}
                <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
