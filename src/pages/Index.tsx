import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BriefIntro from "@/components/BriefIntro";
import TechSkills from "@/components/TechSkills";
import Experience from "@/components/Experience";
import Fortune500Projects from "@/components/Fortune500Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BriefIntro />
      <TechSkills />
      <Experience />
      <Fortune500Projects />
      <Education />
      <Certifications />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
