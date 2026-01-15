import { useEffect, useRef, useState } from "react";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementCardProps {
  image: string;
  name: string;
  achievement: string;
  category: string;
  year: string;
  delay: number;
}

const AchievementCard = ({ image, name, achievement, category, year, delay }: AchievementCardProps) => {
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

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "academic":
        return "bg-blue-500";
      case "sports":
        return "bg-green-500";
      case "arts":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <Card
      ref={ref}
      className={`group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(category)}`}>
          {category}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-white/80 text-sm">{year}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Trophy className="w-5 h-5 text-gold" />
          </div>
          <p className="text-muted-foreground text-sm">{achievement}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const Achievements = () => {
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

  const achievements = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Academic Excellence",
      achievement: "100% pass rate in HSLC and HS examinations with distinction holders",
      category: "Academic",
      year: "2024",
    },
    {
      image: "https://images.unsplash.com/photo-1461896836934- voices-of-young-people?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "State Level Sports",
      achievement: "Winners in district and state level athletic competitions",
      category: "Sports",
      year: "2023",
    },
    {
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Cultural Champions",
      achievement: "First prize in Bihu dance and traditional Assamese music competitions",
      category: "Arts",
      year: "2024",
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      name: "Science Olympiad",
      achievement: "District level winners in Science and Mathematics Olympiad",
      category: "Academic",
      year: "2023",
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
            Pride of KJV
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Achievements &
            <span className="text-primary"> Accolades</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating the success stories of our talented students who have brought laurels to the institution.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`flex flex-wrap justify-center gap-8 mb-16 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-gold" />
            <div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Awards Won</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Medal className="w-8 h-8 text-primary" />
            <div>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-accent" />
            <div>
              <p className="text-2xl font-bold text-foreground">25+</p>
              <p className="text-sm text-muted-foreground">Star Students</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Distinctions</p>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.name}
              {...achievement}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
