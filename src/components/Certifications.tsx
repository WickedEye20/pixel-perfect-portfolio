import datacamp from "../assets/certificate/datacamp.png";
import rte from "../assets/certificate/rte.png";
import ssm from "../assets/certificate/ssm.png";
import popm from "../assets/certificate/popm.png";
import spc from "../assets/certificate/spc.png";
import prosci from "../assets/certificate/prosci.png";

const Certifications = () => {
  const certifications = [
    { name: "Certified Data Scientist", icon: datacamp, bgColor: "bg-red-100" },
    { name: "SAFe® 6 Release Train Engineer", icon: rte, bgColor: "bg-orange-100" },
    { name: "SAFe® 6 ScrumMaster", icon: ssm, bgColor: "bg-green-100" },
    { name: "SAFe® 6 Product Manager", icon: popm, bgColor: "bg-yellow-100" },
    { name: "SAFe® 6 Practice Consultant", icon: spc, bgColor: "bg-blue-100" },
    { name: "Change Management Practitioner", icon: prosci, bgColor: "bg-purple-100" },
  ];

  return (
    <section id="certifications" className="light-section py-28">
      <div className="container text-center">
        <h2 className="section-title text-foreground">Certifications</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-badge">
              <div className={`rounded-lg flex items-center justify-center`}>
                <img src={cert.icon} alt="" />
              </div>
              <h4 className="text-lg text-center text-black font-bold mt-2 leading-tight">
                {cert.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
