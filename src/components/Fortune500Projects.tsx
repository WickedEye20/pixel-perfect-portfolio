const Fortune500Projects = () => {
  const companies = [
    { name: "JPMorgan", logo: "JPMORGAN" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Lockheed Martin", logo: "LOCKHEED MARTIN" },
    { name: "Boeing", logo: "BOEING" },
    { name: "Verizon", logo: "verizon" },
    { name: "GEICO", logo: "GEICO" },
  ];

  return (
    <section id="projects" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Fortune 500 Projects</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className="logo-card">
              <div className="text-muted-foreground font-bold text-xs md:text-sm opacity-50 hover:opacity-100 transition-opacity tracking-tight">
                {company.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fortune500Projects;
