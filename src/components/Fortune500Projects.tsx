import ms from "../assets/projects/ms.png";
import jpm from "../assets/projects/jpm.png";
import lm from "../assets/projects/lm.png";
import ce from "../assets/projects/ce.png";
import broadcom from "../assets/projects/broadcom.png";
import wm from "../assets/projects/wm.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState, useRef } from "react";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

const Fortune500Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [companies, setCompanies] = useState(null);
  useGsapAnimation(sectionRef, [companies]);

  useEffect(() => {
    fetch("/data/fortune500.json")
      .then((res) => res.json())
      .then((json) => setCompanies(json))
      .catch((err) => console.error(err));
  }, []);

  if (!companies) return null;

  return (
    <section ref={sectionRef} id="projects" className="light-section py-10 md:py-28 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title text-foreground">{companies.section_title}</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {companies.fortune_image.map((company, index) => (
              <SwiperSlide key={index} className="p-3 pb-10 ">
                <div key={index} className="logo-card">
                  <div className="text-muted-foreground font-bold text-xs md:text-sm transition-opacity tracking-tight">
                    <img src={company.logo} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="gsap-stagger hidden md:grid grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 items-center justify-items-center">
          {companies.fortune_image.map((company, index) => (
            <div key={index} className="logo-card">
              <div className="text-muted-foreground font-bold text-xs md:text-sm transition-opacity tracking-tight">
                <img src={company.logo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fortune500Projects;
