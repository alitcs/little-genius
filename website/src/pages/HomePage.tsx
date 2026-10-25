import { lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CalendarCheck, Mail, MapPin, Music2, Phone, Sprout } from "lucide-react";
import SEO from "@/components/SEO";
import SignupWizard from "@/components/forms/SignupWizard";
import { signupServices, type SignupService } from "@/components/forms/signup-model";
import { Sparkle } from "@/components/site/Decor";
import { SplitHeading, easeOutSoft } from "@/components/motion/Motion";
import { formatPrice, piano, tutoring, perSession, type LessonService } from "@/data/lessons";
import { meals, montessoriPrograms } from "@/data/programs";
import { routes, site } from "@/data/site";
import daycareVideo from "@/assets/daycare-vid.mp4";

type Step = "welcome" | "choose" | "learn" | "signup" | "tour";
type FlowState = { step: Step; service: SignupService | null };

const Cal = lazy(() => import("@calcom/embed-react"));

const stepOrder = ["choose", "learn", "signup"] as const;
const stepLabels: Record<"choose" | "learn" | "signup", string> = {
  choose: "Choose",
  learn: "Discover",
  signup: "Sign up",
};

const services: { id: SignupService; title: string; meta: string; icon: typeof Sprout; main?: boolean }[] = [
  { id: "daycare", title: "Montessori daycare", meta: "Ages 18 months – 6 years", icon: Sprout, main: true },
  { id: "piano-lessons", title: "Piano lessons", meta: `From ${formatPrice(piano.rate)} / hour`, icon: Music2 },
  { id: "private-tutoring", title: "Private tutoring", meta: `From ${formatPrice(tutoring.rate)} / hour`, icon: BookOpen },
];

const slide = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutSoft } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function Panel({ children }: { children: ReactNode }) {
  return (
    <motion.section
      {...slide}
      className="mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col justify-center px-6 pb-14 pt-40 sm:pt-44"
    >
      {children}
    </motion.section>
  );
}

function Welcome({ onBegin }: { onBegin: () => void }) {
  return (
    <motion.section {...slide} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-950">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src={daycareVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10" aria-hidden="true" />
      <Sparkle className="animate-twinkle absolute right-[14%] top-[30%] h-5 w-5 text-gold-300" />
      <div className="relative mx-auto w-full max-w-2xl px-6 pb-12 sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
          Montessori daycare · Newmarket
        </p>
        <SplitHeading
          text="A place where little minds *grow*."
          className="mt-4 font-serif text-[2.9rem] leading-[1.02] tracking-tight text-white sm:text-6xl [&_.italic]:text-gold-300"
          delay={0.2}
        />
        <p className="mt-5 max-w-md text-lg leading-8 text-white/80">
          Bilingual early learning for children 18 months to 6 years, plus piano lessons and tutoring.
        </p>
        <button
          type="button"
          onClick={onBegin}
          className="group mt-9 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gold-500 px-8 text-base font-semibold text-forest-950 transition-colors hover:bg-gold-300 sm:w-auto"
        >
          Get started
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </button>
        <p className="mt-5 text-sm text-white/65">Takes about two minutes. Nothing to pay online.</p>
      </div>
    </motion.section>
  );
}

const tourHighlights = [
  { title: "30 minutes", body: "Unhurried, no pressure." },
  { title: "Meet the team", body: "Talk with the people who'll care for your child." },
  { title: "See a day", body: "Classrooms, play areas and routines." },
];

