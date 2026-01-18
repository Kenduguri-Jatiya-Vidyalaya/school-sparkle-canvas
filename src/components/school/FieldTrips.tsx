import { useEffect, useRef, useState } from "react";
import { MapPin, Camera, Users, Calendar } from "lucide-react";

interface TripCardProps {
  image: string;
  title: string;
  location: string;
  year: string;
  delay: number;
}

const TripCard = ({ image, title, location, year, delay }: TripCardProps) => {
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
          <span className="mx-1">•</span>
          <Calendar className="w-4 h-4" />
          <span>{year}</span>
        </div>
        <h3 className="font-semibold text-white text-lg">{title}</h3>
      </div>
      <div className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Camera className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export const FieldTrips = () => {
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

  const trips = [
    {
      image: "https://i.ibb.co/1f73051z/siv-visit.png",
      title: "Sivsagar Visit",
      location: "Sivsagar, Assam",
      year: "2019",
    },
    {
      image: "https://i.ibb.co/xqcPHMN3/siv-visit-koyal.png",
      title: "Sivsagar Visit",
      location: "Sivsagar, Assam",
      year: "2018",
    },
    {
      image: "https://i.ibb.co/spHqSndk/FB-IMG-1768628108070.jpg",
      title: "Tezpur Excursion",
      location: "Tezpur,Assam",
      year: "2024",
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Experiential Learning
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Field Trips &
            <span className="text-primary"> Excursions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learning beyond the classroom through educational trips to historical sites, wildlife sanctuaries, and cultural destinations.
          </p>
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Destinations</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <Users className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xl font-bold text-foreground">400+</p>
              <p className="text-sm text-muted-foreground">Students Participated</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <Calendar className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xl font-bold text-foreground">Annual</p>
              <p className="text-sm text-muted-foreground">Trips Organized</p>
            </div>
          </div>
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <TripCard
              key={trip.title}
              {...trip}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
