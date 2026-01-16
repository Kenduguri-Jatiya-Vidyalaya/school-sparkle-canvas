import { useEffect, useState } from "react";
import { ChevronDown, Users, Award, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon, value, label, delay }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`glass-effect rounded-xl p-4 md:p-6 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-primary/80">{label}</div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary-dark/90" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gold/20 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-sm text-white font-medium">25 Years of Excellence</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Kenduguri Jatiya
            <span className="block mt-2">Vidyalaya</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Nurturing minds, building futures. A premier institution committed to academic excellence and holistic development in the heart of Assam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a href="#student-journey">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                Explore Programs
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard
              icon={<Calendar className="w-6 h-6 text-primary" />}
              value="25+"
              label="Years of Excellence"
              delay={600}
            />
            <StatCard
              icon={<Users className="w-6 h-6 text-primary" />}
              value="500+"
              label="Students Enrolled"
              delay={800}
            />
            <StatCard
              icon={<BookOpen className="w-6 h-6 text-primary" />}
              value="24"
              label="Expert Teachers"
              delay={1000}
            />
            <StatCard
              icon={<Award className="w-6 h-6 text-primary" />}
              value="100%"
              label="Pass Rate"
              delay={1200}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
