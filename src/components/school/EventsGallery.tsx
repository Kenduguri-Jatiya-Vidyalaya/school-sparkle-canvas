import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  category: string;
  delay: number;
}

const EventCard = ({ image, title, date, category, delay }: EventCardProps) => {
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
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2">
          {category}
        </span>
        <h3 className="font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export const EventsGallery = () => {
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

  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Annual Day Celebration",
      date: "December 2024",
      category: "Annual",
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Independence Day",
      date: "August 2024",
      category: "National",
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Bihu Celebration",
      date: "April 2024",
      category: "Cultural",
    },
    {
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Sports Day",
      date: "January 2024",
      category: "Sports",
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Science Exhibition",
      date: "November 2024",
      category: "Academic",
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Teacher's Day",
      date: "September 2024",
      category: "Cultural",
    },
  ];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 md:py-28 bg-primary/5"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Celebrations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Annual Events
            <span className="text-primary"> Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Glimpses of our vibrant school life through various celebrations, competitions, and cultural programs.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              {...event}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
