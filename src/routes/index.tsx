import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section, CardGrid } from "@/components/portfolio/Section";
import { Skills } from "@/components/portfolio/Skills";
import { Connect } from "@/components/portfolio/Connect";
import { Footer } from "@/components/portfolio/Footer";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import { HackathonCard } from "@/components/portfolio/HackathonCard";
import { Conferences } from "@/components/portfolio/Conferences";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AIConepts from "@/assets/ai-concepts.png";
import Backend from "@/assets/backend-temp.png";
import Cpp from "@/assets/c++.png";
import CloudComputing from "@/assets/cloud-computing.png";
import DescribeCloudComputing from "@/assets/describe-cloud-computinng.png";
import DesignThinking from "@/assets/design-thinking-a-premier.png";
import GIS from "@/assets/gis.png";
import MongoDB from "@/assets/introduction-to-mongo-db.png";
import Oracle from "@/assets/oracle.png";
import PythonForDataScience from "@/assets/python-for-data-science.png";
import cognizant from "@/assets/cognizant.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sangithaa Sri K — Agentic AI Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sangithaa Sri K — Agentic AI Engineer, ML and Full Stack Developer building intelligent, scalable real-world systems.",
      },
    ],
  }),
});

const certifications = [
  {
    tag: "MICROSOFT",
    title: "Introduction to AI Concepts",
    description: "Microsoft",
    image: AIConepts,
  },
  {
    tag: "MICROSOFT",
    title: "Describe Cloud Computing",
    description: "Microsoft",
    image: DescribeCloudComputing,
  },
  { tag: "INFOSYS", title: "C++", description: "Infosys", image: Cpp },
  {
    tag: "AWS",
    title: "Backend Web Developement",
    description: "AWS Community Builders",
    image: Backend,
  },
  {
    tag: "MONGODB",
    title: "Introduction to MongoDB for Students",
    description: "MongoDB",
    image: MongoDB,
  },
  {
    tag: "ORACLE",
    title: "Oracle Certified Professional",
    description: "Oracle",
    image: Oracle,
  },
  {
    tag: "NPTEL",
    title: "Cloud Computing",
    description: "NPTEL",
    image: CloudComputing,
  },
  {
    tag: "NPTEL",
    title: "Python For Data Science",
    description: "NPTEL",
    image: PythonForDataScience,
  },
  {
    tag: "NPTEL",
    title: "Design Thinking",
    description: "NPTEL",
    image: DesignThinking,
  },
  {
    tag: "NPTEL",
    title: "Geographical Information Systems",
    description: "NPTEL",
    image: GIS,
  },
];

const projects = [
  {
    tag: "AUTOMATION",
    title: "SMART NCRP COMPLAINT AUTOMATION SYSTEM",
    description:
      "This system extract and consolidate cybercrime complaint data from CSV, Excel, and PDF files into a centralized database. Improved efficiency and reduced manual errors through automated data processing and structured data management.",
    link: "https://github.com/sangithaasrikalaiselvan/ncrp-complaints",
  },
  {
    tag: "HEALTHCARE AI",
    title: "CAREFLOW AI",
    description:
      "This system is a predictive healthcare system that analyzes real-time patient data to assess risks and optimize hospital resource allocation proactively.",
    link: "https://github.com/sangithaasrikalaiselvan/careflow-ai",
  },
  {
    tag: "PREDICTIVE ML",
    title: "CAREFLOW SENTINAL",
    description:
      "Developed an ML powered multi-hospital outbreak prediction system with PostgreSQL aggregation, heatmaps, and automated alerts.",
    link: "https://github.com/sangithaasrikalaiselvan/Outbreak",
  },
  {
    tag: "AI SYSTEMS",
    title: "SMART SATELLITE OPTIMIZATION",
    description:
      "Smart Satellite Optimization is an AI-based system that improves satellite communication efficiency through intelligent data processing and resource management. It uses predictive analytics to reduce delays, enhance performance, and ensure reliable network operations.",
    link: "https://github.com/sangithaasrikalaiselvan/mission-control-hub",
  },
  {
    tag: "FRAUD DETECTION",
    title: "FAKE INSURANCE CLAIM DETECTION SYSTEM",
    description:
      "Developed a fraud detection system to identify fake hospital insurance claims using data analysis techniques.",
    link: "https://github.com/sangithaasrikalaiselvan/Fake-insurance-claims",
  },
  {
    tag: "DEEP LEARNING",
    title: "DEEPFAKE FACE DETECTION SYSTEM",
    description:
      "Deepfake Face Detection Model is an AI system that detects fake or manipulated faces in images and videos. It uses deep learning to identify inconsistencies and prevent identity fraud.",
    link: "https://github.com/sangithaasrikalaiselvan/deepfake-detection-model",
  },
  {
    tag: "MONITORING",
    title: "REAL-TIME CPU MONITORING",
    description:
      "Developed a real-time Python dashboard to monitor CPU temperature, visualize live metrics, and trigger threshold-based alerts using a JSON API.",
    link: "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_realtimedata-cpumonitoring-visualizations-activity-7352648683764551680-HgBd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqf1WkBb_atwaF2VXMuMDAx-GktCFHBPq0",
    linkText: "View on LinkedIn",
  },
];

