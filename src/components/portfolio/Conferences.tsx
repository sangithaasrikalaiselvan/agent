import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const conferences = [
  {
    title: "International Conference on AI & Computational Science (ICAICS)",
    description: "Presented research on 'Deepfake Face Detection System' at this international conference.",
    link: "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_conference-icaics-deepfake-activity-7317929945689661440-ACVa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqf1WkBb_atwaF2VXMuMDAx-GktCFHBPq0",
  },
  {
    title: "National Conference on Innovations in Computing Technologies (NCICT'26)",
    description: "Presented research on 'AI-Powered Healthcare Innovation' at this national conference.",
    link: "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_research-ai-healthcareinnovation-activity-7452691127121395713-OiMI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqf1WkBb_atwaF2VXMuMDAx-GktCFHBPq0",
  },
];

export function Conferences() {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
      {conferences.map((conference, i) => (
        <motion.a
          key={conference.title}
          href={conference.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative glass rounded-2xl p-6 glow-hover overflow-hidden cursor-pointer h-full flex flex-col justify-between"
        >
          <div>
            <h3 className="relative text-lg font-semibold mb-2">{conference.title}</h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">
              {conference.description}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-end text-xs text-primary">
            View on LinkedIn
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
