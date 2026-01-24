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
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);

      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth" });

        // 🔥 CLEAR STATE after scroll
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    } else {
      // ✅ If normal visit to homepage → go to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
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
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
