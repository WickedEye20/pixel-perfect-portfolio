const HeroSection = () => {
  const competencies = [
    { left: "GenAI, LLMs & Agentic AI", right: "APIs Strategy & Pre-Sales" },
    { left: "AI Product Management (APM)", right: "Stakeholder, Leadership & Skills" },
    { left: "Enterprise Solution Delivery (ESD)", right: "Training & Certifications (T&C)" },
    { left: "Product Lifecycle Management (PLM)", right: "Customer Success & Enablement" },
    { left: "Technical Product/Program Management (TPM)", right: "" },
  ];

  return (
    <section className="hero-section py-16 md:py-24">
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Abhishek Misra
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          Technical Product & Program Management Leader
        </p>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-white/90">Competencies</h3>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {competencies.map((comp, index) => (
              <div key={index} className="flex justify-between">
                <div className="competency-item">
                  <span className="competency-bullet"></span>
                  <span>{comp.left}</span>
                </div>
                {comp.right && (
                  <div className="competency-item">
                    <span className="competency-bullet"></span>
                    <span>{comp.right}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
