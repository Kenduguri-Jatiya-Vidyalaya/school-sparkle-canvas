import { useEffect, useRef, useState } from "react";
import { Flag, Award, Users, Building, GraduationCap, Star } from "lucide-react";

interface MilestoneProps {
  year: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLeft: boolean;
  delay: number;
}

const Milestone = ({ year, icon, title, description, isLeft, delay }: MilestoneProps) => {
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
      className={`relative flex items-center gap-4 ${isLeft ? "md:flex-row-reverse" : ""} transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
        <div className={`bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow ${isLeft ? "md:ml-auto" : ""} max-w-md`}>
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-3">
            {year}
          </span>
          <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Center Icon */}
      <div className="relative z-10 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
        {icon}
      </div>

      {/* Spacer for layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
};

export const SchoolTimeline = () => {
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

  const milestones = [
    {
      year: "2000",
      icon: <Flag className="w-6 h-6 text-primary-foreground" />,
      title: "School Established",
      description: "Kenduguri Jatiya Vidyalaya was founded with a vision to provide quality education in rural Assam.",
    },
    {
      year: "2005",
      icon: <Building className="w-6 h-6 text-primary-foreground" />,
      title: "SEBA Affiliation",
      description: "Received official affiliation from Board of Secondary Education, Assam.",
    },
    {
      year: "2010",
      icon: <Users className="w-6 h-6 text-primary-foreground" />,
      title: "Campus Expansion",
      description: "New classrooms, library, and science laboratory added to accommodate growing student body.",
    },
    {
      year: "2015",
      icon: <Award className="w-6 h-6 text-primary-foreground" />,
      title: "First 100% Pass Rate",
      description: "Achieved 100% pass rate in HSLC examination for the first time.",
    },
    {
      year: "2020",
      icon: <GraduationCap className="w-6 h-6 text-primary-foreground" />,
      title: "Higher Secondary Added",
      description: "Expanded to include Higher Secondary education with Science, Commerce, and Arts streams.",
    },
    {
      year: "2025",
      icon: <Star className="w-6 h-6 text-primary-foreground" />,
      title: "Silver Jubilee",
      description: "Celebrating 25 years of excellence in education and community service.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            25 Years of
            <span className="text-primary"> Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Key milestones in our journey from a small school to a premier educational institution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 transform md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <Milestone
                key={milestone.year}
                {...milestone}
                isLeft={index % 2 === 0}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
