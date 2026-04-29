import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "M+", label: "Audience Reached" },
  { value: 12, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Driven by <span className="text-gradient-primary">Creativity</span>,
              <br />
              Powered by Results
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              NexShift Media & Events is a full-service agency that combines cutting-edge
              digital marketing with world-class event production. We don't just build
              campaigns — we create movements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of strategists, creatives, and event producers work together to
              deliver integrated solutions that drive measurable impact for brands across
              industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl p-6 border border-border text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
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

export default AboutSection;
