import { useEffect, useRef, useState } from "react";
import {
  Beaker,
  BookOpen,
  MonitorPlay,
  Trophy,
  Wifi,
  Users,
  Droplets,
  ShieldCheck,
} from "lucide-react";

interface FacilityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FacilityItem = ({ icon, title, description, delay }: FacilityItemProps) => {
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
      className={`group text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <div className="text-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export const Facilities = () => {
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

  const facilities = [
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Science Laboratory",
      description: "Well-equipped physics and chemistry labs for practical learning",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Library",
      description: "Extensive collection of books, journals and reference materials",
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Smart Classrooms",
      description: "Digital learning with projectors and interactive boards",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sports Ground",
      description: "Large playground for athletics and outdoor sports",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Computer Lab",
      description: "Modern computers with internet connectivity",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Assembly Hall",
      description: "Spacious hall for events and gatherings",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Clean Water",
      description: "Safe drinking water facility for all students",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safe Campus",
      description: "Secure environment with proper safety measures",
    },
  ];

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Infrastructure
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            World-Class
            <span className="text-primary"> Facilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our campus is equipped with modern amenities to provide the best learning environment for students.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <FacilityItem
              key={facility.title}
              {...facility}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
