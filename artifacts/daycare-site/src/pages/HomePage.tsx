import { BookOpen, Heart, Music, Palette, Star, Sun } from "lucide-react";
import CTASection from "@/components/CTASection";
import ProgramCard from "@/components/ProgramCard";

export default function HomePage() {
  const programs = [
    {
      title: "Toddler Exploration",
      ageGroup: "18 Months (1.5 years) – 30 months (2.5 years)",
      description: "A safe, sensory-rich environment where toddlers develop motor skills, early language, and social bonds through guided play.",
      icon: Sun,
      color: "bg-secondary/20 text-secondary-foreground"
    },
    {
      title: "Preschool Discovery",
      ageGroup: "30 months (2.5 years) – 6 Years",
      description: "Fostering independence and curiosity with structured activities in arts, bilingual communication, and basic problem-solving.",
      icon: Palette,
      color: "bg-accent/20 text-accent"
    },
    /*{
      title: "Pre-K Readiness",
      ageGroup: "4 – 5 Years",
      description: "Preparing little minds for school with foundational literacy, numeracy, and cooperative projects in English and French.",
      icon: BookOpen,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "After-School Care",
      ageGroup: "5 - 6 Years",
      description: "A relaxing yet engaging space for older children to unwind, complete homework, and enjoy creative group activities.",
      icon: Music,
      color: "bg-orange-500/10 text-orange-500"
  }*/
  ];

  const testimonials = [
    {
      text: "The educators are so warm and attentive. My daughter runs to the door every morning! It truly feels like a second family.",
      author: "Sarah M.",
      role: "Parent of a 3-year-old"
    },
    {
      text: "We love the bilingual approach. Our son is picking up French naturally through play, and his confidence has blossomed.",
      author: "David L.",
      role: "Parent of a 4-year-old"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 px-4 overflow-hidden bg-[#EDF5E1]">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary font-bold text-sm">
              <Star size={16} className="text-secondary" fill="currentColor" />
              <span>Bilingual Montessori Style Daycare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1]">
              Where Little Minds <span className="text-primary">Bloom.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Welcome to Little Genius Island, a magical, bilingual safe haven where children learn, grow, and discover the world through play. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-bold text-lg text-center transition-colors shadow-lg shadow-primary/20">
                Schedule a Tour
              </a>
              <a href="/programs" className="bg-white text-primary border border-primary/20 hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg text-center transition-colors">
                Explore Programs
              </a>
            </div>
          </div>
          
          {/* Hero Visual / Shapes */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
            {/* Abstract organic shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-secondary/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_20s_linear_infinite] blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] animate-[spin_15s_linear_infinite_reverse] blur-lg"></div>
            
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-2xl p-8 flex flex-col items-center justify-center text-center gap-4 relative border-[8px] border-white ring-4 ring-primary/10">
                 <Heart className="w-16 h-16 text-accent" fill="currentColor" />
                 <h3 className="font-serif text-2xl font-bold text-primary">Le petit génie</h3>
                 <p className="text-sm font-bold text-muted-foreground">Nurturing curiosity every day</p>
                 
                 {/* Decorative mini shapes */}
                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full border-4 border-[#EDF5E1]"></div>
                 <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary rounded-2xl rotate-12 border-4 border-[#EDF5E1]"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Philosophy</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Little Genius Island, we believe every child is born curious. Our bilingual curriculum 
            blends structured learning with child-led play in a warm, organic environment. We focus on 
            fostering confidence, empathy, and a lifelong love of learning—like a warm hug from a trusted teacher.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored experiences designed to support your child's developmental milestones at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <ProgramCard key={idx} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col justify-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by Parents</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Hear from the families who trust us with their little ones every day.
            </p>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-secondary" fill="currentColor" />)}
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-card p-8 rounded-[2rem] shadow-sm border border-border">
                <p className="text-lg text-foreground italic mb-6">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                    {test.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{test.author}</p>
                    <p className="text-sm font-semibold text-muted-foreground">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}