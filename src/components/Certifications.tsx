import { Award, Shield, Cloud, Database, Server, Zap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { icon: Database, name: "DataBricks Certified Data Scientist", color: "bg-red-500" },
    { icon: Cloud, name: "AWS® Certified Data Engineer", color: "bg-orange-500" },
    { icon: Shield, name: "SAFe® 6 Agilist", color: "bg-green-600" },
    { icon: Award, name: "SAFe® 6 Product Manager", color: "bg-yellow-500" },
    { icon: Server, name: "SAFe® 6 Portfolio Specialist", color: "bg-blue-600" },
    { icon: Zap, name: "Change Management Practitioner", color: "bg-purple-600" },
  ];

  return (
    <section id="certifications" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Certifications</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-badge">
              <div className={`w-16 h-16 rounded-lg ${cert.color} flex items-center justify-center`}>
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium mt-2">
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
