import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:ranjith301nrv@gmail.com",
    mobileOnly: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ranjith-03",
    external: true,
    mobileOnly: false,
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+916382935538",
    mobileOnly: true,
  },
  {
    icon: FileDown,
    label: "Resume",
    href: "/resume.pdf",
    download: "Ranjith_S_Resume.pdf",
    mobileOnly: false,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Subtle background glow for contact section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
      
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">
            Get In Touch
          </h3>
          <p className="mx-auto mb-12 max-w-lg text-muted-foreground">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.download}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 ${link.mobileOnly ? "md:hidden" : ""}`}
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 border-t border-border pt-8"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ranjith S. Built with passion and code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
