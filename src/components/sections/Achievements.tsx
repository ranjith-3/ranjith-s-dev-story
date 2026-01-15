import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Best Team Player Award",
    description: "Recognized for exceptional collaboration and team contribution",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon 2023",
    description: "Winner - Built an innovative solution under national competition",
  },
  {
    icon: BookOpen,
    title: "Joy of Computing using Python",
    description: "NPTEL Certification - Computer Science fundamentals",
  },
  {
    icon: Award,
    title: "Cloud Computing",
    description: "NPTEL Certification - Cloud infrastructure and services",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-bg-alternate" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Achievements
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Things I'm Proud Of
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-glow group rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:border-primary/50"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <achievement.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="mb-2 font-semibold text-foreground">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
