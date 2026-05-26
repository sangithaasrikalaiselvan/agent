import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Connect() {
  const [sent, setSent] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      }}
      className="max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-10 glow-border space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" type="text" placeholder="Your name" />
        <Field label="Email" type="email" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
          MESSAGE
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell me about your project…"
          className="w-full bg-input/40 rounded-xl px-4 py-3 text-sm outline-none border border-border focus:border-primary focus:shadow-[0_0_0_3px_var(--primary)/20] transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-hover glow-border"
      >
        {sent ? "Message Sent ✓" : (<>Send Message <Send size={16} /></>)}
      </button>
    </motion.form>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
        {label.toUpperCase()}
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full bg-input/40 rounded-xl px-4 py-3 text-sm outline-none border border-border focus:border-primary focus:shadow-[0_0_0_3px_var(--primary)/20] transition-all"
      />
    </div>
  );
}
