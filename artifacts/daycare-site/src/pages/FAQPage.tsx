import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export default function FAQPage() {
  const faqs = [
    {
      question: "What age groups do you accept?",
      answer: "We welcome children from 18 months (toddlers) up to 5 years of age (pre-K). We also offer an after-school program for children up to 12 years old."
    },
    {
      question: "How does the bilingual program work?",
      answer: "Our curriculum integrates English and French seamlessly throughout the day. Educators use both languages during circle time, singing, structured activities, and free play, allowing children to absorb vocabulary naturally in context."
    },
    {
      question: "Are meals and snacks provided?",
      answer: "Yes! We provide a nutritious, chef-prepared hot lunch and two healthy snacks (morning and afternoon) daily. All meals are nut-free, and we happily accommodate other dietary restrictions and allergies."
    },
    {
      question: "How long is your waitlist?",
      answer: "Waitlist times vary depending on the age group and time of year. On average, the wait is 3 to 6 months. We highly recommend joining the waitlist as early as possible."
    },
    {
      question: "What is your sick child policy?",
      answer: "To protect all children and staff, kids exhibiting a fever, vomiting, diarrhea, or contagious symptoms must stay home. They must be symptom-free for 24 hours (or 48 hours for certain illnesses) without medication before returning."
    },
    {
      question: "How much outdoor time do children get?",
      answer: "We believe fresh air is vital! Weather permitting, children spend at least two hours outside every day in our secure, age-appropriate playground areas, engaging in gross motor play and nature exploration."
    },
    {
      question: "How do you handle drop-off and pick-up security?",
      answer: "Security is our top priority. Only pre-authorized individuals with photo ID may pick up a child. Our facility features secure fob-access entry, and all visitors must sign in at the front desk."
    },
    {
      question: "What are your fees and payment options?",
      answer: "Fees vary by age group. We require a registration fee upon enrollment. Tuition can be paid monthly via pre-authorized debit or e-transfer. Please contact us directly for our current fee schedule."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about our programs, policies, and daily routines.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
          
          <div className="mt-12 text-center bg-muted/30 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're here to help! Contact our administrative team for more information.
            </p>
            <a href="/contact" className="inline-block bg-white text-primary border border-border shadow-sm font-bold px-6 py-3 rounded-full hover:bg-muted/50 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}