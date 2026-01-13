import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import biDataIcon from "@/assets/skills/bi_data.svg";
import dataScienceIcon from "@/assets/skills/data_science.svg";
import cloudEnggIcon from "@/assets/skills/cloud_engg.svg";
import projectMgmtIcon from "@/assets/skills/project_management.svg";
import techProjectIcon from "@/assets/skills/tech_project.svg";
import teamEfficiencyIcon from "@/assets/skills/team_efficiency.svg";

const TechnicalExperience = () => {
  const domains = [
    {
      id: "bi-data-analytics",
      title: "BI & Data Analytics",
      icon: biDataIcon,
      fullTitle: "Business Intelligence & Data Analytics",
      skills: [
        {
          name: "Data Visualization & Descriptive Analytics",
          description: "Creating interactive dashboards and reports using Tableau, Power BI, and custom visualization solutions to transform complex data into actionable insights."
        },
        {
          name: "Predictive & Prescriptive Analytics",
          description: "Building statistical models and machine learning algorithms to forecast trends and recommend optimal business decisions."
        },
        {
          name: "Decision Analysis & Decision Support Systems",
          description: "Designing and implementing systems that support strategic decision-making through data-driven methodologies."
        }
      ]
    },
    {
      id: "data-science-ai",
      title: "Data Science & AI",
      icon: dataScienceIcon,
      fullTitle: "Data Science & AI",
      skills: [
        {
          name: "Data Science & Statistical Modelling",
          description: "Applying advanced statistical techniques and data science methodologies to extract meaningful patterns from complex datasets."
        },
        {
          name: "Deep Machine Learning",
          description: "Developing and deploying deep learning models using TensorFlow, PyTorch, and Keras for image recognition, NLP, and predictive analytics."
        },
        {
          name: "AutoML & MLOps",
          description: "Implementing automated machine learning pipelines and MLOps practices for scalable model deployment and monitoring."
        },
        {
          name: "Data Science & ML on AWS",
          description: "Leveraging AWS SageMaker, Lambda, and other cloud services for building and deploying production-grade ML solutions."
        }
      ]
    },
    {
      id: "cloud-engineering",
      title: "Cloud Engineering",
      icon: cloudEnggIcon,
      fullTitle: "Cloud Engineering",
      skills: [
        {
          name: "Cloud Solutions Design and Architecture",
          description: "Architecting scalable, secure, and cost-effective cloud solutions on AWS, Azure, and GCP platforms."
        },
        {
          name: "Cloud Migration",
          description: "Planning and executing enterprise-scale cloud migration strategies with minimal downtime and risk."
        },
        {
          name: "Cloud Infrastructure Engineering & DevOps",
          description: "Building and managing cloud infrastructure using IaC tools like Terraform, CloudFormation, and implementing CI/CD pipelines."
        },
        {
          name: "Cloud Security",
          description: "Implementing cloud security best practices, compliance frameworks, and security monitoring solutions."
        }
      ]
    },
    {
      id: "project-program-management",
      title: "Project & Program Management",
      icon: projectMgmtIcon,
      fullTitle: "Project & Program Management",
      skills: [
        {
          name: "Stakeholder & Client Engagement",
          description: "Building and maintaining strong relationships with stakeholders, managing expectations, and ensuring alignment with business objectives."
        },
        {
          name: "Solution Delivery",
          description: "End-to-end management of solution delivery, from requirements gathering to deployment and post-launch support."
        },
        {
          name: "Customer Success",
          description: "Driving customer satisfaction and retention through proactive engagement, issue resolution, and value delivery."
        },
        {
          name: "Implementing Agile at Scale (SAFe®)",
          description: "Leading SAFe® implementations across enterprise organizations, coordinating multiple Agile Release Trains."
        },
        {
          name: "Managing Release Train",
          description: "Orchestrating release planning, PI planning events, and ensuring continuous delivery across distributed teams."
        }
      ]
    },
    {
      id: "technical-product-management",
      title: "Technical Product Management",
      icon: techProjectIcon,
      fullTitle: "Technical Product Management",
      skills: [
        {
          name: "User-Centered Design",
          description: "Championing user research, persona development, and user testing to create products that solve real user problems."
        },
        {
          name: "System Design & Architecture Experience Design (LXD)",
          description: "Designing intuitive learning experiences and system architectures that enhance user engagement and knowledge retention."
        },
        {
          name: "GTM Strategy & Pre-sales",
          description: "Developing go-to-market strategies, competitive positioning, and supporting pre-sales activities with technical expertise."
        },
        {
          name: "Agile Product Delivery",
          description: "Managing product backlogs, sprint planning, and iterative delivery using Agile methodologies."
        },
        {
          name: "Product Adoption",
          description: "Driving product adoption through user onboarding, training programs, and feature awareness campaigns."
        },
        {
          name: "Product Promotion & Marketing",
          description: "Collaborating with marketing teams on product positioning, messaging, and promotional campaigns."
        }
      ]
    },
    {
      id: "organizational-change-management",
      title: "Organizational Change Management",
      icon: teamEfficiencyIcon,
      fullTitle: "Organizational Change Management",
      skills: [
        {
          name: "Organizational Change Management",
          description: "Leading enterprise-wide change initiatives using Prosci and ADKAR methodologies to ensure successful adoption."
        },
        {
          name: "Training, Communication & Adoption",
          description: "Developing comprehensive training programs and communication strategies to drive organizational adoption."
        },
        {
          name: "Instructional Design, Technical Curriculum Development & Learning Management",
          description: "Creating engaging learning experiences, technical curricula, and managing LMS platforms for enterprise training."
        }
      ]
    }
  ];

  const [activeDomain, setActiveDomain] = useState(domains[0].id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Title Section */}
      <section className="primary_gradient pt-24 pb-12">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Technical Experience</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Left Sidebar - Domains */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="text-primary text-xl font-bold mb-6">Domains</h3>
              <ul className="space-y-3">
                {domains.map((domain) => (
                  <li key={domain.id}>
                    <button
                      onClick={() => {
                        setActiveDomain(domain.id);
                        const element = document.getElementById(domain.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={`text-left w-full transition-colors text-sm ${
                        activeDomain === domain.id
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {domain.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content - Domains with Accordions */}
            <div className="space-y-12">
              {domains.map((domain) => (
                <div 
                  id={domain.id} 
                  key={domain.id} 
                  className="border-b border-border pb-12 last:border-0 scroll-mt-32"
                >
                  {/* Domain Title with Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <img src={domain.icon} alt={domain.title} className="h-8 w-8 object-contain" />
                    <h4 className="text-lg font-bold text-primary">{domain.fullTitle}</h4>
                  </div>
                  
                  {/* Skills Accordion */}
                  <Accordion type="multiple" className="w-full">
                    {domain.skills.map((skill, idx) => (
                      <AccordionItem key={idx} value={`${domain.id}-${idx}`} className="border-b border-border">
                        <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                          {skill.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground pb-4">
                          {skill.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalExperience;
