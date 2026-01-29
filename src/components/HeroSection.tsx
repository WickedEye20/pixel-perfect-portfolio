const HeroSection = () => {
  const competencies = [
    "GenAI, LLMs & Agentic AI",
    "GTM Strategy & Pre-Sales",
    "AI Product Management (APM)",
    "Stakeholder, Leadership & Skills",
    "Enterprise Solution Delivery (ESD)",
    "eLearning, LMS, LXP & EdTech",
    "Product Lifecycle Management (PLM)",
    "Training & Certifications (T&C)",
    "Technical Product/Program Management (TPM)",
    "Customer Success & Enablement",
  ];

  return (
    <section className="hero-section py-32 lg:py-48">
      <div className="container mx-auto text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Abhishek Misra
        </h1>
        <p className="text-lg md:text-3xl mb-10 md:mb-16">
          Technical Product & Program Management Leader
        </p>

        <div className="">
          {/* <h3 className="text-2xl font-medium mb-8">Competencies</h3> */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-[1px] justify-items-center mx-auto max-w-[1400px]">
            {competencies.map((comp, index) => (
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
