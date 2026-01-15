import { useEffect, useRef, useState } from "react";
import { FlaskConical, Calculator, Palette, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StreamCardProps {
  icon: React.ReactNode;
  stream: string;
  color: string;
  subjects: string[];
  description: string;
  delay: number;
}

const StreamCard = ({ icon, stream, color, subjects, description, delay }: StreamCardProps) => {
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
      className={`group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={`h-2 ${color}`} />
      <CardHeader className="pb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <CardTitle className="font-serif text-xl">{stream}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Core Subjects:</p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const AcademicPrograms = () => {
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

  const streams = [
    {
      icon: <FlaskConical className="w-7 h-7 text-white" />,
      stream: "Science Stream",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      description: "For aspiring doctors, engineers, and scientists",
    },
    {
      icon: <Palette className="w-7 h-7 text-white" />,
      stream: "Arts Stream",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      subjects: ["Education", "Political Science", "Economics", "Assamese","Sociology", "History","Geography"],
      description: "Exploring humanities and social sciences",
    },
  ];

  const generalSubjects = [
    "English",
    "Assamese",
  ];

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Academic Programs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive
            <span className="text-primary"> Curriculum</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our SEBA-affiliated curriculum offers diverse streams to match every student's aspirations and career goals.
          </p>
        </div>

        {/* Stream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {streams.map((stream, index) => (
            <StreamCard
              key={stream.stream}
              {...stream}
              delay={index * 150}
            />
          ))}
        </div>

        {/* General Subjects */}
        <div className={`bg-muted/50 rounded-2xl p-8 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Core Foundation Subjects</h3>
              <p className="text-sm text-muted-foreground">Common across all streams</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {generalSubjects.map((subject) => (
              <span
                key={subject}
                className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground hover:border-primary transition-colors"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-xl px-6 py-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-medium text-foreground">Admissions Open for 2025-26</p>
              <p className="text-sm text-muted-foreground">Limited seats available. Apply now!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
