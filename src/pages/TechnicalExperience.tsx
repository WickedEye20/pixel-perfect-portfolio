import { useState, useEffect } from "react";
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
  const list_style = "relative before:absolute before:w-1.5 before:h-1.5 before:top-1 before:left-0 before:bg-primary before:rounded-full pl-4";
  const domains = [
    {
      id: "bi-data-analytics",
      title: "BI & Data Analytics",
      icon: biDataIcon,
      fullTitle: "Business Intelligence & Data Analytics",
      skills: [
        {
          name: "Data Visualization & Descriptive Analytics",
          description: (<>
            <ul className="space-y-3">
              <li className={list_style}>Analyzed Framingham Heart Study data to identify the risk factors that increase chance of cardiovascular diseases and highlighted the clinical significance of the involvement of these risk factors as a course project (Course: STAT 515- Applied Statistics and Visualization for Analytics)</li>
              <li className={list_style}>Analyzed the effect of Alcohol Consumption on Student's Grade as a course project (Course: SYST 568 - Applied Predictive Analytics)</li>
              <li className={list_style}>Analyzed data from MOOCs offered on different platforms (edX, Coursera etc.) to understand how properties of MOOCs, characteristics of the learner and the learning environment affect the learning outcome as a course project (Course: AIT580 – Analytics: Big Data to Information)</li>
            </ul>
          </>)
        },
        {
          name: "Predictive & Prescriptive Analytics",
          description: (<>
            <ul>
              <li>
                Solved optimization problems including Production/Transporation Model, Product Mix, Facility Location, Scheduling as a course project (Course: OR 531 - Analytics and Decision Analysis)
              </li>
              <li>
                Predicted Student's Grade based on Alcohol Consumption Behavior as a course project (Course: SYST 568 - Applied Predictive Analytics)
              </li>
              <li>
                Modelled and developed a tool which predicted the chances of occurrence of CVD in healthy individuals using Framingham Heart Study data as a course project (Course: STAT 515 - Applied Statistics and Visualization for Analytics)
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> RStudio, Shiny, Frontline Analytic Solver, Tableau</p>
          </>)
        },
        {
          name: "Decision Analysis & Decision Support Systems",
          description: (<>
            <ul>
              <li>
                Built affinity diagrams, decision trees, and influence diagrams to solve various decision-making problems as a course project (Course: SYST 573 - Decision and Risk Analysis)
              </li>
              <li>
                Built a decision support system to help prospective students choose a college as a course project (Course: SYST 573 – Decision and Risk Analysis)
              </li>
              <li>
                Build a decision support system to help students choose an E-Learning Platform for Online Technical Education as a course project (Course: SYST 573 - Decision and Risk Analysis)
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> Logical Decisions for Windows, Analytica, Smartsheet for Project Management</p>
          </>)
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
          description: (<>
            <ul>
              <li>
                7+ years of experience in Data Wrangling (= preprocessing), exploratory data analysis (EDA), ML model development, hyperparameter tuning, and prediction generation. Have extensively optimized model accuracy, precision, and other model performance metrics to effectuate reliable model predictions
              </li>
              <li>
                Have experience working with decision trees, random forests, support vector machines (SVM), Grid Search CV, GaussianNB, Logistic Regression, ARIMA algorithms
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> PyTorch, Jupyter Notebook, Google Collab, sklearn, GitHub, Python</p>
          </>)
        },
        {
          name: "Deep Machine Learning",
          description: (<>
            <ul>
              <li>
                5+ years of experience in building and deploying efficient deep learning models like neural nets, transformers, and Generalized Adversarial Networks (GANs)
              </li>
              <li>
                I bring onboard the skills of a Practicing Data Scientist (PDS) like cognitive bias modeling and bias reduction, implementing Trustworthy AI, and ensuring model explainability
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> PyTorch, Jupyter Notebook, Google Collab, TensorFlow, Keras</p>
          </>)
        },
        {
          name: "AutoML & MLOps",
          description: (<>
            <ul>
              <li>
                3+ years of experience on AutoML applications like Dataiku, CortexAI and Datadog. I bring end-to-end expertise in MLOps frameworks and architectures capable of facilitating large-scale and stable delivery
              </li>
              <li>
                Architected MLOps delivery frameworks capable of continuous integration and continuous delivery with built-in capacity to monitor and control model registry and model versioning for enhanced observability into the overall functioning of the ML Pipeline
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> MLflow, Kubeflow, BentoML, Grafana, AutoGluon</p>
          </>)
        },
        {
          name: "Data Science & ML on AWS",
          description: (<>
            <ul>
              <li>
                Utilized AWS SageMaker to develop and train machine learning models using algorithms such as XGBoost, TensorFlow, or Apache MXNet
              </li>
              <li>
                Optimized model performance by fine-tuning hyperparameters, conducting feature engineering, and experimenting with different architectures
              </li>
              <li>
                Deployed trained models on AWS infrastructure using SageMaker endpoints, ensuring scalability and high availability to handle real-time inference requests
              </li>
              <li>
                Implemented automated model retraining pipelines using AWS Step Functions and Lambda functions to update models with new data continuously
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> SageMaker, S3, AWS Lambda</p>
          </>)
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
          description: (<>
            <ul>
              <li>Designed and implemented cloud infrastructure assets that can dynamically scale based
                on demand to ensure high availability and performance</li>
              <li>Developed and implemented disaster recovery (DR) and business continuity (BC)
                strategies to ensure minimal downtime and data loss in case of failures or disasters
              </li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> Amazon EC2 (Elastic Compute Cloud), Amazon Auto Scaling, Amazon Elastic Load Balancing, Amazon S3 (Simple Storage Service), Amazon Glacier, AWS Backup, and AWS Disaster Recovery</p>
          </>)
        },
        {
          name: "Cloud Migration",
          description: (<>
            <ul>
              <li>Conducted a comprehensive assessment of the existing IT infrastructure, applications,
                and workloads to determine their suitability for migration to the cloud</li>
              <li>Developed a migration strategy and roadmap outlining the migration approach, timeline,
                dependencies, and potential risks to ensure a smooth transition to the cloud</li>
              <li>Executed migration activities according to the migration plan, leveraging cloud
                migration tools and services to move applications, data, and workloads to the cloud
                platform
              </li>
              <li>Coordinated with stakeholders and teams to minimize disruption to business operations
                during the migration process, ensuring data integrity, security, and compliance
                throughout the migration lifecycle
              </li>
              <li>Optimized cloud resources and configurations post-migration to enhance performance,
                scalability, and cost-effectiveness</li>
              <li>Provided ongoing support and maintenance to ensure the stability and efficiency of
                migrated workloads, troubleshot any issues that arise, and implement continuous
                improvement initiatives to optimize cloud operations</li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> AWS Migration Hub, AWS Discovery Service, AWS Database Migration Service (DMS), AWS Server Migration Service (SMS), AWS CloudEndure Migration, AWS Cost Explorer, AWS Trusted Advisor, AWS CloudWatch, AWS Auto Scaling</p>
          </>)
        },
        {
          name: "Cloud Infrastructure Engineering & DevOps",
          description: (<>
            <ul>
              <li>Deployed and configured cloud infrastructure resources such as virtual machines,
                storage volumes, databases, and networking components according to project requirements
              </li>
              <li>Automated infrastructure provisioning tasks using infrastructure as code (IaC) tools
                like Terraform and AWS CloudFormation to ensure consistency and repeatability</li>
              <li>Monitored the performance and health of cloud infrastructure resources using
                monitoring tools and services provided by the cloud provider or third-party solutions
              </li>
              <li>Identified performance bottlenecks, optimized resource utilization, and scaled
                infrastructure resources dynamically to meet changing workload demands and performance
                requirements
              </li>
              <li>Responded to incidents and troubleshot infrastructure issues promptly, diagnosed root
                causes and implemented corrective actions to minimize downtime and service disruptions
              </li>
              <li>Collaborated with cross-functional teams to resolve complex technical issues,
                escalated critical incidents as necessary, and documented resolution procedures for
                future reference</li>
            </ul>
          </>)
        },
        {
          name: "Cloud Security",
          description: (<>
            <ul>
              <li>Developed and enforced security policies and procedures specific to cloud environments, ensuring compliance with industry standards and regulations
              </li>
              <li>Configured access controls, encryption protocols, and network security measures to protect data stored in the cloud</li>
              <li>Performed regular vulnerability assessments and penetration testing (VAPT) to identify and mitigate security risks within cloud infrastructure and applications
              </li>
              <li>Analyzed security logs and conducted threat hunting to identify and respond to potential security incidents proactively

              </li>
              <li>Developed and maintained incident response plans to address security breaches and incidents effectively.

              </li>
              <li>Coordinated with cross-functional teams to investigate security incidents, contain threats, and implemented remediation measures to minimize the impact on cloud resources and data</li>
            </ul>
            <p><span className="font-bold">Tools Used:</span> AWS Identity and Access Management (IAM), Amazon Virtual Private Cloud (VPC), AWS Web Application Firewall (WAF), AWS Key Management Service (KMS), Amazon S3 (Simple Storage Service), AWS Certificate Manager (ACM), AWS CloudTrail, Amazon GuardDuty, Amazon Inspector</p>
          </>)
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
          description: (<>
            <ul>
              <li>Identified all stakeholders involved in the project, including internal team members, clients, vendors, and other relevant parties</li>
              <li>Developed a stakeholder register outlining their roles, responsibilities, interests, and communication preferences</li>
              <li>Conducted stakeholder analysis to understand their influence, level of interest, and potential impact on the project</li>
              <li>Segmented stakeholders into groups based on their level of involvement, support, and influence, tailored communication and engagement strategies accordingly</li>
              <li>Developed a communication plan outlining the objectives, channels, frequency, and content of communication with stakeholders</li>
              <li>Monitored and evaluated stakeholder engagement and satisfaction metrics, tracking key performance indicators (KPIs) such as stakeholder feedback scores, retention rates, and project success criteria</li>
            </ul>
          </>)
        },
        {
          name: "Solution Delivery",
          description: (<>
            <ul>
              <li>Collaborated with sales and product teams to understand customer requirements, objectives, constraints and analyzed customer needs to design technical solutions that seamlessly align with business goals and technical specifications</li>
              <li>Provided technical consulting and advisory services to customers, recommending optimal solutions based on industry best practices and product capabilities</li>
              <li>Developed solution architecture diagrams, technical specifications, and implementation plans to guide and configure software applications and systems according to customer requirements and design specifications</li>
              <li>Integrated third-party systems, APIs, data sources, hardware, software, and infrastructure components for seamless interoperability, supporting deployment with minimal downtime</li>
              <li>Developed documentation, user guides, and instructional materials to facilitate knowledge transfer and adoption of the solution by delivering training sessions and workshops to end-users, administrators, and technical staff on solution features, functionality, and best practices</li>
              <li>Provided technical support throughout implementation, troubleshooting, and escalated complex technical issues to internal teams or vendors for effective and timely resolution</li>
            </ul>
          </>)
        },
        {
          name: "Customer Success",
          description: (<>
            <ul>
              <li>Collaborated with internal teams, including sales, product, and support, to facilitate the onboarding process and address any technical or logistical challenges</li>
              <li>Established and maintained strong relationships with key stakeholders and decision-makers within customer organizations. Served as the primary point of contact for customers, proactively engaging with them to understand their needs, goals, and challenges</li>
              <li>Served as a liaison between customers and support teams, facilitating timely resolution of issues, escalations, and service requests. Drove customer engagement and product adoption by providing guidance, best practices, and training on product features and capabilities</li>
              <li>Monitored customer usage patterns and adoption metrics, identifying opportunities for increased usage and value realization. Gathered feedback from customers through surveys, interviews, and regular check-ins, identifying areas for improvement and product enhancement </li>
              <li>Proactively managed the renewal process, engaging with customers to understand their satisfaction level and address any concerns or objections. Identified opportunities for upselling and cross-selling additional products or services based on customer needs and usage patterns</li>
              <li>Defined key performance indicators (KPIs) and metrics to track customer success and satisfaction, such as Net Promoter Score (NPS), customer health scores, and retention rates</li>
              <li>Generated regular reports and dashboards to communicate customer success metrics, progress towards goals, and actionable insights to internal stakeholders and executives</li>
            </ul>
          </>)
        },
        {
          name: "Implementing Agile at Scale (SAFe®)",
          description: (<>
            <ul>
              <li>Conducted an initial assessment of the organization's current Agile maturity level, culture, and readiness for SAFe adoption</li>
              <li>Identified organizational goals, challenges, and constraints to inform the implementation strategy</li>
              <li>Tailored the SAFe framework to fit the organization's specific needs, industry context, and regulatory requirements</li>
              <li>Customized SAFe roles, artifacts, ceremonies, and processes to align with organizational structure and objectives</li>
              <li>Facilitated Program Increment (PI) planning events to align multiple Agile teams on common objectives, priorities, and dependencies</li>
              <li>Coordinated release train activities, including feature prioritization, backlog grooming, and cross-team collaboration</li>
              <li>Trained and coached executives, managers, and leaders on their roles and responsibilities in supporting SAFe adoption and Agile transformation</li>
            </ul>
          </>)
        },
        {
          name: "Managing Release Train",
          description: (<>
            <ul>
              <li>Facilitated PI planning events, ensuring alignment among Agile teams, stakeholders, and business objectives</li>
              <li>Coordinated logistics, agendas, and preparation activities for PI planning sessions to maximize productivity and effectiveness</li>
              <li>Coordinated and synchronized Agile release trains (ARTs) comprising multiple Agile teams to deliver value incrementally and predictably</li>
              <li>Facilitated cross-team collaboration, communication, and dependency management to ensure successful delivery of program increments</li>
              <li>Collaborated with Product Management and Product Owners to refine and prioritize the program backlog, ensuring alignment with business priorities and customer needs</li>
              <li>Facilitated backlog grooming sessions to clarify requirements, decompose features, and prepare backlog items for inclusion in program increments</li>
            </ul>
          </>)
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
          description: (<>
            <ul>
              <li>Conducted user research through methods such as surveys, interviews, and usability
                testing to understand user needs, goals, and pain points</li>
              <li>Analyzed user feedback, behavior, and demographics to inform design decisions and
                prioritize features based on user requirements
              </li>
              <li>Created user personas representing different user archetypes based on research
                findings, incorporating insights into user goals, motivations, and behaviors</li>
              <li>Used personas to empathize with users, guide design decisions, and ensure alignment
                with user needs throughout the design process</li>
              <li>Developed information architecture (IA) for digital products, including sitemaps,
                navigation structures, and content hierarchies, to ensure intuitive and organized user
                experiences</li>
              <li>Created wireframes and low-fidelity prototypes to visualize and iterate on design
                concepts, layouts, and interactions</li>
              <li>Conducted usability testing with prototypes to gather feedback, validate design
                assumptions, and identify areas for improvement before implementation</li>
            </ul>
          </>)
        },
        {
          name: "System Design & Architecture Experience Design (LXD)",
          description: (<>
            <ul>
              <li>Collaborated with stakeholders, including business users, clients, and subject matter
                experts, to gather and analyze business requirements, objectives, and constraints</li>
              <li>Conducted workshops, interviews, and analysis sessions to elicit and document
                functional and non-functional requirements for the system</li>
              <li>Designed system architectures, including high-level and detailed technical designs,
                that align with business goals, scalability requirements, and technology standards</li>
              <li>Defined system components, modules, interfaces, and integration points to support
                desired functionality, performance, and maintainability</li>
              <li>Evaluated and recommended appropriate technologies, frameworks, and platforms to
                support system development and implementation</li>
              <li>Conducted proof-of-concepts (POCs) and feasibility studies to assess the suitability
                of technology solutions for meeting business needs</li>
            </ul>
          </>)
        },
        {
          name: "GTM Strategy & Pre-sales",
          description: (<>
            <ul>
              <li>Conducted market research to identify target markets, customer segments, and key
                industry trends</li>
              <li>Analyzed competitive landscape, market dynamics, and customer needs to inform GTM
                strategy development</li>
              <li>Developed a comprehensive GTM strategy aligned with business objectives,
                product/service offerings, and target markets</li>
              <li>Defined positioning, messaging, pricing, and distribution channels for effective
                market penetration and customer acquisition</li>
              <li>Developed marketing collateral such as brochures, datasheets, whitepapers, and website
                content to communicate value proposition and differentiation</li>
              <li>Qualified leads based on predefined criteria, conducting initial assessments and
                discovery calls to identify prospects' needs and preferences</li>
              <li>Generated regular reports and dashboards to communicate pre-sales performance,
                pipeline health, and revenue forecasts to senior management and stakeholders</li>
            </ul>
          </>)
        },
        {
          name: "Agile Product Delivery",
          description: (<>
            <ul>
              <li>Collaborated with stakeholders to define and communicate the product vision, strategy,
                and roadmap, aligned with business goals and customer needs</li>
              <li>Established clear objectives, priorities, and success criteria for product development
                and delivery</li>
              <li>Managed the product backlog, including prioritization, refinement, and grooming
                activities, to ensure alignment with business priorities and user needs</li>
              <li>Worked closely with product owners, scrum masters, and development teams to define
                user stories, acceptance criteria, and sprint goals</li>
              <li>Facilitated release planning sessions to define release scope, milestones, and
                delivery schedules in collaboration with cross-functional teams</li>
              <li>Coordinated with development, testing, and deployment teams to ensure smooth and
                timely delivery of product increments and releases</li>
              <li>Identified and mitigated risks, dependencies, and impediments that may impact product
                delivery or quality
              </li>
            </ul>
          </>)
        },
        {
          name: "Product Adoption",
          description: (<>
            <ul>
              <li>Identified key stakeholders, including executives, business leaders, and end-users,
                and built strong relationships to gain buy-in and support for product or technology
                adoption</li>
              <li>Communicated the value proposition, benefits, and impact of the product or technology
                to stakeholders, aligning their expectations and objectives with adoption goals</li>
              <li>Developed a comprehensive change management and adoption strategy and plan to
                facilitate smooth and successful adoption of the product or technology</li>
              <li>Assessed organizational readiness for change, identified potential resistance points,
                and developed mitigation strategies to address barriers to adoption</li>
              <li>Designed and delivered training and enablement programs tailored to different user
                groups and skill levels to build proficiency and confidence in using the product or
                technology
              </li>
              <li>Developed training materials, documentation, and resources, including user guides,
                tutorials, and video tutorials, to support learning and skill development</li>
              <li>Defined key adoption metrics and performance indicators to track progress, measure
                success, and evaluate the impact of adoption efforts</li>
            </ul>
          </>)
        },
        {
          name: "Product Promotion & Marketing",
          description: (<>
            <ul>
              <li>Conducted market research to understand industry trends, competitive landscape, and
                customer needs, identifying opportunities for product promotion and differentiation</li>
              <li>Analyzed market data, customer insights, and competitor strategies to inform product
                positioning, messaging, and marketing strategies</li>
              <li>Defined marketing objectives, KPIs, and budgets, aligning strategies with business
                goals and product roadmap</li>
              <li>Defined and articulated the product value proposition, positioning, and messaging to
                differentiate it from competitors and resonate with target audiences</li>
              <li>Developed compelling product narratives, stories, and use cases to communicate the
                benefits and value of the product to customers and stakeholders</li>
              <li>Created marketing collateral and content assets to support product promotion and sales
                enablement, including brochures, datasheets, presentations, and case studies</li>
            </ul>
          </>)
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
          description: (<>
            <ul>
              <li>Assessed the organization's readiness for change by analyzing factors such as culture,
                leadership support, employee engagement, and existing change capabilities</li>
              <li>Identified potential barriers, resistance points, and readiness gaps that may impact
                the success of change initiatives
              </li>
              <li>Conducted a comprehensive impact analysis to understand the potential effects of
                change on various stakeholders, business processes, systems, and organizational
                structures</li>
              <li>Identified key stakeholders and their roles in the change process, mapping out their
                level of influence and impact on change outcomes</li>
              <li>Developed a stakeholder engagement plan to involve key stakeholders in the change
                process, gain their support, and address their concerns</li>
              <li>Communicated the rationale, vision, and benefits of change to stakeholders through
                various channels, including town hall meetings, workshops, newsletters, and one-on-one
                sessions</li>
              <li>Developed a comprehensive change management strategy and plan that outlines
                objectives, scope, timelines, and key activities for managing change effectively</li>
            </ul>
          </>)
        },
        {
          name: "Training, Communication & Adoption",
          description: (<>
            <ul>
              <li>Conducted training needs assessments to identify knowledge gaps, skill deficiencies,
                business objectives, and training requirements across the organization</li>
              <li>Analyzed business objectives, project goals, and technology changes to determine
                training priorities and learning objectives</li>
              <li>Designed and developed training programs, curricula, and learning paths to address
                identified training needs and support organizational goals</li>
              <li>Created training materials, resources, and documentation, including user guides,
                tutorials, e-learning modules, and instructor-led training (ILT) materials
              </li>
              <li>Delivered training sessions and workshops to employees, managers, and stakeholders on
                various topics, including new technologies, processes, and skills development</li>
              <li>Coordinated training logistics, including scheduling, venue arrangements, equipment
                setup, and participant registration, to ensure smooth and successful training delivery
              </li>
              <li>Managed training resources, materials, and facilities, ensuring availability and
                readiness for training activities</li>
            </ul>
          </>)
        },
        {
          name: "Instructional Design, Technical Curriculum Development & Learning Management",
          description: (<>
            <ul>
              <li>Conducted needs assessments to identify learning objectives, target audience
                characteristics, and skill gaps in technical domains</li>
              <li>Analyzed industry trends, technology advancements, and business requirements to inform
                curriculum development priorities</li>
              <li>Developed a comprehensive curriculum framework that outlines learning objectives,
                competencies, and learning pathways for technical training programs</li>
              <li>Developed instructional materials, course content, and learning resources, including
                presentations, labs, exercises, and assessments</li>
              <li>Created multimedia content, such as videos, simulations, and interactive tutorials, to
                enhance learning engagement and effectiveness</li>
              <li>Applied instructional design methodologies, models, and principles (e.g., ADDIE, SAM)
                to design effective and engaging learning experiences</li>
              <li>Utilized instructional design tools and technologies, such as learning management
                systems (LMS), authoring tools, and virtual labs, to develop and deliver technical
                training content</li>
            </ul>
          </>)
        }
      ]
    }
  ];

  const [activeDomain, setActiveDomain] = useState(domains[0].id);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveDomain(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    domains.forEach((domain) => {
      const element = document.getElementById(domain.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Title Section */}
      <section className="bg-[#f4f4f4] pt-32 pb-12">
        <div className="container">
          <h1 className="text-black text-3xl md:text-4xl font-bold">Technical Experience</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-12">
            {/* Left Sidebar - Domains */}
            <div className="md:sticky md:top-28 md:self-start hidden md:block">
              <h3 className="text-primary text-xl font-bold mb-6">Domains</h3>
              <ul className="space-y-6">
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
                      className={`text-sm lg:text-base text-left w-full transition-colors ${activeDomain === domain.id
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
                  className="shadow-[0_4px_12px_0_rgba(0,0,0,0.078)] p-6 scroll-mt-32 rounded-xl"
                >
                  {/* Domain Title with Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <img src={domain.icon} alt={domain.title} className="h-8 w-8 object-contain" />
                    <h4 className="text-lg font-bold text-primary">{domain.fullTitle}</h4>
                  </div>

                  {/* Skills Accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    {domain.skills.map((skill, idx) => (
                      <AccordionItem key={idx} value={`${domain.id}-${idx}`} className="border-b border-border">
                        <AccordionTrigger className="text-left text-base font-bold text-black hover:no-underline py-6">
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
