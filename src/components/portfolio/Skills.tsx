import { motion } from "framer-motion";
import {
  SiPython, SiReact, SiTensorflow, SiNodedotjs, SiTailwindcss, SiJavascript, SiMysql,
} from "react-icons/si";
import { Brain, Cpu, Eye, GitBranch } from "lucide-react";

const skills = [
  { name: "Python", icon: SiPython, color: "#3b82f6" },
  { name: "React", icon: SiReact, color: "#22d3ee" },
  { name: "Machine Learning", icon: Brain, color: "#818cf8" },
  { name: "Deep Learning", icon: Cpu, color: "#a78bfa" },
  { name: "Computer Vision", icon: Eye, color: "#38bdf8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#4ade80" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#22d3ee" },
  { name: "SQL", icon: SiMysql, color: "#60a5fa" },
  { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#fb923c" },
  { name: "Git", icon: GitBranch, color: "#f472b6" },
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
