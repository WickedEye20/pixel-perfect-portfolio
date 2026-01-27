import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fortune500Projects from "@/components/Fortune500Projects";
import waltcorp from "@/assets/work_exp/waltcorp.png";
import deloitte from "@/assets/work_exp/deloitte.png";
import certimap from "@/assets/work_exp/certimap.png";
import cgi from "@/assets/work_exp/cgi.png";
import lm from "@/assets/work_exp/lm.png";
import gmu from "@/assets/work_exp/vts.png";
import vts from "@/assets/work_exp/gmu.png";

const WorkExperience = () => {
    const list_style = "relative before:absolute before:w-1.5 before:h-1.5 before:top-1 before:left-0 before:bg-primary before:rounded-full pl-4";
    const positions = [
        {
            id: "waltcorp",
            title: "Sr. Product Manager - GTM & Sales Enablement",
            company: "Waltcorp",
            logo: waltcorp,
            responsibilities: (<>
                <ul className="space-y-3">
                    <li className={list_style}> Led environment migration from GCP to AWS, optimizing resources, ensuring seamless test-to-production application deployment

                    </li>
                    <li className={list_style}>
                        Led technical pre-sales including delivering solution demos, developing proof-of-concepts (PoCs), and conducted technical workshops
                    </li>
                    <li className={list_style}>
                        Optimized Amazon CloudFront and Route 53 services of the learning
                        management system LMS backend to stream low latency HD video content
                    </li>
                    <li className={list_style}>
                        Enabled sales and business development teams and processes to generate and convert leads into profitable clients
                    </li>

                </ul>
            </>)
        },
        {
            id: "deloitte",
            title: "Global Engagement & Product Training Lead",
            company: "Deloitte Consulting",
            logo: deloitte,
            responsibilities: (<>
                <p className="mb-3">Led and managed a cross-continent Engagement, Training & Adoption program focusing on technical enablement of 10+ Fortune 500 client teams</p>
                <ul className="space-y-3">
                    <li className={list_style}>
                        Strategized and steered global Skill &amp; Certification Management
                        initiative for imparting AI, ML, NLP, MLOps and ML Engineering training
                        customized to meet the persona-specific organizational development needs
                    </li>
                    <li className={list_style}>
                        Engineered MLOps, NLP use cases and curriculum to nurture existing
                        client relationships, attract prospective customers and build sales
                        pipelines
                    </li>
                    <li className={list_style}>
                        Advised and engaged critical clients and vendors on how to efficiently
                        leverage organic IP/ platform for maximizing their profitability
                    </li>
                    <li className={list_style}>
                        Trained and enabled engineering, pre-sales, customer success and MarCom
                        teams on product technicalities and onboarded 1000+ professionals
                    </li>
                </ul>
            </>)
        },
        {
            id: "certimap",
            title: "Technical Product Manager - GTM & Pre-Sales Enablement",
            company: "Certimap",
            logo: certimap,
            responsibilities: (<>
                <p className="mb-3">Managed, mentored, and guided five scrum teams to develop and deliver software (LMS), curriculum, and e-learning products for a cloud-based SaaS business aligned to the enterprise product strategy and organizational vision</p>
                <ul className="space-y-3">
                    <li className={list_style}> Acted as the lead product owner and architected end-to-end system
                        (LMS), including frontend, backend, DB, microservices, and deployment
                        infrastructure
                    </li>
                    <li className={list_style}>
                        Liaised with sponsors, change leaders, change champions, power users and
                        defined business product roadmap, and transformation goals
                    </li>
                    <li className={list_style}>
                        Optimized Amazon CloudFront and Route 53 services of the learning
                        management system LMS backend to stream low latency HD video content
                    </li>
                    <li className={list_style}>
                        Oversaw the technical architecture and AI Solution
                        engineering through the entire project/product lifecycle to ensure the health of project KPIs and OKRs
                    </li>
                    <li className={list_style}>
                        Partnered closely with engineering and DevOps teams to create user roles
                        and security groups for identity and access management (IAM) of premium
                        and free users of the product
                    </li>
                    <li className={list_style}>
                        Developed and implemented a detailed and well-differentiated
                        go-to-market (GTM) strategy and positioned e-learning products
                        strategically
                    </li>
                    <li className={list_style}> Enabled pre-sales and business development teams generate and convert
                        leads worth USD 200,000 in a span of 12 months and achieve sustained
                        product adoption </li>
                </ul>
            </>)
        },
        {
            id: "cgi",
            title: "Senior Consultant - OCM, Curriculum & Product Adoption",
            company: "CGI",
            logo: cgi,
            responsibilities: (<>
                <p className="mb-3">Developed, designed, delivered systems training on advanced digital systems being integrated with client operations on a large scale digital transformation and organizational change management project.</p>
                <ul className="space-y-3">
                    <li className={list_style}>
                        Designed, developed, and deployed engaging e-learning courses on ARM (a
                        CGI patented SaaS application) using Articulate 360, Vyond and
                        SharePoint.
                    </li>
                    <li className={list_style}>
                        Collected, processed, and transformed users' psychometric and learning
                        performance data based on strategically designed exit surveys, end of
                        class questionnaire and pop-up quizzes for 500+ classroom learners.
                    </li>
                    <li className={list_style}>
                        Defined metrics, collected strategic KPI data to measure effectiveness
                        of systems integration, technical training, communication and share
                        useful insights with development, testing and OCM teams.
                    </li>
                    <li className={list_style}>
                        Developed Tableau dashboards as decision support systems for
                        decision making for effectiveness enhancement initiatives by training
                        implementation team.
                    </li>
                    <li className={list_style}>
                        Trained &amp; consulted client employees through deployment of ARM packages
                        to manage gas and electric assets to adapt through digital
                        transformation for effective management of assets installed in NYC.
                    </li>
                    <li className={list_style}>
                        Spearheaded data driven change adoption analytics by developing rich
                        dashboards in Tableau to report effectiveness of digital change adoption
                        at Con Edison on a multi-million-dollar Digital Transformation project.
                    </li>
                </ul>
            </>)
        },
        {
            id: "lm",
            title: "Machine Learning Engineer",
            company: "Lockheed Martin",
            logo: lm,
            responsibilities: (<>
                <p className="mb-3">The project was sponsored by Lockheed Martin to Systems Engineering and Operations Research Department of Volgenau School of Engineering, GMU. The research was conducted in collaboration with Lockheed Martin experts and graduate students of Volgenau School of Engineering.</p>
                <ul className="space-y-3">
                    <li className={list_style}>
                        Modelled a decision support system (DSS) in collaboration with Lockheed
                        Martin experts using Machine Learning
                        on AIS/ GPS data (5 million entries) availed from Global Fishing Watch
                        and Planet Labs. The DSS can assist law
                        enforcement in identification and tracking of vessels conducting illegal
                        fishing.
                    </li>
                    <li className={list_style}>
                        Trained Generalised Linear Model (GLM) with gradient boosting which gave
                        a Gini index of 0.955.
                    </li>
                    <li className={list_style}>
                        Used Monte Carlo simulation to predict the path of the vessel once
                        intercepted in the restricted area.
                    </li>
                    <li className={list_style}>
                        Tested other models like Random Forest on the AIS/GPS data to enhance
                        the accuracy of prediction of illegal fishing activity.
                    </li>
                </ul>
            </>)
        },
        {
            id: "gmu",
            title: "Web Developer & Trainer",
            company: "Volgenau School of Engineering, George Mason University",
            logo: gmu,
            responsibilities: (<>
                <p className="mb-3">Responsive Web Design(RWD) has become an ineluctable need for any industry. RWD is enabled by dexterous use of technologies like CSS, HTML5, JavaScript etc. Animation and Motion Graphics are at the soul of Rich Internet Applications(RIAs). I worked as a Graduate Teaching Assistant for courses IT 123, Multimedia & Web Design and IT 315, Mobile Application Development (Swift for iOS).</p>
                <p className="mb-3">As a Graduate Teaching Assistant at Volgenau School of Engineering, George Mason University, my responsibilities were as follows:</p>
                <ul className="space-y-3">
                    <li className={list_style}>
                        Taught and graded undergraduate students of Computer Science and IT in
                        Responsive Web Design(RWD)</li>
                    <li className={list_style}>
                        Developed technical curriculum for SWIFT, Obj C, Web Design etc.
                        Interacted with students via online and
                        in person help sessions to resolve their technical queries.</li>
                    <li className={list_style}>
                        Conducted quizzes, formative and summative exams to evaluate the
                        learning effectiveness.
                    </li>
                </ul>
            </>)
        },
        {
            id: "vts",
            title: "Technical Curriculum Developer",
            company: "Vidyatech Solutions, Noida, India",
            logo: vts,
            responsibilities: (<>
                <p className="mb-3">Vidyatech, a company led and managed by IIT-IIM alumni, builds world class cloud based solutions in the areas of Content Technology, CMS, SharePoint Applications, Data & Web Analytics, Mobility, Cyber Security, IT infrastructure, Application Development, IOT and provides Managed Services for global giants like Microsoft, Symantec, Pearson, Thomson Reuters, NIIT, Wipro to name a few.</p>
                <p className="mb-3">Key highlights of projects I undertook as an Senior Consultant - Instructional Design at Vidyatech, include the following:</p>
                <ul className="space-y-3">
                    <li className={list_style}>
                        Developed ILT and WBT modules for Fortune 500 giants like Symantec,
                        Microsoft Corporation using advanced principles of Instructional Design.
                    </li>
                    <li className={list_style}>
                        Authored market research report on "Global Analytics Market".</li>
                    <li className={list_style}>
                        Reviewed content on Cyber Security developed by SMEs (Subject Matter
                        Experts).
                    </li>
                    <li className={list_style}>
                        Designed and storyboarded problem, game, scenario based learning.
                    </li>
                    <li className={list_style}>
                        Wrote technical modules on Cyber Security for Students and Trainers.
                    </li>
                </ul>
            </>)
        }
    ];

    const [activePosition, setActivePosition] = useState(positions[0].id);
    const activeJob = positions.find(p => p.id === activePosition) || positions[0];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActivePosition(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        positions.forEach((position) => {
            const element = document.getElementById(position.id);
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
                    <h1 className="text-black text-3xl md:text-4xl font-bold">Work Experience</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-12">
                        {/* Left Sidebar - Positions */}
                        <div className="md:sticky md:top-28 md:self-start hidden md:block">
                            <h3 className="text-primary text-xl font-bold mb-6">Positions</h3>
                            <ul className="space-y-6">
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
                                            className={`text-sm lg:text-base text-left w-full transition-colors ${activePosition === position.id
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
                                    <div id={job.id} key={job.id} className="shadow-[0_4px_12px_0_rgba(0,0,0,0.078)] p-6 scroll-mt-32 rounded-xl">
                                        {/* Company Logo and Title */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src={job.logo} alt={job.company} className="object-contain" />
                                            <h3 className="text-xl font-semibold text-primary">{job.company}</h3>
                                        </div>

                                        <hr className="bg-[#ECECF1] my-6" />

                                        {/* Role Title */}
                                        <h4 className="text-base font-bold text-black mb-4">{job.title}</h4>

                                        {/* Responsibilities */}
                                        <div className="text-sm text-muted-foreground">
                                        {job.responsibilities}
                                        </div>

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