const hackathons = [
  {
    title: "Cognizant Technoverse Hackathon 2025",
    details: "Shortlisted among the ⭐ Top 1,000 teams from 4,000+ participants nationwide.",
    description: [
      "Developed Orca, an AI-powered multi-agent healthcare workflow automation platform.",
      "Advanced to the ABC Challenge Round and designed the solution workflow using LangGraph.",
      "Built intelligent healthcare automation for documentation, emergency handling, and insurance claim optimization.",
      "Leveraged Agentic AI, Multi-Agent Systems, LangGraph, and LLM-based orchestration to address real-world healthcare challenges.",
    ],
    techStack:
      "LangGraph • Agentic AI • Python • LLMs • Multi-Agent Systems • Workflow Automation • RAG • API Integration",
    link: "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_cognizanttechnoverse2026-hackathonlife-aibuilders-activity-7453848172503699456-l0Cg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqf1WkBb_atwaF2VXMuMDAx-GktCFHBPq0",
    linkText: "View on LinkedIn",
    certificate: cognizant,
  },
  {
    title: "CodeCraft’25",
    details:
      "WEB APPLICATION DEVELOPMENT – 24-Hour Hackathon | 📍 Sri Sai Ram Engineering College | 🏆 Top 11 / 100 Participants | ⭐ Best Novelty Recognition",
    description: [
      "Built a web + mobile fitness monitoring prototype with real-time tracking, AI-based workout verification, gamification, and analytics.",
      "Developed role-based dashboards, authentication systems, progress tracking, and notification features with a modern UI/UX approach.",
      "Collaborated using Git & GitHub workflows in a fast-paced hackathon environment.",
    ],
    techStack:
      "React.js • Tailwind CSS • Node.js • Express.js • Firebase/MongoDB • AI/ML • Git & GitHub • VS Code",
  },
  {
    title: "OOTY HACKATHON 2026",
    details: "AI-Powered NCRP Complaint System | 📍 CSI Engineering College | 🏆 Shortlisted as Top 25 Teams for the Finale",
    description: [
      "Developed an AI-powered fully automated cybercrime complaint platform inspired by NCRP with advanced intelligent features.",
      "Built a smart AI chatbot for real-time complaint assistance, automated complaint categorization, and multilingual user interaction.",
      "Integrated Generative AI and NLP for intelligent query handling, fraud detection, scam pattern analysis, and personalized recommendations.",
      "Designed a secure and user-friendly system that simplifies cybercrime complaint registration with step-by-step automated guidance.",
      "Focused on reducing manual dependency and improving accessibility, efficiency, and awareness in cybercrime reporting.",
      "Planned future-ready enhancements including Voice Assistant and OCR-based integrations.",
    ],
    techStack:
      "React.js • Tailwind CSS • Node.js • Express.js • Python • MongoDB/Firebase • Generative AI • Machine Learning • Deep Learning • NLP • Git & GitHub",
    link: "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_cyberhackathon-nilgirispolice-activity-7426147098754027520-ZUnH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqf1WkBb_atwaF2VXMuMDAx-GktCFHBPq0",
    linkText: "View on LinkedIn",
  },
  {
    title: "PRAGYAN HACKATHON 2026",
    details: "AI-Powered Smart Triage System | 📍 Kanini Software Solutions",
    description: [
      "Developed an AI-powered healthcare triage web application designed to analyze patient symptoms and medical history for intelligent risk assessment.",
      "Built a system capable of classifying patients into Low, Medium, and High-risk categories while recommending the appropriate medical department.",
      "Integrated Machine Learning models for patient risk prediction and AI explainability for transparent medical insights.",
      "Designed features supporting real-time patient prioritization, hospital resource optimization, and reduced waiting time.",
      "Implemented a hybrid AI approach combining ML-based prediction, rule-based department assignment, and explainable AI outputs.",
      "Focused on improving hospital efficiency, emergency response prioritization, and data-driven healthcare support systems.",
    ],
    techStack:
      "React (Vite + TypeScript) • Tailwind CSS • FastAPI • Python • REST APIs • XGBoost • Machine Learning • Predictive Analytics • JWT Authentication • Recharts/Chart.js • Structured Data Storage • Git & GitHub • VS Code",
  },
  {
    title: "IMPACT-AI-THON 2026",
    details: "CAREFLOW SENTINEL – AI Outbreak Prediction & Healthcare Intelligence Platform | 📍 St. Josephs Engineering college",
    description: [
      "Developed CareFlow Sentinel, an AI-powered outbreak prediction platform designed to monitor, analyze, and predict disease outbreaks across multiple regions using real-time healthcare analytics.",
      "Built an intelligent system capable of detecting outbreak clusters, district-level risk patterns, hospital load distribution, and climate-based disease spread analysis.",
      "Integrated predictive analytics and ML-based risk scoring to identify high-risk zones, generate alerts, and support faster healthcare response planning.",
      "Designed real-time dashboards for hospital monitoring, patient triage analytics, ICU/bed forecasting, and outbreak visualization across regions.",
      "Implemented AI-driven alert systems, district heatmaps, predictive trend analysis, and healthcare resource optimization modules.",
      "Focused on improving outbreak preparedness, emergency healthcare coordination, and data-driven public health monitoring.",
    ],
    techStack:
      "React (Vite + TypeScript) • Tailwind CSS • FastAPI • Python • REST APIs • Pydantic • Uvicorn • XGBoost • Machine Learning • Predictive Analytics • NLP • JWT Authentication • Recharts / Chart.js • SSE Real-Time Streaming • Structured Data Storage • GeoJSON Heatmaps • Git & GitHub • VS Code",
  },
  {
    title: "TNWISE HACKATHON 2026",
    details: "Smart Satellite Optimization System | 📍Rajalakshmi engineering college",
    description: [
      "Developed a smart satellite optimization and resource management platform designed to efficiently schedule satellite operations and optimize onboard resource utilization.",
      "Built an intelligent task scheduling system capable of prioritizing satellite activities, managing bandwidth/resources, and improving operational efficiency in real time.",
      "Integrated predictive analytics to monitor satellite health status and estimate the operational lifetime of satellites using AI-driven analysis.",
      "Designed interactive dashboards for satellite monitoring, task scheduling, resource allocation, health analytics, and system performance tracking.",
      "Implemented backend services for task orchestration, scheduling logic, health prediction models, and secure resource management.",
      "Focused on improving satellite efficiency, reducing resource conflicts, and enabling data-driven optimization for space operations.",
    ],
    techStack:
      "Frontend: React.js • Tailwind CSS • TypeScript/JavaScript • Responsive Dashboard UI • Chart.js/Recharts • REST API Integration | Backend: Node.js • Express.js • Python • REST APIs • Scheduling Algorithms • Resource Optimization Logic • Predictive Analytics | Database: PostgreSQL",
    link: "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_tnwise-rec-hackathon-activity-7446480149451223040-Qcho?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqf1WkBb_atwaF2VXMuMDAx-GktCFHBPq0",
    linkText: "View on LinkedIn",
  },
  {
    title: "SIH 2024",
    details: "Deepfake Face Detection System | ✨ Selected at the Intercollege Level✨",
    description: [
      "Developed an AI-powered deepfake face detection system capable of identifying manipulated facial content in images and videos.",
      "Implemented EfficientNet-based deep learning architecture for high-accuracy fake face classification and facial authenticity verification.",
      "Integrated computer vision techniques for face detection, preprocessing, feature extraction, and anomaly analysis.",
      "Built a scalable detection pipeline capable of analyzing facial inconsistencies and detecting AI-generated manipulations in real time.",
      "Focused on improving cybersecurity, media verification, and digital content authenticity using AI-driven detection models.",
    ],
    techStack:
      "Python • EfficientNet • TensorFlow/Keras • OpenCV • Deep Learning • Computer Vision • NumPy • Pandas • Flask/FastAPI • Git & GitHub • VS Code",
  },
  {
    title: "SIH 2025",
    details: "Student Hub: AI-Powered Academic Guidance Platform",
    description: [
      "Developed Student Hub, an AI-powered student assistance platform designed to guide students throughout their academic journey with personalized support and intelligent activity tracking.",
      "Built features for academic progress monitoring, student activity tracking, burnout prediction, productivity analysis, and daily AI-based recommendations.",
      "Integrated predictive analytics and machine learning models to identify student stress levels, burnout risks, and learning performance patterns.",
      "Designed interactive dashboards for attendance tracking, task management, academic insights, and personalized student guidance.",
      "Implemented AI-driven recommendation systems providing daily study suggestions, wellness guidance, productivity tips, and academic improvement strategies.",
      "Focused on improving student productivity, mental well-being, academic performance, and smart educational assistance through intelligent automation.",
    ],
    techStack:
      "Frontend: React.js • Tailwind CSS • TypeScript/JavaScript • Responsive Dashboard UI • Chart.js/Recharts • REST API Integration | Backend: Node.js • Express.js • Python • REST APIs • Authentication & Activity Tracking Services | AI / ML Technologies: Machine Learning • Predictive Analytics • Burnout Prediction Models • Recommendation Systems • NLP • Behavioral Analytics",
  },
];

