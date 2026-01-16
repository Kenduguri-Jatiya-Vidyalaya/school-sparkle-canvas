import { Navbar } from "@/components/school/Navbar";
import { HeroSection } from "@/components/school/HeroSection";
import { AboutSection } from "@/components/school/AboutSection";
import { PrincipalMessage } from "@/components/school/PrincipalMessage";
import { StudentJourney } from "@/components/school/StudentJourney";
/*import { Achievements } from "@/components/school/Achievements";*/
import { AcademicPrograms } from "@/components/school/AcademicPrograms";
/*import { Facilities } from "@/components/school/Facilities";*/
import { CoCurricular } from "@/components/school/CoCurricular";
import { FieldTrips } from "@/components/school/FieldTrips";
import { EventsGallery } from "@/components/school/EventsGallery";
import { SchoolTimeline } from "@/components/school/SchoolTimeline";
import { ContactSection, Footer } from "@/components/school/ContactSection";
import { HsPrincipalMessage } from "@/components/school/HSPrincipalMessage";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PrincipalMessage />
      <HsPrincipalMessage/>
      <StudentJourney />
      <AcademicPrograms />
      {/* <Facilities /> */}
      {/* <Achievements /> */}
      <CoCurricular />
      <FieldTrips />
      <EventsGallery />
      <SchoolTimeline />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
