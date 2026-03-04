import iit from "../assets/education/iit.png";
import du from "../assets/education/du.png";
import gmu from "../assets/education/gmu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState, useRef } from "react";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [education, setEducation] = useState(null);
  useGsapAnimation(sectionRef, [education]);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((json) => setEducation(json))
      .catch((err) => console.error(err));
  }, []);

  if (!education) return null;

  return (
    <section ref={sectionRef} id="education" className="gray-section py-10 md:py-28 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title text-foreground">{education.section_title}</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {education.education_card.map((edu, index) => (
              <SwiperSlide key={index} className="pb-10 ">
                <div key={index} className="">
                  <div className={`rounded-full mb-8`}>
                    <img className="mx-auto" src={edu.icon} alt={edu.school} />
                  </div>
                  <h5 className="font-semibold text-foreground text-2xl mb-4 max-w-[270px] mx-auto">
                    {edu.degree}
                    <span className="block font-normal text-muted-foreground text-lg">
                      in
                    </span>
                    {edu.field}
                  </h5>
                  <p className="text-secondary text-sm font-medium">{edu.school}</p>
                  <p className="text-secondary text-xs mt-1">{edu.details}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="gsap-stagger hidden md:grid md:grid-cols-3 gap-10 md:gap-6 justify-items-center">
          {education.education_card.map((edu, index) => (
            <div key={index} className="max-w-[350px]">
              <div className={`rounded-full mb-8`}>
                <img className="mx-auto" src={edu.icon} alt={edu.school} />
              </div>
              <h5 className="font-semibold text-foreground text-2xl mb-4 max-w-[270px]">
                {edu.degree}
                <span className="block font-normal text-muted-foreground text-lg">
                  in
                </span>
                {edu.field}
              </h5>
              <p className="text-secondary text-sm font-medium">{edu.school}</p>
              <p className="text-secondary text-xs mt-1">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
