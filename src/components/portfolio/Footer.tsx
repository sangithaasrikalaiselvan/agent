import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={16} />,
    href: "https://github.com/sangithaasrikalaiselvan",
  },
  {
    icon: <Linkedin size={16} />,
    href: "https://www.linkedin.com/in/sangithaa-sri-k-6b53562ab/",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:sangithaasrik7@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10 py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground tracking-widest">
          SANGITHAA SRI K | AGENTIC AI ENGINEER
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 grid place-items-center rounded-full glass glow-hover"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
