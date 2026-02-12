import cloud_engineering_img from "../assets/skills/cloud_engg.svg";
import data_science_img from "../assets/skills/data_science.svg";
import bi_data_img from "../assets/skills/bi_data.svg";
import process_management_img from "../assets/skills/project_management.svg";
import team_efficiency from "../assets/skills/team_efficiency.svg";
import tech_project_img from "../assets/skills/tech_project.svg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TechSkills = () => {
  const skills = [
    {
      icon: bi_data_img,
      title: "BI & Data Analytics",
      description: " Data Manipulation, Querying Databses, Data Ingestion, Data Preparation, Forecasting, DW, ETL & BI, Risk Analytics, Technical Stock Analysis, Healthcare Analytics, Data Quality Report, Defining KPIs, SQL Reporting, Tableau, Advanced Excel, Streaming Analytics: Kafka, Spark, Data Serialization Formats: JSON, Avro, Parquet, Data Security & Compliance; GDPR, CCPA, HIPPA, ML Integration",
      slug: "bi-data-analytics",
    },
    {
      icon: data_science_img,
      title: "Data Science & AI",
      description: "Python, NumPy, pandas, NLTK, Kira, Word2Vec, TF-IDF, TensorFlow, AWS Textract, scikit-learn, PyTorch, Chat-GPT, LLMs, Generative Adversarial Networks (GANs), ANN, RNN, CNN AutoML, MLOps, Recommender Systems, GenAI, Reinforcement Learning, Explainable AI, MLFlow, Kubeflow, Kubernetes, Docker, ML Pipeline Orchestration, Evidently, Grafana",
      slug: "data-science-ai",
    },
    {
      icon: cloud_engineering_img,
      title: "Cloud Engineering",
      description: "Identity & Access Management (IAM), EC2, Simple Storage Service (S3), Rekognition, SageMaker, Lambda, ECS/EKS, Elastic MapReduce (EMR), Relational Database Service (RDS), Amazon Redshift, DynamoDB, Virtual Private Cloud (VPC), Route 53, Simple Queue Service (SQS), Simple Notification Service (SNS), CloudWatch, CloudFormation, Amazon API Gateway, Elastic Beanstalk (EBS)",
      slug: "cloud-engineering",
    },
    {
      icon: process_management_img,
      title: "Project & Program Management",
      description: " Lean Agile Leadership, Scaled Agile (SAFe®), Project Scope, Cost Estimation, Budgeting, and Financial Forecasting, Technical Account Management, Requirements Gathering, Resource Allocation, Scheduling, Solution Delivery, Business Process Improvement, SDLC, Sprint planning, Daily Scrum, Cycle Time Reduction, Risk Management, Continuous Process Improvement",
      slug: "project-program-management",
    },
    {
      icon: tech_project_img,
      title: "Technical Product Management",
      description: "Continuous Exploration, User Centred Design (UCD), Feature - User Story mapping, Feature Prioritization, Product Requirements Documentation (PRD), Launch Strategy, Product Operationalization, Go to Market & MarCom initiatives, Defining & Measuring KPIs, Surveying, Product Families & Portfolio, Product Lifecycle Management (PLM)",
      slug: "technical-product-management",
    },
    {
      icon: team_efficiency,
      title: "GTM, Pre-Sales & Adoption Engineering",
      description: "Solution Architecture, MQL Analysis, Use Case Engineering, Competitor Analysis, PoC Development, Stakeholder Alignment, Launch Strategy, Lead Discovery, Pricing Strategy, Tracking & Reporting KPIs, B2B, B2C & B2G Models, RFP/ RFI/ Bid Response Management, Proposal Writing, Contract, SLAs & Compliance Management, AIDA, ICP Mapping, Change Management, Client Engagement",
      slug: "organizational-change-management",
    },
  ];

  return (
    <section id="skills" className="py-10 md:py-24 scroll-mt-32">
      <div className="container text-center">
        <h2 className="section-title text-foreground">Tech Skills</h2>

        {/* 🔹 Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="p-3 pb-10 ">
                <div className="skill-card">
                  <div className="flex flex-col gap-3 mb-4">
                    <img src={skill.icon} className="w-20 h-20 mx-auto" />
                    <h5 className="font-semibold text-foreground">
                      {skill.title}
                    </h5>
                  </div>
                  <p className="text-muted-foreground text-base">
                    {skill.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="flex flex-col gap-3 mb-4">
                <img src={skill.icon} className="w-20 h-20 mx-auto" />
                <h5 className="font-semibold text-foreground">{skill.title}</h5>
              </div>
              <p className="text-muted-foreground text-base mb-6">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
