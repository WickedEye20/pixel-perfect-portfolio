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

const Certifications = () => {
  const certifications = [
    { name: "DataCamp® Certified Data Scientist", icon: datacamp, bgColor: "bg-red-100" },
    { name: "SAFe® 6 Release Train Engineer", icon: rte, bgColor: "bg-orange-100" },
    { name: "SAFe® 6 Agile Product Manager", icon: apm, bgColor: "bg-orange-100" },
    { name: "SAFe® 6 Product Manager", icon: popm, bgColor: "bg-yellow-100" },
    { name: "SAFe® 6 Practice Consultant", icon: spc, bgColor: "bg-blue-100" },
    { name: "Change Management Practitioner", icon: prosci, bgColor: "bg-purple-100" },
    { name: "SAFe® 6 ScrumMaster", icon: ssm, bgColor: "bg-green-100" },
    { name: "Technical Product Manager", icon: phq, bgColor: "bg-green-100" },
    { name: "Certified Sales Engineer ", icon: cse, bgColor: "bg-green-100" },
  ];

  return (
    <section id="certifications" className="light-section py-10 md:py-28">
      <div className="container text-center">
        <h2 className="section-title text-foreground">Certifications</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {certifications.map((cert, index) => (
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

        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
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
