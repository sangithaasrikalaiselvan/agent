import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
          <div className="mt-5 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_var(--primary)]" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export function CardGrid({ items }: { items: { title: string; description: string; tag?: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative glass rounded-2xl p-6 glow-hover overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors" />
          {item.tag && (
            <span className="relative inline-block text-[10px] font-mono tracking-widest text-primary mb-3">
              {item.tag}
            </span>
          )}
          <h3 className="relative text-lg font-semibold mb-2">{item.title}</h3>
          <p className="relative text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
