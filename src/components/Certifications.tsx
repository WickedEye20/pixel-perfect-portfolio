import datacamp from "../assets/certificate/datacamp.png";
import rte from "../assets/certificate/rte.png";
import ssm from "../assets/certificate/ssm.png";
import popm from "../assets/certificate/popm.png";
import spc from "../assets/certificate/spc.png";
import prosci from "../assets/certificate/prosci.png";
import apm from "../assets/certificate/apm.png";
import cse from "../assets/certificate/cse.png";
import phq from "../assets/certificate/phq.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [certifications, setCertifications] = useState(null);
  useGsapAnimation(sectionRef, [certifications]);

  useEffect(() => {
    fetch("/data/certifications.json")
      .then((res) => res.json())
      .then((json) => setCertifications(json))
      .catch((err) => console.error(err));
  }, []);

  if (!certifications) return null;

  return (
    <section ref={sectionRef} id="certifications" className="light-section py-10 md:py-28">
      <div className="container text-center">
        <h2 className="section-title text-foreground">{certifications.section_title}</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {certifications.certification_card.map((cert, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="cert-badge pb-12">
                  <div className={`rounded-lg flex items-center justify-center`}>
                    <img src={cert.icon} alt="" />
                  </div>
                  <h4 className="text-lg text-center text-black font-bold mt-2 leading-tight">
                    {cert.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="absolute top-0 bottom-0 flex items-center right-0 left-0 justify-between">
            <button className="certificate-prev z-10">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="certificate-next z-10">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div> */}
        </div>

        <div className="gsap-stagger hidden md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {certifications.certification_card.map((cert, index) => (
            <div key={index} className="cert-badge">
              <div className={`rounded-lg flex items-center justify-center`}>
                <img src={cert.icon} alt="" />
              </div>
              <h4 className="text-lg text-center text-black font-bold mt-2 leading-tight max-w-[181px]">
                {cert.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
