import { BarChart3, Brain, Cloud, Layers, Box, Cpu } from "lucide-react";

const TechSkills = () => {
  const skills = [
    {
      icon: BarChart3,
      title: "BI & Data Analytics",
      description: "Power BI, Tableau, SSRS, SSAS Analytics, Crystal Reports, SAP Business Objects, Data visualization & reporting expertise",
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      description: "Machine Learning, Deep Learning, NLP/NLU, LLMs, Generative AI, Python, TensorFlow, PyTorch, Azure ML, AWS SageMaker",
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Azure, AWS, GCP, Kubernetes, Docker, Terraform, CI/CD pipelines, Infrastructure as Code, Cloud architecture",
    },
    {
      icon: Layers,
      title: "Process & Program Management",
      description: "Agile, Scrum, SAFe, Waterfall, JIRA, Azure DevOps, Program governance, Risk management, Resource planning",
    },
    {
      icon: Box,
      title: "Technical Product Management",
      description: "Product roadmapping, User research, A/B testing, Product analytics, Feature prioritization, Go-to-market strategy",
    },
    {
      icon: Cpu,
      title: "ETLC, Pre-Sales & Enterprise Engineering",
      description: "Solution architecture, RFP/RFI responses, Technical pre-sales, Client presentations, POC development",
    },
  ];

  return (
    <section id="skills" className="gray-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Tech Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {skill.description}
              </p>
              <button className="btn-primary text-xs py-1.5 px-4">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
