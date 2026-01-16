const HeroSection = () => {
  const competencies = [
    "GenAI, LLMs & Agentic AI",
    "GTM Strategy & Pre-Sales",
    "AI Product Management (APM)",
    "Stakeholder, Leadership & Skills",
    "Enterprise Solution Delivery (ESD)",
    "Training & Certifications (T&C)",
    "Product Lifecycle Management (PLM)",
    "Customer Success & Enablement",
    "Technical Product/Program Management (TPM)",
  ];

  return (
    <section className="hero-section py-32 lg:py-48">
      <div className="container mx-auto text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Abhishek Misra
        </h1>
        <p className="text-lg md:text-3xl mb-10 md:mb-16">
          Technical Product & Program Management Leader
        </p>

        <div className="">
          <h3 className="text-2xl font-medium mb-8">Competencies</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {competencies.map((comp, index) => (
              <div key={index} className="competency-item">
                <span className="competency-bullet"></span>
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
