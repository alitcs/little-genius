import { montessoriPrograms } from "@/data/programs";
import { formatPrice, piano, tutoring, type LessonService } from "@/data/lessons";

export type SignupService = "daycare" | "piano-lessons" | "private-tutoring";
export type ContactMethod = "email" | "phone" | "text";
export type SessionChoice = "" | "1" | "5" | "10";
export type Errors = Record<string, string>;

export type Availability = Record<string, Record<number, "yes" | "no">>;

export type ChildEntry = {
  id: string;
  name: string;
  age: string;
  program: string;
  subjects: string[];
  grade: string;
  sessions: SessionChoice;
  availability: Availability;
  split: string;
};

export type ContactEntry = {
  parentName: string;
  email: string;
  phone: string;
  method: ContactMethod;
  notes: string;
};

export const signupServices: Record<
  SignupService,
  { formName: string; name: string; lesson?: LessonService }
> = {
  daycare: { formName: "daycare-signup", name: "Montessori Daycare" },
  "piano-lessons": { formName: "piano-signup", name: "Piano Lessons", lesson: piano },
  "private-tutoring": { formName: "tutoring-signup", name: "Private Tutoring", lesson: tutoring },
};

export const contactMethods: { value: ContactMethod; label: string; short: string }[] = [
  { value: "email", label: "Email", short: "email" },
  { value: "phone", label: "Phone call", short: "phone" },
  { value: "text", label: "Text message", short: "text message" },
];

export const weekdays = [
  { value: "Monday", label: "Mon" },
  { value: "Tuesday", label: "Tue" },
  { value: "Wednesday", label: "Wed" },
  { value: "Thursday", label: "Thu" },
  { value: "Friday", label: "Fri" },
  { value: "Saturday", label: "Sat" },
  { value: "Sunday", label: "Sun" },
];

let childCounter = 0;

export const firstHour = 7;
export const lastHour = 17;
export const hourSlots = Array.from({ length: lastHour - firstHour + 1 }, (_, index) => firstHour + index);

export const formatHour = (hour: number) => `${hour % 12 || 12} ${hour >= 12 && hour < 24 ? "pm" : "am"}`;

function summarizeKind(availability: Availability, kind: "yes" | "no"): string[] {
  const lines: string[] = [];
  for (const day of weekdays) {
    const hours = hourSlots.filter((hour) => availability[day.value]?.[hour] === kind);
    if (!hours.length) continue;
    const ranges: string[] = [];
    let start = hours[0];
    let previous = hours[0];
    for (const hour of [...hours.slice(1), Infinity]) {
      if (hour !== previous + 1) {
        ranges.push(`${formatHour(start)}–${formatHour(previous + 1)}`);
        start = hour;
      }
      previous = hour;
    }
    lines.push(`${day.value}: ${ranges.join(", ")}`);
  }
  return lines;
}

export function summarizeAvailability(availability: Availability) {
  return { works: summarizeKind(availability, "yes"), avoid: summarizeKind(availability, "no") };
}

export const newChild = (): ChildEntry => ({
  id: `child${++childCounter}`,
  name: "",
  age: "",
  program: "",
  subjects: [],
  grade: "",
  sessions: "",
  availability: {},
  split: "",
});

export const emptyContact = (): ContactEntry => ({
  parentName: "",
  email: "",
  phone: "",
  method: "email",
  notes: "",
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneDigits = (value: string) => value.replace(/\D/g, "");

export function validateChildren(service: SignupService, children: ChildEntry[]): Errors {
  const errors: Errors = {};

  children.forEach((child) => {
    if (service === "daycare" && !child.program) {
      errors[`${child.id}.program`] = "Please choose a program.";
    }
    if (service === "private-tutoring" && child.subjects.length === 0) {
      errors[`${child.id}.subjects`] = "Please choose at least one subject.";
    }
    if (!child.name.trim()) {
      errors[`${child.id}.name`] = "Please tell us your child's name.";
    }
    if (service !== "daycare" && !/^\d{1,2}$/.test(child.age.trim())) {
      errors[`${child.id}.age`] = "Please enter an age in years, for example 7.";
    }
  });

  return errors;
}

export function validateContact(contact: ContactEntry): Errors {
  const errors: Errors = {};
  const email = contact.email.trim();
  const phone = contact.phone.trim();

  if (!contact.parentName.trim()) {
    errors["contact.parentName"] = "Please tell us your name.";
  }

  if (!email && contact.method === "email") {
    errors["contact.email"] = "Please add your email so we can reach you.";
  } else if (email && !emailPattern.test(email)) {
    errors["contact.email"] = "That email doesn't look quite right.";
  }

  if (!phone && contact.method !== "email") {
    errors["contact.phone"] = "Please add your phone number so we can reach you.";
  } else if (phone && phoneDigits(phone).length < 10) {
    errors["contact.phone"] = "Please include the full number with area code.";
  }

  return errors;
}

export function packageDescription(lesson: LessonService, sessions: SessionChoice): string {
  const pkg = lesson.packages.find((item) => String(item.sessions) === sessions);
  if (!pkg) return "Not chosen yet (we'll help you decide)";
  return `${pkg.label} – ${formatPrice(pkg.price)}${pkg.savings ? ` (${pkg.savings})` : ""}`;
}

export function methodLabel(method: ContactMethod) {
  return contactMethods.find((item) => item.value === method)?.label ?? method;
}

export function describeChild(service: SignupService, child: ChildEntry, index: number): string {
  const lines = [`Child ${index + 1}: ${child.name.trim()}`];
  const lesson = signupServices[service].lesson;

  if (service === "daycare") {
    lines.push(`Program: ${child.program}`);
  } else {
    lines.push(`Age: ${child.age.trim()}`);
  }

  if (service === "private-tutoring") {
    lines.push(`Subjects: ${child.subjects.join(", ")}`);
  }

  if (lesson) {
    if (child.grade.trim()) lines.push(`Grade level: ${child.grade.trim()}`);
    const { works, avoid } = summarizeAvailability(child.availability);
    if (works.length) lines.push(...works.map((line) => `Works – ${line}`));
    if (avoid.length) lines.push(...avoid.map((line) => `Does NOT work – ${line}`));
    if (service === "private-tutoring" && child.split.trim()) lines.push(`Hours split: ${child.split.trim()}`);
    lines.push(`Session package: ${packageDescription(lesson, child.sessions)}`);
  }

  return lines.join("\n");
}

export function buildSubmission(
  service: SignupService,
  children: ChildEntry[],
  contact: ContactEntry,
): Record<string, string> {
  const names = children.map((child) => child.name.trim()).join(", ");

  return {
    subject: `New ${signupServices[service].name} sign-up – ${names}`,
    service: signupServices[service].name,
    parent_name: contact.parentName.trim(),
    email: contact.email.trim(),
    phone: contact.phone.trim(),
    preferred_contact: methodLabel(contact.method),
    children_count: String(children.length),
    children: children.map((child, index) => describeChild(service, child, index)).join("\n\n"),
    notes: contact.notes.trim(),
    "bot-field": "",
  };
}

export const daycareProgramOptions = montessoriPrograms.map((program) => ({
  value: program.name,
  title: program.name,
  subtitle: program.ages,
}));
