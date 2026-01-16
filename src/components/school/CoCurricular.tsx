import { useEffect, useRef, useState } from "react";
import { Music, Palette, Trophy, BookOpen, Users, Leaf } from "lucide-react";

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  activities: string[];
  color: string;
  delay: number;
}

const ActivityCard = ({ icon, title, activities, color, delay }: ActivityCardProps) => {
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
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background decoration */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
      
      <div className="relative">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <h3 className="font-semibold text-foreground text-lg mb-3">{title}</h3>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${color}`} />
              <span className="text-sm text-muted-foreground">{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CoCurricular = () => {
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

  const activityCategories = [
    {
      icon: <Music className="w-7 h-7 text-white" />,
      title: "Music & Dance",
      activities: ["Bihu Dance", "Sattriya Dance", "Classical Music", "Folk Songs", "Drama Club"],
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      icon: <Palette className="w-7 h-7 text-white" />,
      title: "Art & Craft",
      activities: ["Drawing", "Painting", "Handicrafts", "Pottery"],
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-white" />,
      title: "Literary",
      activities: ["Debate", "Quiz", "Essay Writing", "Recitation"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: <Leaf className="w-7 h-7 text-white" />,
      title: "Environment",
      activities: ["Eco Club", "Tree Plantation", "Cleanliness Drives", "Nature Walks"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Beyond Academics
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Co-Curricular
            <span className="text-primary"> Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Holistic development through diverse extracurricular programs that nurture creativity, leadership, and teamwork.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityCategories.map((category, index) => (
            <ActivityCard
              key={category.title}
              {...category}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
