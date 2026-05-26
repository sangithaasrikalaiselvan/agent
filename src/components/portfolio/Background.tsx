import { motion } from "framer-motion";

export function Background() {
  const dots = Array.from({ length: 18 });
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[140px]" />
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute size-1 rounded-full bg-primary/60 shadow-[0_0_8px_2px_var(--primary)]"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
