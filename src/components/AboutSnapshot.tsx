import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Target, label: "Strategy First" },
  { icon: Lightbulb, label: "Creative Excellence" },
  { icon: TrendingUp, label: "Measurable Results" },
];

const AboutSnapshot = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A Creative & Strategic Agency
              <br />
              <span className="text-gradient-primary">Based in Nepal</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              NexShift Media & Events is a full-service creative agency specializing in 
              digital marketing, event management, and visual production. We work with 
              corporate clients, SMEs, startups, banks, and institutions across Nepal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach is simple: strategy drives creativity, creativity drives execution, 
              and execution drives measurable results. We don't chase trends — we set them.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <h.icon size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{h.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "5M+", label: "Audience Reached" },
              { value: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-colors"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
