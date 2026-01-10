const Education = () => {
  const education = [
    {
      degree: "MS (Pursuing) in Management Science",
      school: "Columbia",
      details: "Ivy League Education",
      icon: "🎓",
      bgColor: "bg-blue-600",
    },
    {
      degree: "MTech in Information Technology (IT)",
      school: "IIIT Allahabad",
      details: "Top Engineering Institute of India",
      icon: "🏛️",
      bgColor: "bg-orange-500",
    },
    {
      degree: "BS in Biomedical Engineering",
      school: "Georgia Tech University",
      details: "Top 5 in United States",
      icon: "🔬",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section id="education" className="gray-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Education</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="skill-card text-center">
              <div className={`w-16 h-16 rounded-full ${edu.bgColor} flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {edu.icon}
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-2">{edu.degree}</h3>
              <p className="text-primary text-sm font-medium">{edu.school}</p>
              <p className="text-muted-foreground text-xs mt-1">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
