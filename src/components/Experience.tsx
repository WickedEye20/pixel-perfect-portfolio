import { Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Walmart",
      role: "Sr. Technical Product Manager - GenAI & Data Products",
      period: "Present",
      color: "bg-yellow-500",
    },
    {
      company: "Waystar",
      role: "Sr. Product Manager - GTM & Data Products",
      period: "Previous",
      color: "bg-blue-600",
    },
    {
      company: "Deloitte",
      role: "Senior Consultant - AI/ML & Cloud",
      period: "Previous",
      color: "bg-black",
    },
    {
      company: "CGI",
      role: "Technical Solution Manager - GTM/Cloud Platforms",
      period: "Previous",
      color: "bg-red-600",
    },
    {
      company: "Anthem",
      role: "Senior Application Developer",
      period: "Previous",
      color: "bg-blue-700",
    },
    {
      company: "EPIQ Systems",
      role: "Member Systems Administration Program",
      period: "Previous",
      color: "bg-purple-600",
    },
    {
      company: "CGI",
      role: "Senior Consultant - SOA, Automation & Content Solution",
      period: "Previous",
      color: "bg-red-600",
    },
    {
      company: "DELL Technologies",
      role: "Application Manager, Architect",
      period: "Previous",
      color: "bg-blue-500",
    },
    {
      company: "Cognizant",
      role: "Associate - Portfolio Management",
      period: "Previous",
      color: "bg-blue-800",
    },
  ];

  return (
    <section id="experience" className="dark-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">Experience</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg ${exp.color} flex items-center justify-center flex-shrink-0`}>
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-primary text-xs font-medium">{exp.period}</span>
                  <h3 className="text-white font-semibold text-sm mt-1">{exp.role}</h3>
                  <p className="text-white/60 text-xs mt-1">{exp.company}</p>
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
