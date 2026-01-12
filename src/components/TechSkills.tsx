import cloud_engineering_img from "../assets/skills/cloud_engg.svg";
import data_science_img from "../assets/skills/data_science.svg";
import bi_data_img from "../assets/skills/bi_data.svg";
import process_management_img from "../assets/skills/project_management.svg";
import team_efficiency from "../assets/skills/team_efficiency.svg";
import tech_project_img from "../assets/skills/tech_project.svg";

const TechSkills = () => {
  const skills = [
    {
      icon: bi_data_img,
      title: "BI & Data Analytics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esa commodo consequat.",
    },
    {
      icon: data_science_img,
      title: "Data Science & AI",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esa commodo consequat.",
    },
    {
      icon: cloud_engineering_img,
      title: "Cloud Engineering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esa commodo consequat.",
    },
    {
      icon: process_management_img,
      title: "Process & Program Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esa commodo consequat.",
    },
    {
      icon: tech_project_img,
      title: "Technical Product Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esa commodo consequat.",
    },
    {
      icon: team_efficiency,
      title: "ETLC, Pre-Sales & Enterprise Engineering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex esa commodo consequat.",
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <h2 className="section-title text-foreground">Tech Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="flex flex-col gap-3 mb-4">
                <img src={skill.icon} className="w-20 h-20" />
                <h5 className="font-semibold text-foreground">{skill.title}</h5>
              </div>
              <p className="text-muted-foreground text-base mb-5">
                {skill.description}
              </p>
              <a href="#" className="text-base font-medium text-primary py-2 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
