import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CorizoCert from "@/assets/corizo.png";
import StartupCert from "@/assets/startup.png";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Corizo Edutech",
    year: 2024,
    description: [
      "Developed a stock price prediction model using Machine Learning algorithms.",
      "Performed data preprocessing, feature engineering, and model evaluation.",
      "Utilized Python libraries such as Pandas, NumPy, and Scikit-learn for analysis and model development.",
      "Gained hands-on experience in predictive analytics and data-driven decision-making.",
      "Enhanced problem-solving, analytical, and programming skills through real-world projects.",
    ],
    projectLink:
      "https://www.linkedin.com/posts/sangithaa-sri-k-6b53562ab_intern-activity-7182432957821861888-mOJP",
    projectLinkText: "View Project",
    certificate: CorizoCert,
  },
  {
    title: "Startup Ideation Intern",
    company: "CED (Anna University)",
    year: 2025,
    description: [
      "Developed a deep learning-based deepfake detection system to identify AI-manipulated facial content.",
      "Applied computer vision and deep learning techniques for image classification and authenticity verification.",
      "Focused on preventing identity fraud by detecting digitally altered and synthetic media.",
      "Conducted research on emerging AI technologies and their real-world security applications.",
      "Strengthened skills in deep learning, model training, and AI-driven problem solving.",
    ],
    projectLink: "https://github.com/sangithaasrikalaiselvan/deepfake-detection-model",
    projectLinkText: "View Project",
    certificate: StartupCert,
  },
];

export default function ExperienceSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {experiences.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <AccordionItem value={`item-${i}`} className="glass rounded-2xl p-6 glow-hover mb-6">
            <AccordionTrigger>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.company} - {item.year}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary glow-hover"
                >
                  {item.projectLinkText}
                </a>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary glow-hover">
                      View Certificate
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{item.title} Certificate</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <img
                        src={item.certificate}
                        alt={`${item.title} Certificate`}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
