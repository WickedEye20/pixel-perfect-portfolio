const Certifications = () => {
  const certifications = [
    { name: "DataBricks Certified Data Scientist", icon: "🔴", bgColor: "bg-red-100" },
    { name: "AWS® Certified Data Engineer", icon: "🟠", bgColor: "bg-orange-100" },
    { name: "SAFe® 6 Agilist", icon: "🟢", bgColor: "bg-green-100" },
    { name: "SAFe® 6 Product Manager", icon: "🟡", bgColor: "bg-yellow-100" },
    { name: "SAFe® 6 Portfolio Specialist", icon: "🔵", bgColor: "bg-blue-100" },
    { name: "Change Management Practitioner", icon: "🟣", bgColor: "bg-purple-100" },
  ];

  return (
    <section id="certifications" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Certifications</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-badge">
              <div className={`w-16 h-16 rounded-lg ${cert.bgColor} flex items-center justify-center text-2xl`}>
                {cert.icon}
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium mt-2 leading-tight">
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
