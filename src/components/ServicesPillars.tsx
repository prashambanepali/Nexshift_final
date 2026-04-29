import { motion } from "framer-motion";
import { Megaphone, PartyPopper, Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social media, SEO, paid ads, content strategy, and performance marketing that drives real growth and ROI.",
    link: "/services#digital-marketing",
    gradient: true,
  },
  {
    icon: PartyPopper,
    title: "Event Management",
    description: "Corporate events, product launches, conferences, and full-scale productions — flawlessly planned and executed.",
    link: "/services#event-management",
    gradient: false,
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Corporate shoots, brand films, reels, drone footage, and cinematic content that tells your story.",
    link: "/services#photo-video",
    gradient: false,
  },
];

const ServicesPillars = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Core Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three powerful pillars that work together to elevate your brand's presence and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={pillar.link}
                className={`group block rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 h-full ${
                  pillar.gradient
                    ? "bg-gradient-primary border-transparent shadow-glow"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-glow"
                }`}
              >
                <pillar.icon
                  size={40}
                  className={`mb-6 ${pillar.gradient ? "text-primary-foreground" : "text-primary"}`}
                />
                <h3
                  className={`font-heading text-2xl font-bold mb-3 ${
                    pillar.gradient ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    pillar.gradient ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pillar.description}
                </p>
                <span
                  className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${
                    pillar.gradient ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPillars;
