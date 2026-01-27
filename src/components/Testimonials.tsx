import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import testimony_img from "../assets/testimonial_img.png";
import testimony_avatar_1 from "../assets/testimonials/avatar_1.png";
import testimony_avatar_2 from "../assets/testimonials/avatar_2.png";
import testimony_avatar_3 from "../assets/testimonials/avatar_3.png";

import { useState } from "react";

const testimonials = [
  {
    text: `Abhishek worked with me as an intern in my Advanced Semiconductor Materials, Nanostructures & Devices Lab at IIT Delhi. He worked on fabrication and characterization of Nanoscale biosensors. He is a hardworking, focused and ambitious student.`,
    name: "Dr. Rajendra Singh, Associate Professor",
    role: "Department of Physics, Indian Institute of Technology, New Delhi",
    image: testimony_avatar_1,
  },
  {
    text: `Abhi worked very well with 3rd party vendors, clients, and project stakeholders during his tenure. He is exceptional in technical enablement and onboarding of clients with minimal turnaround time. He also focused on onboarding teams to initiate development and eventually scaled them to production . He has a technical background that allowed him develop deep product knowledge with a short learning curve. His technical skill set in cloud services, Data Science, AI, MLOPs combined with Program Management, and software delivery makes him good fit for technical program management and project leadership roles`,
    name: "S Venkataraman, Senior VP",
    role: "Deloitte Consulting US",
    image: testimony_avatar_2,
  },
  {
    text: `He is an adaptive learner and an affable team player. I wish him success in his future endeavors.`,
    name: "Mike D, Associate VP",
    role: "Deloitte Consulting US",
    image: testimony_avatar_3,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="gray-section py-10 md:py-0 scroll-mt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">

        {/* LEFT – TEXT */}
        <div className="flex-1 container pt-10 min-w-0">
          <h2 className="section-title text-foreground mb-8">
            Testimonials
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <p className="text-black text-xl lg:text-2xl italic">
                  "{item.text}"
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT – PHOTO + SIDE BUTTONS */}
        <div className="flex-shrink-0 primary_gradient md:w-[460px] order-first md:order-last">
          <div className="flex items-start justify-center gap-3 p-20 md:p-28 md:py-26 lg:p-35">

            {/* PREV */}
            <button className="mt-8 testimonial-prev p-2 rounded-[10px] text-white hover:bg-white border border-white hover:text-black transition">
              <ChevronLeft className="w-3 h-3" />
            </button>

            {/* PHOTO */}
            <div className="text-center transition-all duration-300">
              <img
                width={90}
                height={90}
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="mx-auto rounded-full"
              />
              <h6 className="text-lg text-white mt-4">
                {testimonials[activeIndex].name}
              </h6>
              <p className="text-white text-sm">
                {testimonials[activeIndex].role}
              </p>
            </div>

            {/* NEXT */}
            <button className="mt-8 testimonial-next rounded-[10px] p-2 text-white hover:bg-white border border-white hover:text-black transition">
              <ChevronRight className="w-3 h-3" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