const achievements = [
  { tag: "AWARD", title: "🏆 ₹10K Academic Excellence Award", description: "Recognized for outstanding academic performance." },
  { tag: "AWARD", title: "🏆 Novelty Prize Winner – AI Solutions", description: "Awarded for innovative AI-driven solutions." },
  { tag: "AWARD", title: "🏆 Student Coordinator Award – 2026", description: "Honored for leadership and coordination in student activities." },
  { tag: "AWARD", title: "🏆 Club Activity Prize Winner", description: "Winner of the prize for active participation in club events." },
  { tag: "AWARD", title: "🥇 NPTEL Elite Medal Achiever (2024,2025,2026)", description: "Achieved Elite Medal status in NPTEL courses for three consecutive years." },
  { tag: "AWARD", title: "🏆 Top 3 Ideathon Winner", description: "Secured a top 3 position in a competitive ideathon." },
];

function Index() {
  console.log("DEPLOYMENT TEST 999");
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />

        <Section id="certifications" eyebrow="01 / Credentials" title="Certifications">
          <CardGrid items={certifications} />
        </Section>

        <Section id="projects" eyebrow="02 / Selected Work" title="Projects">
          <CardGrid items={projects} />
        </Section>

        <Section id="experience" eyebrow="03 / Professional" title="Experience">
          <ExperienceSection />
        </Section>

        <Section id="hackathons" eyebrow="04 / Competing" title="Hackathons">
          <HackathonCard items={hackathons} />
        </Section>

        <Section id="achievements" eyebrow="05 / Recognition" title="Achievements">
          <CardGrid items={achievements} />
        </Section>

        <Section id="conferences" eyebrow="06 / Publications" title="Conferences">
          <Conferences />
        </Section>

        <Section id="skills" eyebrow="07 / Tech Stack" title="Skills">
          <Skills />
        </Section>

        <Section id="connect" eyebrow="08 / Get in Touch" title="Let’s Connect">
          <Connect />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
