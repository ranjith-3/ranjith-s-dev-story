import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Ambient gradient orbs - slow moving */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.015] dark:opacity-[0.025]" />
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02]" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-radial-vignette" />
    </div>
  );
}

export function SectionDivider({ variant = "default" }: { variant?: "default" | "glow" | "gradient" }) {
  if (variant === "glow") {
    return (
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-sm" />
      </div>
    );
  }
  
  if (variant === "gradient") {
    return (
      <div className="h-24 w-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
    );
  }
  
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />;
}
