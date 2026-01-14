import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Angular", "React", "React Native", "Material UI", "Tailwind", "Bootstrap", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "REST APIs", "Java"],
  },
  {
    title: "Database",
    skills: ["Oracle SQL"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "VS Code", "IntelliJ", "STS", "Postman", "Swagger", "DBeaver", "Figma"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            What I Work With
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
