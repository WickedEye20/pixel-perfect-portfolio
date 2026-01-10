const HeroSection = () => {
  const competencies = [
    "GenAI, LLMs & Agentic AI",
    "APIs Strategy & Pre-Sales",
    "AI Product Management (APM)",
    "Stakeholder, Leadership & Skills",
    "Enterprise Solution Delivery (ESD)",
    "Training & Certifications (T&C)",
    "Product Lifecycle Management (PLM)",
    "Customer Success & Enablement",
    "Technical Product/Program Management (TPM)",
  ];

  return (
    <section className="hero-section py-20 md:py-28">
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Abhishek Misra
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-16">
          Technical Product & Program Management Leader
        </p>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-base font-medium mb-8 text-white/90">Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {competencies.map((comp, index) => (
              <div key={index} className="competency-item justify-center">
                <span className="competency-bullet"></span>
                <span className="text-sm">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
