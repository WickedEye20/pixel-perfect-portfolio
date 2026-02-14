import { useEffect, useState } from "react";

const HeroSection = () => {

  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch("/data/banner.json")
      .then((res) => res.json())
      .then((json) => setBanner(json))
      .catch((err) => console.error(err));
  }, []);

  if (!banner) return null;


  return (
    <section className="hero-section py-28 md:py-32 lg:py-48">
      <div className="container mx-auto text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {banner.section_title}
        </h1>
        <p className="text-lg md:text-3xl mb-10 md:mb-16">
          {banner.section_subtitle}
        </p>

        <div className="">
          {/* <h3 className="text-2xl font-medium mb-8">Competencies</h3> */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-[1px] justify-items-center mx-auto max-w-[1150px]">
            {banner.banner_card.map((comp, index) => (
              <div key={index} className="competency-item">
                {/* <span className="competency-bullet"></span> */}
                <span className="text-sm md:text-base font-semibold">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
