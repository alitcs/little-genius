export type MontessoriProgram = {
  id: string;
  name: string;
  ages: string;
  agesInYears: string;
  description: string;
  focus: string[];
  outdoor: { morning: string; afternoon: string };
};

export const montessoriPrograms: MontessoriProgram[] = [
  {
    id: "toddler-exploration",
    name: "Toddler Exploration",
    ages: "18 – 30 months",
    agesInYears: "1½ – 2½ years",
    description:
      "A safe, sensory-rich environment where toddlers develop motor skills, early language, and social bonds through guided play.",
    focus: ["Motor skills", "Early language", "Social bonds"],
    outdoor: { morning: "9 – 10 am", afternoon: "2 – 3 pm" },
  },
  {
    id: "preschool-discovery",
    name: "Preschool Discovery",
    ages: "30 months – 5 years",
    agesInYears: "2½ – 5 years",
    description:
      "Fostering independence and curiosity with structured activities in arts, bilingual communication, and basic problem-solving.",
    focus: ["Arts", "Bilingual communication", "Problem-solving"],
    outdoor: { morning: "10 – 11 am", afternoon: "3 – 4 pm" },
  },
  {
    id: "kindergarten-foundations",
    name: "Kindergarten Foundations",
    ages: "5 – 6 years",
    agesInYears: "5 – 6 years",
    description:
      "Building confidence, independence, and school-readiness through guided learning, creativity, bilingual communication, and early academic skills.",
    focus: ["School-readiness", "Creativity", "Early academics"],
    outdoor: { morning: "11 am – 12 pm", afternoon: "4 – 5 pm" },
  },
];

export const meals = [
  { name: "Morning snack", time: "8:30 – 9:00 am" },
  { name: "Lunch", time: "11:30 am – 12:00 pm" },
  { name: "Afternoon snack", time: "2:30 – 3:00 pm" },
];
