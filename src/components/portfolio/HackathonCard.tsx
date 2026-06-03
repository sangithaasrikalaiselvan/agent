import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function HackathonCard({
  items,
}: {
  items: {
    title: string;
    details: string;
    description: string[];
    techStack: string;
    link?: string;
    linkText?: string;
    certificate?: string;
  }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Dialog key={item.title}>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-6 glow-hover overflow-hidden cursor-pointer h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="relative text-lg font-semibold mb-2">{item.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {item.details}
                </p>
              </div>
              <div className="mt-4 text-right text-xs text-primary">Click to see more</div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl bg-background/90 backdrop-blur-sm glass">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gradient">{item.title}</DialogTitle>
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Description</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {item.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                <p className="text-muted-foreground text-sm">{item.techStack}</p>
              </div>
              {item.link && (
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-hover glow-border"
                  >
                    {item.linkText}
                  </a>
                  {item.certificate && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="glass glow-hover">View Certificate</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl h-[90vh] p-2 bg-background/80 backdrop-blur-sm glass">
                        <img src={item.certificate} alt={`${item.title} Certificate`} className="w-full h-full object-contain" />
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
