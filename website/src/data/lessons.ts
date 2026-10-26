export type LessonPackage = {
  sessions: 1 | 5 | 10;
  label: string;
  price: number;
  savings: string | null;
};

export type LessonService = {
  id: "piano-lessons" | "private-tutoring";
  name: string;
  short: string;
  rate: number;
  packages: LessonPackage[];
  subjects?: string[];
};

export const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export const perSession = (pkg: LessonPackage) => pkg.price / pkg.sessions;

export const piano: LessonService = {
  id: "piano-lessons",
  name: "Piano Lessons",
  short: "One-on-one lessons that build confidence, one note at a time.",
  rate: 49.99,
  packages: [
    { sessions: 1, label: "Single session", price: 49.99, savings: null },
    { sessions: 5, label: "5 sessions", price: 224.99, savings: "Save 10%" },
    { sessions: 10, label: "10 sessions", price: 399.99, savings: "Save 20%" },
  ],
};

export const tutoring: LessonService = {
  id: "private-tutoring",
  name: "Private Tutoring",
  short: "Focused one-on-one support in the subjects your child needs most.",
  rate: 39.99,
  packages: [
    { sessions: 1, label: "Single session", price: 39.99, savings: null },
    { sessions: 5, label: "5 sessions", price: 179.99, savings: "Save 10%" },
    { sessions: 10, label: "10 sessions", price: 319.99, savings: "Save 20%" },
  ],
  subjects: ["English", "Math", "French"],
};

export const lessonServices = { piano, tutoring };
