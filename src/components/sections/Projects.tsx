import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, Map, Server, Workflow } from "lucide-react";

const projects = [
  {
    icon: Layers,
    title: "Enterprise UI Modernization Platform",
    description: "Migrated legacy Java Swing applications to modern Angular interfaces, improving user experience and system maintainability.",
    tags: ["Angular", "ReactJS", "TypeScript", "Material UI", "Spring Boot"],
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
    description: "Automated employee check-in and check-out system for office attendance tracking through an internal portal.",
    tags: ["Spring Boot"],
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
    <section id="projects" className="section-padding section-bg-elevated" ref={ref}>
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
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-primary/3 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
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
                      className="rounded-full bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-secondary"
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
