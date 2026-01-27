import waltcorp from "../assets/exp/waltcorp.png";
import sams_club from "../assets/exp/sams_club.png";
import lm from "../assets/exp/lm.png";
import deloitte from "../assets/exp/deloitte.png";
import cgi from "../assets/exp/cgi.png";
import gmu from "../assets/exp/gmu.png";
import certimap from "../assets/exp/certimap.png";
import vts from "../assets/exp/vts.png";
import { Link } from "react-router-dom";


const Experience = () => {
  const experiences = [
    {
      company: "SAM'S CLUB",
      role: "Sr. Technical Product Adviser - CX, GTM & Sales Enablement",
      period: "PRESENT",
      logo: sams_club,
      bgColor: "bg-yellow-400",
      slug: "sams-club",
    },
    {
      company: "Waltcorp",
      role: "Sr. AI Product Manager - GTM & Sales Enablement",
      period: "PREVIOUS",
      logo: waltcorp,
      bgColor: "bg-pink-500",
      slug: "waltcorp",
    },
    {
      company: "Deloitte",
      role: "Global Engagement & Product Training Lead",
      period: "PREVIOUS",
      logo: deloitte,
      bgColor: "bg-black",
      slug: "deloitte",
    },
    {
      company: "Certimap",
      role: "Technical Product Manager - GTM & Sales Enablement",
      period: "PREVIOUS",
      logo: certimap,
      bgColor: "bg-red-600",
      slug: "certimap",
    },
    {
      company: "CGI",
      role: "Senior Consultant - OCM, Curriculum & Product Adoption",
      period: "PREVIOUS",
      logo: cgi,
      bgColor: "bg-blue-700",
      slug: "cgi",
    },
    {
      company: "Lockheed Martin",
      role: "Machine Learning Engineer",
      period: "PREVIOUS",
      logo: lm,
      bgColor: "bg-gray-700",
      slug: "lm",
    },
    {
      company: "George Mason University",
      role: "Web Developer & Trainer",
      period: "PREVIOUS",
      logo: gmu,
      bgColor: "bg-red-600",
      slug: "gmu",
    },
    {
      company: "Vidyatech Solutions",
      role: "Technical Curriculum Developer",
      period: "PREVIOUS",
      logo: vts,
      bgColor: "bg-blue-600",
      slug: "vts",
    },
  ];

  return (
    <section id="experience" className="gray-section py-24 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col items-center gap-4 h-full">
                <div className={`min-h-[130px] md:min-h-[160px] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs`}>
                  <img src={exp.logo} alt="" />
                </div>
                <div className="flex-1 min-w-0 text-center flex flex-col gap-4 items-center bg-[#fafafa] p-8 w-full">
                  <p className="text-primary text-base mt-1 font-bold">{exp.company}</p>
                  <h5 className="text-black mt-1 font-bold">{exp.role}</h5>
                  <Link
                    to={`/work-experience#${exp.slug}`}
                    className="text-base font-medium text-primary py-2 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 inline-block mt-auto"
                  >
                    Read More
                  </Link>

                  {/* <a href={`/work-experience#${exp.slug}`} className="text-base font-medium text-primary py-2 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 inline-block mt-auto">Read More</a> */}
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