function Tour({ onEnroll }: { onEnroll: () => void }) {
  const contacts = [
    { icon: Phone, label: site.phone, href: site.phoneHref },
    { icon: Mail, label: site.email, href: site.emailHref },
    { icon: MapPin, label: `${site.address.street}, ${site.address.city}`, href: site.mapsUrl },
  ];

  return (
    <Panel>
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOutSoft }}
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600"
      >
        <CalendarCheck size={26} strokeWidth={1.5} aria-hidden="true" />
      </motion.span>
      <p className="eyebrow">Visit us</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        Come and see the <span className="italic text-forest-600">island</span>.
      </h2>
      <p className="lead mt-4">Pick a time that suits you. We'll show you around and answer every question.</p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {tourHighlights.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 + index * 0.1, ease: easeOutSoft }}
            className="rounded-2xl bg-forest-50/70 p-4"
          >
            <p className="font-serif text-lg text-forest-900">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-ink-soft">{item.body}</p>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: easeOutSoft }}
        className="mt-8 min-h-[560px] overflow-hidden rounded-[1.75rem] border border-forest-900/10 bg-white p-2 shadow-[0_30px_60px_-40px_rgba(27,46,31,0.5)] sm:p-3"
      >
        <Suspense fallback={<p className="p-8 text-center text-ink-soft">Loading calendar…</p>}>
          <Cal
            calLink="https://cal.com/little-genius-island-eyzs6m/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </Suspense>
      </motion.div>

      <ul className="mt-8 flex flex-col gap-3 text-[15px]">
        {contacts.map(({ icon: Icon, label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="inline-flex items-center gap-3 text-forest-700 transition-colors hover:text-forest-900"
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon size={17} aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onEnroll}
        className="group mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-forest-700 px-8 text-base font-semibold text-white shadow-[0_18px_36px_-18px_rgba(27,46,31,0.7)] transition-colors hover:bg-forest-800"
      >
        Ready to enroll? Start sign-up
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </Panel>
  );
}

function TourPrompt({ onTour, tone = "card" }: { onTour: () => void; tone?: "card" | "link" }) {
  if (tone === "link") {
    return (
      <button
        type="button"
        onClick={onTour}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-forest-900/15 px-8 text-[15px] font-semibold text-forest-800 transition-colors hover:bg-forest-50"
      >
        <CalendarCheck size={18} aria-hidden="true" /> Prefer to visit first? Book a tour
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onTour}
      className="group flex w-full items-center gap-4 rounded-3xl bg-forest-900 p-5 text-left text-cream transition-all duration-300 hover:bg-forest-800 active:scale-[0.99]"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-300">
        <CalendarCheck size={22} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-serif text-2xl">Visit us first</span>
        <span className="block text-sm text-forest-100/80">Book a 30-minute daycare tour</span>
      </span>
      <ArrowRight size={20} aria-hidden="true" className="shrink-0 text-gold-300 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}

function Choose({ onPick, onTour }: { onPick: (service: SignupService) => void; onTour: () => void }) {
  return (
    <Panel>
      <p className="eyebrow">Step 1</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        What are you looking for?
      </h2>
      <ul className="mt-9 flex flex-col gap-3">
        {services.map(({ id, title, meta, icon: Icon, main }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: easeOutSoft }}
          >
            <button
              type="button"
              onClick={() => onPick(id)}
              className="group flex w-full items-center gap-4 rounded-3xl border border-forest-900/10 bg-white p-5 text-left transition-all duration-300 hover:border-forest-700/40 hover:shadow-[0_24px_50px_-34px_rgba(27,46,31,0.6)] active:scale-[0.99]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-2xl text-ink">{title}</span>
                <span className="block text-sm text-ink-soft">{meta}</span>
                {main && <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">Our main program</span>}
              </span>
              <ArrowRight size={20} aria-hidden="true" className="shrink-0 text-forest-700 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: easeOutSoft }}
        className="mt-6"
      >
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Not ready yet?</p>
        <TourPrompt onTour={onTour} />
      </motion.div>
    </Panel>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-4">
      <span className="text-ink">{label}</span>
      <span className="text-right text-sm text-ink-soft">{value}</span>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-9">
      <p className="eyebrow">{title}</p>
      <div className="mt-2 divide-y divide-forest-900/10 border-y border-forest-900/10">{children}</div>
    </div>
  );
}

function DaycareDetails() {
  return (
    <>
      <p className="lead mt-4">Three programs that grow with your child.</p>
      <Block title="Programs">
        {montessoriPrograms.map((program) => (
          <div key={program.id} className="py-5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-serif text-xl text-ink">{program.name}</span>
              <span className="shrink-0 text-sm font-semibold text-gold-600">{program.ages}</span>
            </div>
            <p className="mt-2 text-[15px] leading-7 text-ink-soft">{program.description}</p>
          </div>
        ))}
      </Block>
      <Block title="Meals and snacks">
        {meals.map((meal) => (
          <Row key={meal.name} label={meal.name} value={meal.time} />
        ))}
      </Block>
      <Block title="Outdoor play · 1 hour morning, 1 hour afternoon">
        {montessoriPrograms.map((program) => (
          <Row key={program.id} label={program.name} value={`${program.outdoor.morning} · ${program.outdoor.afternoon}`} />
        ))}
      </Block>
      <Block title="Hours">
        {site.serviceHours.daycare.map((row) => (
          <Row key={row.day} label={row.day} value={row.hours} />
        ))}
      </Block>
      <Block title="Payment">
        <Row
          label="Monthly tuition"
          value={site.daycareMonthlyTuition ?? "Shared when we connect"}
        />
        <Row label="Contract and payment" value="In person" />
      </Block>
    </>
  );
}

function LessonDetails({ lesson }: { lesson: LessonService }) {
  return (
    <>
      <p className="lead mt-4">
        {lesson.short} One session is one hour at {formatPrice(lesson.rate)}.
      </p>
      {lesson.subjects && (
        <Block title="Subjects">
          <div className="flex flex-wrap gap-2 py-5">
            {lesson.subjects.map((subject) => (
              <span key={subject} className="rounded-full bg-forest-50 px-4 py-2 text-forest-800">
                {subject}
              </span>
            ))}
          </div>
        </Block>
      )}
      <Block title="Pricing">
        {lesson.packages.map((pkg) => (
          <div key={pkg.sessions} className="flex items-baseline justify-between gap-6 py-4">
            <span className="text-ink">
              {pkg.label}
              {pkg.savings && <span className="ml-2 text-xs font-semibold text-gold-600">{pkg.savings}</span>}
            </span>
            <span className="text-right">
              <span className="font-serif text-xl text-forest-800">{formatPrice(pkg.price)}</span>
              {pkg.sessions > 1 && <span className="block text-xs text-ink-soft">~{formatPrice(perSession(pkg))} / session</span>}
            </span>
          </div>
        ))}
      </Block>
      <Block title="Hours">
        {site.serviceHours.lessons.map((row) => (
          <Row key={row.day} label={row.day} value={row.hours} />
        ))}
      </Block>
      <Block title="Payment">
        <Row label="Contract and payment" value="In person" />
      </Block>
    </>
  );
}

function Learn({ service, onContinue, onTour }: { service: SignupService; onContinue: () => void; onTour: () => void }) {
  const lesson = signupServices[service].lesson;
  return (
    <Panel>
      <p className="eyebrow">Step 2</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        {signupServices[service].name}
      </h2>
      {lesson ? <LessonDetails lesson={lesson} /> : <DaycareDetails />}
      <button
        type="button"
        onClick={onContinue}
        className="group mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-forest-700 px-8 text-base font-semibold text-white shadow-[0_18px_36px_-18px_rgba(27,46,31,0.7)] transition-colors hover:bg-forest-800"
      >
        Continue to sign up
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </button>
      {service === "daycare" && <TourPrompt tone="link" onTour={onTour} />}
    </Panel>
  );
}

function SignUp({ service }: { service: SignupService }) {
  return (
    <Panel>
      <p className="eyebrow">Step 3</p>
      <h2 className="mt-3 mb-8 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        Tell us about your child.
      </h2>
      <SignupWizard service={service} />
    </Panel>
  );
}

export default function HomePage({ initialStep }: { initialStep?: Step }) {
  const [state, setState] = useState<FlowState>(() => {
    const saved = window.history.state as FlowState | null;
    if (saved && saved.step) return saved;
    return { step: initialStep ?? "welcome", service: null };
  });

  const go = useCallback((next: FlowState) => {
    window.history.pushState(next, "");
    window.scrollTo({ top: 0 });
    setState(next);
  }, []);

  useEffect(() => {
    const onPop = (event: PopStateEvent) => {
      const next = event.state as FlowState | null;
      setState(next && next.step ? next : { step: "welcome", service: null });
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("popstate", onPop);
    const onRestart = () => go({ step: "welcome", service: null });
    window.addEventListener("lgi:restart", onRestart);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("lgi:restart", onRestart);
    };
  }, [go]);

  const { step, service } = state;
  const progress = step === "welcome" || step === "tour" ? 0 : stepOrder.indexOf(step) + 1;

  return (
    <div className="relative">
      <SEO
        title="Montessori daycare in Newmarket"
        description="Little Genius Island is a bilingual Montessori daycare in Newmarket, Ontario for children 18 months to 6 years, with piano lessons and private tutoring also offered."
        path="/"
      />

      {step !== "welcome" && (
        <div className="absolute inset-x-0 top-20 z-30 sm:top-24">
          <div className="mx-auto flex max-w-2xl items-center gap-4 px-6">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest-900/10 bg-white/80 text-forest-800 backdrop-blur transition-colors hover:bg-white"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
            {step !== "tour" && <ol className="flex flex-1 gap-2" aria-label="Progress">
              {stepOrder.map((name, index) => (
                <li key={name} className="flex-1" aria-current={step === name ? "step" : undefined}>
                  <span className="sr-only">{stepLabels[name]}</span>
                  <span className="block h-1 overflow-hidden rounded-full bg-forest-900/10">
                    <motion.span
                      className="block h-full rounded-full bg-gold-500"
                      initial={false}
                      animate={{ width: index < progress ? "100%" : "0%" }}
                      transition={{ duration: 0.6, ease: easeOutSoft }}
                    />
                  </span>
                </li>
              ))}
            </ol>}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === "welcome" && <Welcome key="welcome" onBegin={() => go({ step: "choose", service: null })} />}
        {step === "choose" && (
          <Choose
            key="choose"
            onPick={(id) => go({ step: "learn", service: id })}
            onTour={() => go({ step: "tour", service: null })}
          />
        )}
        {step === "learn" && service && (
          <Learn
            key="learn"
            service={service}
            onContinue={() => go({ step: "signup", service })}
            onTour={() => go({ step: "tour", service: null })}
          />
        )}
        {step === "tour" && <Tour key="tour" onEnroll={() => go({ step: "learn", service: "daycare" })} />}
        {step === "signup" && service && <SignUp key="signup" service={service} />}
      </AnimatePresence>

      {step === "welcome" && (
        <p className="sr-only">
          <a href={routes.tour}>Book a tour</a>
        </p>
      )}
    </div>
  );
}
