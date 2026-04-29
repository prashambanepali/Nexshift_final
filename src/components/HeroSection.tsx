import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="NexShift creative agency" className="w-full h-[120%] object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.div style={{ y: textY, opacity }} className="relative container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gradient-primary" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary">Nepal's Creative Powerhouse</p>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8">
            We Don't Just Create.
            <br />
            <span className="text-gradient-primary">We Elevate Brands.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            Strategic digital marketing, unforgettable events, and cinematic visual 
            production — all under one roof. We turn ambitious brands into market leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link to="/contact" className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-glow hover:scale-105 transform duration-200">
              Work With Us <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary/50 transition-all flex items-center gap-2 hover:scale-105 transform duration-200">
              <Play size={18} className="text-primary" /> View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
