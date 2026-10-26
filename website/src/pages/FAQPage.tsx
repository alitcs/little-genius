import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import PageHeader from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Motion";
import { formatPrice, piano, tutoring } from "@/data/lessons";
import { site } from "@/data/site";

const faqs = [
  {
    question: "What ages do you welcome?",
    answer:
      "Our Montessori programs cover children from 18 months to 6 years: Toddler Exploration (18–30 months), Preschool Discovery (30 months–5 years) and Kindergarten Foundations (5–6 years).",
  },
  {
    question: "Is the program bilingual?",
    answer: "Yes. Bilingual communication in English and French is part of our preschool and kindergarten programs.",
  },
  {
    question: "What are the meal and snack times?",
    answer: "Morning snack is 8:30–9:00, lunch is 11:30–12:00 and afternoon snack is 2:30–3:00.",
  },
  {
    question: "How much outdoor time do children get?",
    answer:
      "One hour in the morning and one hour in the afternoon. Toddlers go out at 9–10 am and 2–3 pm, preschool at 10–11 am and 3–4 pm, and kindergarten at 11 am–12 pm and 4–5 pm.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Choose a service and fill out the short online form. Our team will contact you by your preferred method with details about when you can come in to start. The contract and payment are completed in person.",
  },
  {
    question: "Can I pay online?",
    answer: "Not yet. Contract signing and payment are both done in person.",
  },
  {
    question: "What do piano lessons and tutoring cost?",
    answer: `Piano is ${formatPrice(piano.rate)} per hour and tutoring is ${formatPrice(tutoring.rate)} per hour. Packages of 5 sessions save 10% and packages of 10 save 20%.`,
  },
  {
    question: "Which tutoring subjects are offered?",
    answer: `${tutoring.subjects?.join(", ").replace(/, ([^,]*)$/, " and $1")}.`,
  },
  {
    question: "Can I sign up more than one child?",
    answer: "Yes. Each sign-up form lets you add several children.",
  },
  {
    question: "What are your hours?",
    answer:
      "Montessori daycare runs Monday to Friday, 7:00 am to 6:00 pm. Piano lessons and tutoring run Monday to Friday, 7:00 am to 6:00 pm, and Saturday and Sunday, 9:00 am to 6:00 pm.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <SEO
        title="FAQ"
        description="Answers about Little Genius Island's Montessori programs, meals, outdoor play, sign-up, piano lessons and tutoring in Newmarket."
        path="/faq"
      />
      <PageHeader eyebrow="FAQ" title="Questions, *answered*." lead="Everything you need to know before you sign up." />
      <section className="shell pb-24 sm:pb-32">
        <Reveal className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full border-t border-forest-900/10">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-b border-forest-900/10">
                <AccordionTrigger className="py-6 text-left font-serif text-xl font-normal text-ink hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-7 text-ink-soft">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 text-ink-soft">
            Still wondering? Email{" "}
            <a href={site.emailHref} className="font-semibold text-forest-700 underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
