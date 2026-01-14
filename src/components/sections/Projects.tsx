import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, Map, Server, Workflow } from "lucide-react";

const projects = [
  {
    icon: Layers,
    title: "Enterprise UI Modernization Platform",
    description: "Migrated legacy Java Swing applications to modern Angular interfaces, improving user experience and system maintainability.",
    tags: ["Angular", "TypeScript", "Material UI", "Spring Boot"],
  },
  {
    icon: Server,
    title: "REST API Administration System",
    description: "Built scalable backend APIs for enterprise operations, integrating secure authentication and Oracle database connectivity.",
    tags: ["Spring Boot", "Java", "REST APIs", "Oracle SQL"],
  },
  {
    icon: Map,
    title: "Mobile Tracking Application",
    description: "Developed React Native screens with Google Maps integration for real-time location tracking and route optimization.",
    tags: ["React Native", "Google Maps API", "TypeScript"],
  },
  {
    icon: Workflow,
    title: "Internal Workflow Automation",
    description: "Created automation tools to streamline internal processes, reducing manual effort and improving team productivity.",
    tags: ["Node.js", "React", "REST APIs"],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Things I've Built
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              {/* Glow effect on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-muted-foreground"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.div>
                </div>

                <h4 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h4>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
