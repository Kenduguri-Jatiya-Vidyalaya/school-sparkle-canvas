import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

export const HsPrincipalMessage = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`grid md:grid-cols-5 gap-8 md:gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Principal Image */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl" />
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="https://i.ibb.co/HTRrTxTx/dipalima.jpg"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:col-span-3">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                HS Principal's Message
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Nurturing Minds, Shaping Futures
              </h2>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10" />
                <blockquote className="text-muted-foreground text-lg leading-relaxed pl-4 border-l-4 border-primary">
                  <p className="mb-4">
                    Education is not merely the acquisition of academic excellence; it is the holistic development of a student’s intellect, ethics, and social responsibility. At Kenduguri Jatiya Vidyalaya, we strive to create an environment that inspires curiosity, critical thinking, creativity, and discipline among our learners.
                  </p>
                  <p>
                    "Rooted in the rich cultural heritage of Assam and guided by modern educational practices, our dedicated faculty works tirelessly to mentor students academically and morally. We emphasize integrity, respect, hard work, and service to society, ensuring that our students are well-prepared to face global challenges while staying connected to their roots."
                  </p>
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-0.5 bg-primary" />
                <div>
                  <p className="font-serif font-semibold text-foreground">Dipalima Duwarah Chaliha , HS Principal</p>
                  <p className="text-sm text-muted-foreground">Kenduguri Jatiya Vidyalaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
