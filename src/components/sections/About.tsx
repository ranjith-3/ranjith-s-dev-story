import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-bg-alternate" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            The Story So Far
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Over the past <span className="font-medium text-foreground">2.4 years</span>, 
            I've been on a journey of building things that matter. It started as an internship 
            where I was just trying to figure out how enterprise systems work, and today, 
            I find myself at the center of modernizing complex applications that thousands 
            of people rely on.
          </p>

          <p>
            My world revolves around <span className="font-medium text-foreground">Angular and React</span> on 
            the frontend, where I obsess over creating interfaces that feel right—not just 
            look right. But I never wanted to be just a "frontend guy." Working 
            with <span className="font-medium text-foreground">Spring Boot and Node.js</span> on 
            the backend has given me a fuller picture of how great products come together.
          </p>

          <p>
            The domains I've worked in—<span className="font-medium text-foreground">Banking and Logistics</span>—have 
            taught me that software isn't just about code. It's about understanding workflows, 
            anticipating edge cases, and designing for real humans under real pressure. 
            I've learned to dig deep into requirements, debug issues that seem impossible, 
            and build components that scale without becoming a maintenance nightmare.
          </p>

          <p>
            What I love most is the collaboration. Working with designers, product teams, 
            and fellow developers to turn vague ideas into polished experiences. It's probably 
            why I was recognized as <span className="font-medium text-primary">Best Team Player</span>—because 
            I genuinely believe the best work happens when everyone's pulling in the same direction.
          </p>

          <p>
            And then there was <span className="font-medium text-primary">Smart India Hackathon 2023</span>, 
            where our team won by building something meaningful under pressure. That experience 
            reminded me why I fell in love with building software in the first place—the thrill 
            of creating something from nothing and seeing it work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
