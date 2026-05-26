import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Download, ArrowRight } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = [
  "Agentic AI Engineer",
  "Full Stack Developer",
  "AI & Data Science Engineer",
  "Machine Learning Developer",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i % roles.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:sangithaa@example.com", label: "Email" },
  { icon: FaPhone, href: "tel:+910000000000", label: "Phone" },
];

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/50 to-accent/40 blur-2xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden glow-border animate-pulse-glow w-72 sm:w-80 lg:w-96 aspect-[4/5]">
              <img
                src={profile}
                alt="Sangithaa Sri K"
                width={768}
                height={896}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
            AGENTIC AI ENGINEER
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
            I’m <span className="text-gradient">SANGITHAA SRI K</span>
          </h1>

          <div className="mt-5 text-xl sm:text-2xl font-mono text-foreground/90 h-9">
            <span className="text-muted-foreground">&gt; </span>
            <span>{typed}</span>
            <span className="cursor-blink text-primary">▍</span>
          </div>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I engineer intelligent systems that think, adapt, and evolve — transforming AI research
            into scalable real-world innovation through machine learning, agentic intelligence, and
            full-stack engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-hover glow-border"
            >
              <Download size={18} /> Resume
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass glow-hover"
            >
              Contact Me <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="group size-12 grid place-items-center rounded-full glass glow-hover"
              >
                <s.icon className="size-5 text-foreground/80 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
