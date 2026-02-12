import iit from "../assets/education/iit.png";
import du from "../assets/education/du.png";
import gmu from "../assets/education/gmu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Education = () => {
  const education = [
    {
      degree: (<>BS (Honors) <span className="block font-normal text-muted-foreground text-lg">in</span> Biomedical <br /> Engineering</>),
      school: "University of Delhi",
      details: "New Delhi, India",
      icon: du,
      bgColor: "bg-blue-600",
    },
    {
      degree: (<>MTech <span className="block font-normal text-muted-foreground text-lg">in</span> Biomedical <br /> Engineering</>),
      school: "Indian Institute of Technology Bombay",
      details: "Mumbai, India",
      icon: iit,
      bgColor: "bg-orange-500",
    },
    {
      degree: (<>MS <span className="block font-normal text-muted-foreground text-lg">in</span> Data Analytics <br /> Engineering</>),
      school: "George Mason University",
      details: "Virginia, USA",
      icon: gmu,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section id="education" className="gray-section py-10 md:py-28 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title text-foreground">Education</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {education.map((edu, index) => (
              <SwiperSlide key={index} className="pb-10 ">
                <div key={index} className="">
                  <div className={`rounded-full mb-8`}>
                    <img className="mx-auto" src={edu.icon} alt="" />
                  </div>
                  <h5 className="font-semibold text-foreground text-2xl mb-4">{edu.degree}</h5>
                  <p className="text-secondary text-sm font-medium">{edu.school}</p>
                  <p className="text-secondary text-xs mt-1">{edu.details}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-10 md:gap-6 justify-items-center">
          {education.map((edu, index) => (
            <div key={index} className="max-w-[350px]">
              <div className={`rounded-full mb-8`}>
                <img className="mx-auto" src={edu.icon} alt="" />
              </div>
              <h5 className="font-semibold text-foreground text-2xl mb-4">{edu.degree}</h5>
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
