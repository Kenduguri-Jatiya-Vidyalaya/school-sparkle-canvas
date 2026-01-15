import { useEffect, useRef, useState } from "react";
import { Baby, BookOpen, GraduationCap, Briefcase, Rocket } from "lucide-react";

interface JourneyStepProps {
  icon: React.ReactNode;
  stage: string;
  grades: string;
  description: string;
  color: string;
  delay: number;
  isActive: boolean;
}

const JourneyStep = ({ icon, stage, grades, description, color, delay, isActive }: JourneyStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Connector Line */}
      <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 z-0" />
      
      {/* Step Circle */}
      <div
        className={`relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 ${color}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-foreground text-lg">{stage}</h3>
        <p className="text-primary font-medium text-sm mb-1">{grades}</p>
        <p className="text-muted-foreground text-xs max-w-[120px]">{description}</p>
      </div>
    </div>
  );
};

export const StudentJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      icon: <Baby className="w-10 h-10 text-white" />,
      stage: "Pre-Primary",
      grades: "Nursery - UKG",
      description: "Early learning foundation",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-white" />,
      stage: "Primary",
      grades: "Classes 1-5",
      description: "Building core skills",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-white" />,
      stage: "Middle",
      grades: "Classes 6-8",
      description: "Exploring subjects",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      stage: "Secondary",
      grades: "Classes 9-10",
      description: "Board examination prep",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      stage: "Higher Secondary",
      grades: "Classes 11-12",
      description: "Career specialization",
      color: "bg-gradient-to-br from-primary to-primary-dark",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Student Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to
            <span className="text-primary"> Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From early childhood to higher secondary, we guide students through every milestone of their educational journey.
          </p>
        </div>

        {/* Journey Path */}
        <div className="relative">
          {/* Background Path Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Journey Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {journeySteps.map((step, index) => (
              <JourneyStep
                key={step.stage}
                {...step}
                delay={index * 150}
                isActive={false}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4 shadow-lg">
            <div className="text-center border-r border-border pr-4">
              <p className="text-2xl font-bold text-primary">12+</p>
              <p className="text-xs text-muted-foreground">Years of Education</p>
            </div>
            <div className="text-center border-r border-border pr-4">
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-xs text-muted-foreground">Streams Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
