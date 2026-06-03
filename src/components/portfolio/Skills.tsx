import { motion } from "framer-motion";
import {
  SiPython, SiReact, SiTensorflow, SiNodedotjs, SiTailwindcss, SiJavascript, SiMysql,
  SiPandas, SiNumpy, SiMongodb, SiGithub
} from "react-icons/si";
import { Brain, Cpu, Eye, GitBranch, Bot, Share2, Sparkles, Terminal, Layers, BrainCircuit, Database, Code2 } from "lucide-react";

const skills = [
  { name: "Python", icon: SiPython, color: "#3b82f6" },
  { name: "React", icon: SiReact, color: "#22d3ee" },
  { name: "Machine Learning", icon: Brain, color: "#818cf8" },
  { name: "Deep Learning", icon: Cpu, color: "#a78bfa" },
  { name: "Node.js", icon: SiNodedotjs, color: "#4ade80" },
  { name: "SQL", icon: SiMysql, color: "#60a5fa" },
  { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#fb923c" },
  { name: "Git", icon: GitBranch, color: "#f472b6" },
  { name: "Java", icon: Code2, color: "#f89820" },
  { name: "Agentic AI", icon: Bot, color: "#10b981" },
  { name: "LangGraph", icon: Share2, color: "#a855f7" },
  { name: "Generative AI", icon: Sparkles, color: "#fbbf24" },
  { name: "Prompt Engineering", icon: Terminal, color: "#4ade80" },
  { name: "RAG", icon: Layers, color: "#38bdf8" },
  { name: "LLMs", icon: BrainCircuit, color: "#ec4899" },
  { name: "Data Science", icon: Database, color: "#6366f1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
];

export function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {skills.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          whileHover={{ y: -6 }}
          className="glass rounded-xl p-6 flex flex-col items-center gap-3 glow-hover"
        >
          <s.icon size={36} style={{ color: s.color, filter: `drop-shadow(0 0 10px ${s.color})` }} />
          <span className="text-sm font-medium text-center">{s.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
