import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10 py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground tracking-widest">
          © {new Date().getFullYear()} SANGITHAA SRI K — BUILT WITH INTELLIGENCE
        </p>
        <div className="flex gap-3">
          {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="size-9 grid place-items-center rounded-full glass glow-hover"
            >
              <Icon className="size-4 text-foreground/80" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
