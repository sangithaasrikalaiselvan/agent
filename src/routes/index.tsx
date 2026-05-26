import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section, CardGrid } from "@/components/portfolio/Section";
import { Skills } from "@/components/portfolio/Skills";
import { Connect } from "@/components/portfolio/Connect";
import { Footer } from "@/components/portfolio/Footer";

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
  { tag: "GOOGLE", title: "Generative AI Specialization", description: "Foundations of LLMs, prompt engineering, and responsible AI." },
  { tag: "IBM", title: "Applied Data Science", description: "End-to-end data pipelines, analytics, and visualization." },
  { tag: "AWS", title: "Cloud Practitioner", description: "Cloud architecture, deployment, and ML services on AWS." },
  { tag: "DEEPLEARNING.AI", title: "Deep Learning Specialization", description: "CNNs, RNNs, transformers, and model optimization." },
  { tag: "MICROSOFT", title: "Azure AI Fundamentals", description: "Cognitive services, ML studio, and AI governance." },
  { tag: "NVIDIA", title: "Computer Vision with CUDA", description: "GPU-accelerated CV pipelines and real-time inference." },
];

const projects = [
  { tag: "AGENTIC AI", title: "Autonomous Research Agent", description: "Multi-agent LLM system that plans, browses and synthesizes research papers." },
  { tag: "COMPUTER VISION", title: "Smart Parking System", description: "Real-time vehicle detection and slot allocation using YOLOv8 and edge inference." },
  { tag: "DEEP LEARNING", title: "Deepfake Detection", description: "CNN + attention pipeline classifying tampered videos at 96% accuracy." },
  { tag: "NLP", title: "Medical Chat Assistant", description: "RAG assistant grounded on clinical PDFs with citation-backed answers." },
  { tag: "FULL STACK", title: "AI Resume Builder", description: "React + Node app that generates ATS-optimized resumes via GPT pipelines." },
  { tag: "ML OPS", title: "Model Drift Monitor", description: "Dashboard tracking model accuracy and feature drift across deployments." },
];

const hackathons = [
  { tag: "SMART INDIA HACKATHON", title: "Winner — Healthcare AI", description: "Built a triage assistant adopted by a state health department prototype." },
  { tag: "HACK THE FUTURE", title: "Top 10 — Agentic Apps", description: "Designed an autonomous customer-support agent with tool use and memory." },
  { tag: "ETHIC AI HACK", title: "Best Innovation", description: "Bias audit toolkit for production LLM applications." },
];

const achievements = [
  { tag: "PUBLICATION", title: "IEEE Conference Paper", description: "Co-authored research on agentic LLM orchestration patterns." },
  { tag: "LEADERSHIP", title: "AI Club President", description: "Led a 200+ member developer community and weekly workshops." },
  { tag: "SCHOLARSHIP", title: "Merit Excellence Award", description: "Recognized for academic and project performance across 4 semesters." },
  { tag: "SPEAKER", title: "Tech Conference Talk", description: "Keynote on 'Building Agents that Actually Ship' at a regional summit." },
];

function Index() {
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

        <Section id="hackathons" eyebrow="03 / Competing" title="Hackathons">
          <CardGrid items={hackathons} />
        </Section>

        <Section id="achievements" eyebrow="04 / Recognition" title="Achievements">
          <CardGrid items={achievements} />
        </Section>

        <Section id="skills" eyebrow="05 / Tech Stack" title="Skills">
          <Skills />
        </Section>

        <Section id="connect" eyebrow="06 / Get in Touch" title="Let’s Connect">
          <Connect />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
