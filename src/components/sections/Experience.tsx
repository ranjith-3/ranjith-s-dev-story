import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Trainee Programmer",
    company: "Kumaran Systems",
    period: "Current Role",
    description: `This is where things got real. I'm part of a team that's modernizing enterprise applications—taking legacy Java Swing and Spring MVC systems and transforming them into sleek Angular frontends backed by robust Spring Boot APIs.

It's not just about rewriting code. It's about understanding why the old system worked, preserving what matters, and making everything faster, more maintainable, and actually enjoyable to use. I've built scalable REST APIs that talk to Oracle databases, and I've had the chance to work on React Native screens with Google Maps integration for real-time tracking.

What I value most here is the ownership. I'm not just writing code someone else designed—I'm involved in the decisions, the architecture discussions, and the problem-solving when things don't go as planned. Collaboration with designers, testers, and product owners has become second nature.`,
  },
  {
    icon: GraduationCap,
    title: "Software Engineer Intern",
    company: "Kumaran Systems",
    period: "Internship Phase",
    description: `This is where my journey began. Fresh out of college, I was thrown into the deep end—building Spring Boot APIs, writing Swagger documentation, and debugging production issues that seemed impossible at first.

I learned how enterprise teams actually work: the importance of proper documentation (FD & SDD), the discipline of clean code reviews, and the art of asking the right questions. Every bug I fixed and every API I built taught me something new.

Looking back, this phase was about transformation—from someone who knew programming concepts to someone who could actually build production-ready software.`,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            My Growth Journey
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 top-0 hidden h-full w-px md:block">
            <div className="h-full w-full bg-gradient-to-b from-primary/50 via-border to-border" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-6 top-0 hidden md:block">
                  <div className="h-4 w-4 rounded-full border-4 border-primary bg-background shadow-lg shadow-primary/20" />
                </div>

                <div className="ml-0 md:ml-20">
                  <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>
                    <div className="space-y-4 whitespace-pre-line text-muted-foreground">
                      {exp.description.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
