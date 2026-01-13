import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fortune500Projects from "@/components/Fortune500Projects";
import waltcorp from "@/assets/exp/waltcorp.png";
import deloitte from "@/assets/exp/deloitte.png";
import certimap from "@/assets/exp/certimap.png";
import cgi from "@/assets/exp/cgi.png";
import lm from "@/assets/exp/lm.png";
import gmu from "@/assets/exp/gmu.png";
import vts from "@/assets/exp/vts.png";

const WorkExperience = () => {
  const positions = [
    {
      id: "waltcorp",
      title: "Sr. Product Manager - GTM & Sales Enablement",
      company: "Waltcorp",
      logo: waltcorp,
      responsibilities: [
        "Led end-to-end, org-wide AI/Gen AI/ML deployment that was originally started with an AI/GenAI roadmap along with leading in enablement & adoption tracking",
        "Led a cross-functional team in building/shipping new AI tools for key use cases. Owned and co-owned with 3rd party software/tool companies like Microsoft, Atlassian, Pendo, and Braze",
        "Led product enablement efforts in partnership with sales, customer success, marketing, and product teams. Built an enablement library for customers, CSMs, SEs, and internal teams with end-to-end communication plans, data analysis, and training plans",
        "Created competitive intelligence/market research/win-loss analysis dashboards along with AI-first predictive models on pipeline data using Tableau, Salesforce AI, and Outreach.io",
        "Built and managed GTM, AI/ML-based strategies/technical presentations/RFP responses, along with quarterly updates for senior leadership"
      ]
    },
    {
      id: "deloitte",
      title: "Global Engagement & Product Training Lead",
      company: "Deloitte Consulting",
      logo: deloitte,
      responsibilities: [
        "Managed global DAM asset engagement Training & Adoption persona-focused professional enablement for 13+ Fortune 500 client teams",
        "Led readiness, L&D design, and product adoption strategy for account, including training content including live training sessions, product demonstrations, and office hours",
        "Designed L&D, ML, LLM/AI/GenAI and LMS Engineering-branded LI/SAP/Salesforce Learning module for multiple technical platforms",
        "Developed MLOps, PyTorch, TensorFlow for ML-based DL analytics and digital AI-related workloads while also leading production-grade solution deployments",
        "Deployed and managed a 360, cloud and service-infrastructure solution, efficient change management in-person portfolio live audits in California",
        "Project and product performed by Amazon, customer success and ServiceNow to product/services and embedded XML/JS implementations"
      ]
    },
    {
      id: "certimap",
      title: "Technical Product Manager - GTM & Pre-Sales Enablement",
      company: "Certimap",
      logo: certimap,
      responsibilities: [
        "Managed competitive intelligence/trial/product team requirements/customer success feedback from enterprise customers along with cross-functional stakeholder engagement objectives and operational status",
        "Acted as the lead product manager and stakeholder who owned multiple programs: 10,000 members in marketing, feedback, CXO presentations, and dashboards for enterprise",
        "Closely with agents on strategy/key deliveries, change infrastructure, cross-platform and define executive product/feature and commercialization goals",
        "Performing AI score sheets and reports for 6 months of fee line-item engagement analysis (CRM-to-LMS) training ops",
        "Designed AI/ML/Analytics, production and risk data pricing and reports alongside cross-functional Product, Marketing, Legal, Sales, and Engineering",
        "For the relaunch of B2B enterprise skills platform for video-on-demand, text-to-audio, and managed program in line with key persona growth in SaaS product at top startups",
        "Developed and implemented a detailed analysis and assessment framework as an extension of GTM strategy and presented as a winning product commercially",
        "12 months pre-sales within strategy development training programs with current sales and $500,000-40,000 in a span of 12 months intensive exclusive customer product adoption"
      ]
    },
    {
      id: "cgi",
      title: "Senior Consultant - OCM, Curriculum & Product Adoption",
      company: "CGI",
      logo: cgi,
      responsibilities: [
        "Designed, designed, delivered products training on, and certified digital/tech-facing organizational adoption center persona for the Cerner/Oracle digital workflow rollout, as registered Oracle network admin/sys DBA",
        "Designed, developed, prototyped and simplified better than minimal or, 56K to 60+ platforms: SAP, logistics via AI, 4+ Microsoft SQL, Vision, and SharePoint",
        "Contracted processes, and blueprints are more approachable on developing performance metrics, core strategy and design frameworks, data analysis, AI-based, and infrastructure and planning models based for 200+ (assistant managers)",
        "Delivered metrics, technical strategy and RFR data to measure a collection of solutions, integration, briefings, communications and across-the-line insights on AI in Figma, InDesign, and JIRA workflows",
        "Streamlined business dashboards with a Machine (hybrid systems), by workflow training for efficiencies and report SDK via high-by-day implementation needs",
        "Critically researched the ways to gauge mass adoption/pipeline of data that can produce an energy service product/outcomes to match trends and digital/workflow interface for projects management at scale (mobility in NYC)",
        "Gained travel data on new offerings, workforce and product by developing on-database in both content rollout, various IT-digital change adoption of 50+ to/from an 8k with mobile contribution in various product"
      ]
    },
    {
      id: "lm",
      title: "Machine Learning Engineer",
      company: "Lockheed Martin",
      logo: lm,
      responsibilities: [
        "The project was sponsored by Lockheed Martin by Systems Engineering and Operations Research Department of Volgenau School of Engineering, GMU. No research data contribution to third-party with any benefits. Main research was guided/funded for Multiple School of Engineering",
        "Workflow AI, neural network-based, process UX/UI and machine learning (collaboration with project reps, Multiple, -deep, -mobile, with SQL Visual) on-file for managing an auto-defined Pattern analytics, AI cover data. This ASE represents on AI product to build/set-up ML-based DL features considering Visual handling",
        "Text-Embedded custom linear frameworks 90+ pattern training/batch-systems data distribution at 68%",
        "Used Monte Carlo simulation on to predict the performance of the wiper arm morphed in the research/analysis",
        "Updated the anomaly, detected the cell with the SAS/APL data, to calibrate GL curve as an analytical image (testing primary)"
      ]
    },
    {
      id: "gmu",
      title: "Web Developer & Trainer",
      company: "Volgenau School of Engineering, George Mason University",
      logo: gmu,
      responsibilities: [
        "Responsive Web Design/UI/UX from extreme to multi-media level, to very globally, PHP, or mobile for customers as full-time Program, this EDU, PY/YAML JavaScript, ALP, Amazonics and Selenium-python within UI, web / PHP, JavaScript Application (Cy, Net, Me, are) a graduate Teaching Assistantship for VT CS, MasterSoft and R from our work in ML/DS, multi-apply (custom role) and Dev, For ASD",
        "As a Graduate Teaching assistant at Volgenau School of Engineering, George Mason University, my responsibilities were as follows",
        "Taught and graded undergraduate students in Computer Science and IT for Hackathon live JavaScript/HTML",
        "Delivered technical job interviews at 50% Ruby 2 Py, Multi-language, bi-rounded mix monthly web-development to multi-tech like in Cyber Programming app, startup-fix, all back-end basics",
        "Developed patterns for NIST, NIH extended training to discuss the framing of cybersecurity"
      ]
    },
    {
      id: "vts",
      title: "Technical Curriculum Developer",
      company: "Vidyatech Solutions, Noida, India",
      logo: vts,
      responsibilities: [
        "Vidyatech is a company for real-world Digital/PHP-ML demo, to build web and app, atop 1000+ education with a mix of Content Publishing, CMS, Embedded App/Database, Saas B2B, Infosolution, Access, Sage Portal in Python/AWS, Application Deployment, GIT and providing Managed Services for global clients like Microsoft, Symantec, Pearson, Thomson Reuters NPP, Wiley Inc and others like",
        "Key highlights to projects I created here as a: Senior Consultant, Instructional Designer, and technically include the following",
        "Developed Cd, and SSIS concepts for Curriculum training/lab, PPT practice, Microsoft Curriculum on multiple fronts of app/analytics of Selenium to in JS",
        "Assessment online interview type for Multiple Applications/Quality",
        "Developed planned and led Day, Teaching foundations in (OIM) In-class course Trainers",
        "Designed and developed MCQ series, game, content, visual creation",
        "Wrote technical/views on Cyber Security for Students and 'Ethical'"
      ]
    }
  ];

  const [activePosition, setActivePosition] = useState(positions[0].id);
  const activeJob = positions.find(p => p.id === activePosition) || positions[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Title Section */}
      <section className="primary_gradient pt-24 pb-12">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Work Experience</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Left Sidebar - Positions */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="text-primary text-xl font-bold mb-6">Positions</h3>
              <ul className="space-y-3">
                {positions.map((position) => (
                  <li key={position.id}>
                    <button
                      onClick={() => {
                        setActivePosition(position.id);
                        const element = document.getElementById(position.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={`text-left w-full transition-colors ${
                        activePosition === position.id
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {position.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content - Roles & Responsibilities */}
            <div>
              <h3 className="text-primary text-xl font-bold mb-8">Roles & Responsibilities</h3>
              
              <div className="space-y-12">
                {positions.map((job) => (
                  <div id={job.id} key={job.id} className="border-b border-border pb-12 last:border-0 scroll-mt-32">
                    {/* Company Logo and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <img src={job.logo} alt={job.company} className="h-8 object-contain" />
                      <span className="text-lg font-semibold text-foreground">{job.company}</span>
                    </div>
                    
                    {/* Role Title */}
                    <h4 className="text-lg font-bold text-foreground mb-4">{job.title}</h4>
                    
                    {/* Responsibilities */}
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fortune 500 Projects Section */}
      <Fortune500Projects />

      <Footer />
    </div>
  );
};

export default WorkExperience;
