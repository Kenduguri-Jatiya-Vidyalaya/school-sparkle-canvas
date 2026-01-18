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
    image: "https://i.ibb.co/dwck2W0H/IMG-20260118-WA0002.jpg",
    title: "Silver Jubilee Closing Ceremony",
    date: "January 2026",
    category: "Celebration",
  },
  {
    image: "https://i.ibb.co/8g9NrPVD/IMG-20260118-WA0249.jpg",
    title: "Silver Jubilee Closing Ceremony",
    date: "January 2026",
    category: "Celebration",
  },
  {
    image: "https://i.ibb.co/XcdSfbx/FB-IMG-1768564865601.jpg",
    title: "Children's Day Celebration",
    date: "November 2025",
    category: "Cultural",
  },
  {
    image: "https://i.ibb.co/s9NTC8GW/FB-IMG-1768564885744.jpg",
    title: "Tribute to Zubeen Daa",
    date: "September 2025",
    category: "Cultural",
  },
  {
    image: "https://i.ibb.co/mVBqzhHj/FB-IMG-1768564928043.jpg",
    title: "Quiz Competition",
    date: "August 2025",
    category: "Competition",
  },
  {
    image: "https://i.ibb.co/zWYGHVT3/FB-IMG-1768565014555.jpg",
    title: "Spritual Awareness Camp",
    date: "April 2025",
    category: "Awareness",
  },
  {
    image: "https://i.ibb.co/V6WMzpP/silver-jubilee-celebration.png",
    title: "Silver Jubilee Celebration",
    date: "January 2025",
    category: "Celebration",
  },
  {
    image: "https://i.ibb.co/n49ZgyY/FB-IMG-1768726662224.jpg",
    title: "Drama Workshop",
    date: "July 2024",
    category: "Cultural",
  },
  {
    image: "https://i.ibb.co/yn6mdGjn/FB-IMG-1768565329821.jpg",
    title: "Magh Bihu",
    date: "January 2024",
    category: "Festival",
  },
  {
    image: "https://i.ibb.co/WNH4ZXm3/FB-IMG-1768565418438.jpg",
    title: "Singing Competition",
    date: "June 2022",
    category: "Cultural",
  },
  {
    image: "https://i.ibb.co/cKz5Frkr/FB-IMG-1768565432586.jpga",
    title: "Bohag Bihu",
    date: "April 2022",
    category: "Festival",
  },
  {
    image: "https://i.ibb.co/SXD1rVmt/FB-IMG-1768565619027.jpg",
    title: "Independence Day",
    date: "August 2021",
    category: "National",
  },
  {
    image: "https://scontent.fgau3-5.fna.fbcdn.net/v/t39.30808-6/476450578_1217007297097186_9028503561146282283_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=B6qasqWDrycQ7kNvwHKS9qw&_nc_oc=AdlZL15p9mZUOFyMuPmza25KQsSf2422j6BlBNfbf4EcufoVncg4alKofzNFE04qMMisUwKfb7gzLGMst3GmWU2F&_nc_zt=23&_nc_ht=scontent.fgau3-5.fna&_nc_gid=RUd9ovUISEhZG74WeoFANA&oh=00_AfoeaWYopkgodM2j1yH8tLpeDw1JOQvT9_Mk2_Wg3yc31Q&oe=6972617F",
    title: "Annual Day",
    date: "January 2021",
    category: "Annual",
  },
  {
    image: "https://i.ibb.co/FLM75SPv/FB-IMG-1768565732951.jpg",
    title: "Fency Dress Competition",
    date: "February 2020",
    category: "Competition",
  },
  {
    image: "https://i.ibb.co/chPmWy1P/Whats-App-Image-2026-01-18-at-2-41-57-PM.jpg",
    title: "Dance Competition",
    date: "February 2020",
    category: "Cultural",
  },
  {
    image: "https://i.ibb.co/RkXFKSyP/FB-IMG-1768565674971.jpg",
    title: "National Science Day",
    date: "February 2020",
    category: "National",
  },
  {
    image: "https://i.ibb.co/tMBZmGsQ/FB-IMG-1768565863340.jpg",
    title: "Health Camp",
    date: "October 2019",
    category: "Awareness",
  },
  {
    image: "https://i.ibb.co/dJ5jyGS8/FB-IMG-1768565945052.jpg",
    title: "Bhaona",
    date: "January 2019",
    category: "Cultural",
  }
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
