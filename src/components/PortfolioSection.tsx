import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Digital Marketing", "Events", "Video"];

const projects = [
  {
    title: "TechSummit Nepal 2025",
    category: "Events",
    description: "3-day tech conference with 2000+ attendees, live streaming, and brand activations.",
    result: "2000+ attendees",
    color: "from-primary to-cyan-500",
  },
  {
    title: "Himalayan Bank Campaign",
    category: "Digital Marketing",
    description: "360° social media campaign achieving 10M+ impressions and 300% engagement growth.",
    result: "300% growth",
    color: "from-accent to-teal-400",
  },
  {
    title: "GreenLeaf Brand Film",
    category: "Video",
    description: "Cinematic brand film showcasing sustainable farming practices and organic journey.",
    result: "500K+ views",
    color: "from-primary to-violet-500",
  },
  {
    title: "CG Electronics Launch",
    category: "Events",
    description: "High-impact product launch with media coverage and influencer engagement.",
    result: "200+ media mentions",
    color: "from-amber-500 to-primary",
  },
  {
    title: "Ncell Rebranding",
    category: "Digital Marketing",
    description: "Complete digital rebrand including social media overhaul and performance marketing.",
    result: "450% traffic increase",
    color: "from-accent to-blue-400",
  },
  {
    title: "Startup Summit",
    category: "Events",
    description: "Multi-day startup conference with pitch sessions and investor networking.",
    result: "30+ startups funded",
    color: "from-primary to-indigo-500",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-3">Our Work</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gradient-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                <ExternalLink className="text-white/0 group-hover:text-white/80 transition-all" size={32} />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium tracking-wider uppercase">{project.category}</span>
                <h3 className="font-heading text-xl font-semibold mt-1 mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <TrendingUp size={14} />
                  {project.result}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all"
          >
            View All Projects <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
