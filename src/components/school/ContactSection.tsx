import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Kenduguri, Jorhat District, Assam, India",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 7002112276",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "kendugurijatiyabidyalaya2000@gmail.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Office Hours",
      content: "Mon - Sat: 8:00 AM - 4:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact
            <span className="text-primary"> Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about admissions or want to learn more? We'd love to hear from you.
          </p>
        </div>

          {/* Contact Info & Map */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-primary">
                    {info.icon}
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{info.title}</h4>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-2xl h-64 flex items-center justify-center overflow-hidden">
              <div className="text-center w-full h-full">
                {/* <MapPin className="w-12 h-12 text-primary mx-auto mb-2" /> */}
                {/* <p className="text-muted-foreground">Kenduguri, Golaghat, Assam</p> */}
                {/* <p className="text-sm text-muted-foreground mt-1">Interactive map coming soon</p> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.227490605319!2d94.23647207543456!3d26.769017476733197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746dd2e02dcdca7%3A0xddddd2a58e386c3d!2sKenduguri%20Jatiya%20Vidyalaya!5e0!3m2!1sen!2sin!4v1768545968018!5m2!1sen!2sin" className="w-full h-full border-0"></iframe>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Facilities", href: "#facilities" },
    { label: "Achievements", href: "#achievements" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Kenduguri Jatiya Vidyalaya</h3>
            <p className="text-background/70 mb-6 max-w-md">
              Committed to providing quality education and nurturing young minds for a brighter future since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Kenduguri, Jorhat District, Assam, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 7002112276</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>kendugurijatiyabidyalaya2000@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 Kenduguri Jatiya Vidyalaya. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Affiliated to SEBA, Assam
          </p>
        </div>
      </div>
    </footer>
  );
};
