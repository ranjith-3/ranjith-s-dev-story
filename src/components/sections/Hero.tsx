import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric grid lines - subtle tech pattern */}
        <div className="absolute inset-0">
          <svg className="h-full w-full opacity-[0.03] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        {/* Abstract flowing lines - data flow inspired */}
        <motion.div
          className="absolute left-1/4 top-1/3 h-px w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            x: [0, 100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 top-2/3 h-px w-48 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{
            x: [0, -80, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Primary gradient orb - top right */}
        <motion.div
          className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary gradient orb - bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-primary/10 via-primary/3 to-transparent blur-3xl"
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle center highlight */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/5 to-transparent opacity-50" />
        
        {/* Corner accents - architectural feel */}
        <div className="absolute left-8 top-32 h-24 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-40" />
        <div className="absolute right-8 bottom-32 h-24 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ranjith{" "}
          <span className="text-gradient">S</span>
        </motion.h1>

        <motion.p
          className="mb-4 text-xl font-medium text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full Stack / UI Developer
        </motion.p>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A Full Stack/UI Developer who loves building clean, scalable user experiences. 
          I work across frontend and backend, modernizing enterprise systems and turning 
          complex workflows into intuitive products.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="group gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            See My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="gap-2 border-primary/50 px-8 hover:bg-primary/10"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <a href="/resume.pdf" download="Ranjith_S_Resume.pdf">
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
