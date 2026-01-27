import ms from "../assets/projects/ms.png";
import jpm from "../assets/projects/jpm.png";
import lm from "../assets/projects/lm.png";
import ce from "../assets/projects/ce.png";
import broadcom from "../assets/projects/broadcom.png";
import wm from "../assets/projects/wm.png";

const Fortune500Projects = () => {
  const companies = [
    { name: "JPMorgan", logo: jpm },
    { name: "Microsoft", logo: ms },
    { name: "Lockheed Martin", logo: lm },
    { name: "ConEdison", logo: ce },
    { name: "Broadcom", logo: broadcom },
    { name: "Walmart", logo: wm },
  ];

  return (
    <section id="projects" className="light-section py-28 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title text-foreground">Fortune 500 Projects</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="logo-card">
              <div className="text-muted-foreground font-bold text-xs md:text-sm transition-opacity tracking-tight">
                <img src={company.logo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fortune500Projects;
