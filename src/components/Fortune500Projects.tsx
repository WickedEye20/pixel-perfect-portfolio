const Fortune500Projects = () => {
  const companies = [
    "JPMorgan",
    "Microsoft",
    "Lockheed Martin",
    "Boeing",
    "Verizon",
    "GEICO",
  ];

  return (
    <section id="projects" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Fortune 500 Projects</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className="logo-card">
              <div className="text-muted-foreground font-semibold text-sm md:text-base opacity-60 hover:opacity-100 transition-opacity">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fortune500Projects;
