const Experience = () => {
  const experiences = [
    {
      company: "Walmart",
      role: "Sr. Technical Product Manager - GenAI & Data Products",
      period: "PRESENT",
      logo: "🟡",
      bgColor: "bg-yellow-400",
    },
    {
      company: "Waystar",
      role: "Sr. Product Manager - GTM & Data Products",
      period: "PREVIOUS",
      logo: "W",
      bgColor: "bg-pink-500",
    },
    {
      company: "Deloitte",
      role: "Senior Consultant - AI/ML & Cloud",
      period: "PREVIOUS",
      logo: "D",
      bgColor: "bg-black",
    },
    {
      company: "CGI",
      role: "Technical Solution Manager - GTM/Cloud Platforms",
      period: "PREVIOUS",
      logo: "CGI",
      bgColor: "bg-red-600",
    },
    {
      company: "Anthem",
      role: "Senior Application Developer",
      period: "PREVIOUS",
      logo: "A",
      bgColor: "bg-blue-700",
    },
    {
      company: "EPIQ Systems",
      role: "Member Systems Administration Program",
      period: "PREVIOUS",
      logo: "E",
      bgColor: "bg-gray-700",
    },
    {
      company: "CGI",
      role: "Senior Consultant - SOA, Automation & Content Solution",
      period: "PREVIOUS",
      logo: "CGI",
      bgColor: "bg-red-600",
    },
    {
      company: "DELL Technologies",
      role: "Application Manager, Architect",
      period: "PREVIOUS",
      logo: "DELL",
      bgColor: "bg-blue-600",
    },
    {
      company: "Cognizant",
      role: "Associate - Portfolio Management",
      period: "PREVIOUS",
      logo: "C",
      bgColor: "bg-blue-800",
    },
  ];

  return (
    <section id="experience" className="dark-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">Experience</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${exp.bgColor} flex items-center justify-center flex-shrink-0 text-white font-bold text-xs`}>
                  {exp.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-primary text-[10px] font-semibold tracking-wider">{exp.period}</span>
                  <h3 className="text-white font-medium text-sm mt-1 leading-tight">{exp.role}</h3>
                  <p className="text-white/50 text-xs mt-1">{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
