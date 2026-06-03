import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Connect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-10 glow-border space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
          MESSAGE
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-input/40 rounded-xl px-4 py-3 text-sm outline-none border border-border focus:border-primary focus:shadow-[0_0_0_3px_var(--primary)/20] transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-hover glow-border disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : (<>Send Message <Send size={16} /></>)}
      </button>
    </motion.form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
        {label.toUpperCase()}
      </label>
      <input
        name={name}
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-input/40 rounded-xl px-4 py-3 text-sm outline-none border border-border focus:border-primary focus:shadow-[0_0_0_3px_var(--primary)/20] transition-all"
      />
    </div>
  );
}
