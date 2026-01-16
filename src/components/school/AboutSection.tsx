import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Award, MapPin, Building, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FactCard = ({ icon, title, description, delay }: FactCardProps) => {
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
    <Card
      ref={ref}
      className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export const AboutSection = () => {
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

  const facts = [
    {
      icon: <Building className="w-7 h-7 text-primary" />,
      title: "SEBA Affiliated",
      description: "Recognized by Board of Secondary Education, Assam",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-primary" />,
      title: "Assamese Medium",
      description: "Preserving culture through mother tongue education",
    },
    {
      icon: <Users className="w-7 h-7 text-primary" />,
      title: "Co-Educational",
      description: "Inclusive learning environment for all students",
    },
    {
      icon: <MapPin className="w-7 h-7 text-primary" />,
      title: "Rural Excellence",
      description: "Serving Kenduguri and surrounding villages",
    },
    {
      icon: <Award className="w-7 h-7 text-primary" />,
      title: "Quality Education",
      description: "Commitment to academic excellence since 2000",
    },
    {
      icon: <Calendar className="w-7 h-7 text-primary" />,
      title: "25+ Years Legacy",
      description: "A quarter century of shaping futures",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nurturing Excellence in
            <span className="text-primary"> Rural Assam</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kenduguri Jatiya Vidyalaya was established in 2000 as a co-educational private school under the Board of Secondary Education, Assam. We are committed to providing quality education while preserving our rich cultural heritage.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className={`relative mb-16 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <span className="text-xl md:text-2xl font-bold text-primary-foreground">2000</span>
              </div>
              <span className="text-sm text-muted-foreground">Founded</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full max-w-xs" />
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <span className="text-xl md:text-2xl font-bold text-accent-foreground">25+</span>
              </div>
              <span className="text-sm text-muted-foreground">Years</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full max-w-xs" />
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <span className="text-xl md:text-2xl font-bold text-primary-foreground">∞</span>
              </div>
              <span className="text-sm text-muted-foreground">Future</span>
            </div>
          </div>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <FactCard
              key={fact.title}
              icon={fact.icon}
              title={fact.title}
              description={fact.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
