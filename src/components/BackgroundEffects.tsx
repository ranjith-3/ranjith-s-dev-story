import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
      
      {/* Subtle grid pattern - visible in dark mode */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02] dark:opacity-[0.04]" />
      
      {/* Ambient glow - top right */}
      <motion.div
        className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Ambient glow - bottom left */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[100px] dark:bg-primary/8"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Center subtle glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/3 to-transparent blur-[80px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.025]" />
    </div>
  );
}
