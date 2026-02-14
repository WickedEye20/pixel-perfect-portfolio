import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import testimony_img from "../assets/testimonial_img.png";
import testimony_avatar_1 from "../assets/testimonials/avatar_1.png";
import testimony_avatar_2 from "../assets/testimonials/avatar_2.png";
import testimony_avatar_3 from "../assets/testimonials/avatar_3.png";

import { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(null);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((json) => setTestimonials(json))
      .catch((err) => console.error(err));
  }, []);

  if (!testimonials) return null;

  return (
    <section
      id="testimonials"
      className="gray-section py-10 md:py-0 scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center">

        {/* LEFT – TEXT */}
        <div className="flex-1 container py-10 min-w-0">
          <h2 className="section-title text-foreground mb-8 text-center">
            {testimonials.section_title}
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
            {testimonials.testimonial_card.map((item, index) => (
              <SwiperSlide key={index}>
                <p className="text-black text-xl lg:text-2xl italic text-center">
                  "{item.text}"
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT – PHOTO + SIDE BUTTONS */}
        <div className="flex-shrink-0 primary_gradient lg:w-[460px] order-first lg:order-last h-full">
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
                src={testimonials.testimonial_card[activeIndex]?.image}
                alt={testimonials.testimonial_card[activeIndex]?.name}
                className="mx-auto rounded-full"
              />
              <h6 className="text-lg text-white mt-4">
                {testimonials.testimonial_card[activeIndex]?.name}
              </h6>
              <p className="text-white text-sm">
                {testimonials.testimonial_card[activeIndex]?.role}
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
