import cloud_engineering_img from "../assets/skills/cloud_engg.svg";
import data_science_img from "../assets/skills/data_science.svg";
import bi_data_img from "../assets/skills/bi_data.svg";
import process_management_img from "../assets/skills/project_management.svg";
import team_efficiency from "../assets/skills/team_efficiency.svg";
import tech_project_img from "../assets/skills/tech_project.svg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const TechSkills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch("/data/techSkills.json")
      .then((res) => res.json())
      .then((json) => setSkills(json))
      .catch((err) => console.error(err));
  }, []);

  if (!skills) return null;

  return (
    <section id="skills" className="py-10 md:py-24 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title text-foreground">{skills.section_title}</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {skills.section_card.map((skill, index) => (
              <SwiperSlide key={index} className="p-3 pb-10 ">
                <div className="skill-card">
                  <div className="flex flex-col gap-3 mb-4">
                    <img src={skill.icon} className="w-20 h-20 mx-auto" />
                    <h5 className="font-semibold text-foreground">
                      {skill.title}
                    </h5>
                  </div>
                  <p className="text-muted-foreground text-base">
                    {skill.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.section_card.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="flex flex-col gap-3 mb-4">
                <img src={skill.icon} className="w-20 h-20 mx-auto" />
                <h5 className="font-semibold text-foreground">{skill.title}</h5>
              </div>
              <p className="text-muted-foreground text-base mb-6">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
