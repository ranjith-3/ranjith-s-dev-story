import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech Information Technology",
    institution: "Agni College of Technology",
  },
  {
    icon: School,
    degree: "Higher Secondary Education",
    institution: "Loyola Higher Secondary School",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-bg-primary" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Academic Background
          </h3>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -3 }}
              className="card-glow flex w-full max-w-sm items-center gap-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 transition-all duration-500 hover:border-primary/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <edu.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
