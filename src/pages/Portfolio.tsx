import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";

const categories = ["All", "Digital Marketing", "Events", "Photography", "Videography"];

const projects = [
  {
    title: "TechSummit Nepal 2025",
    category: "Events",
    description: "A 3-day tech conference with 2000+ attendees, live streaming, keynote management, and immersive brand activations.",
    result: "2000+ attendees, 50K+ livestream views",
    color: "from-primary to-cyan-500",
  },
  {
    title: "Himalayan Bank Digital Campaign",
    category: "Digital Marketing",
    description: "360° digital campaign covering social media, paid ads, and content strategy for one of Nepal's leading banks.",
    result: "300% engagement growth, 10M+ reach",
    color: "from-accent to-teal-400",
  },
  {
    title: "GreenLeaf Brand Film",
    category: "Videography",
    description: "Cinematic brand film showcasing sustainable farming practices and organic product journey from farm to table.",
    result: "500K+ views, Featured in national media",
    color: "from-primary to-violet-500",
  },
  {
    title: "CG Electronics Product Launch",
    category: "Events",
    description: "High-impact product launch event with media coverage, influencer engagement, and live demonstrations.",
    result: "200+ media mentions, 15K+ social impressions",
    color: "from-amber-500 to-primary",
  },
  {
    title: "Ncell Rebranding Campaign",
    category: "Digital Marketing",
    description: "Complete digital rebrand including social media overhaul, content strategy, and performance marketing.",
    result: "450% organic traffic increase",
    color: "from-accent to-blue-400",
  },
  {
    title: "Nepal Tourism Board Photography",
    category: "Photography",
    description: "Comprehensive destination photography for marketing collateral, tourism campaigns, and international exhibitions.",
    result: "Featured in 3 international publications",
    color: "from-rose-500 to-primary",
  },
  {
    title: "Startup Summit Conference",
    category: "Events",
    description: "Multi-day startup conference with pitch sessions, investor networking, mentorship workshops, and demo stations.",
    result: "30+ startups funded post-event",
    color: "from-primary to-indigo-500",
  },
  {
    title: "Everest Insurance Corporate Shoot",
    category: "Photography",
    description: "Professional corporate photography for annual report, website, marketing materials, and executive portraits.",
    result: "50+ assets delivered, Used across all channels",
    color: "from-accent to-emerald-400",
  },
  {
    title: "KLL Social Media Strategy",
    category: "Digital Marketing",
    description: "Full social media management including content creation, community building, and analytics-driven optimization.",
    result: "200% follower growth in 6 months",
    color: "from-violet-500 to-accent",
  },
];

const PortfolioPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Portfolio — Our Best Work"
        description="Explore NexShift's portfolio of digital marketing campaigns, corporate events, photography, and videography projects in Nepal."
        canonical="/portfolio"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio" }]}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Portfolio" }]} />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">Portfolio</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Work That Speaks
              <br />
              <span className="text-gradient-primary">For Itself.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of campaigns, events, and productions that delivered real, measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
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
                exit={{ opacity: 0, scale: 0.95 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center relative`}>
                  <ExternalLink className="text-white/0 group-hover:text-white/80 transition-all" size={32} />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium tracking-wider uppercase">{project.category}</span>
                  <h3 className="font-heading text-xl font-bold mt-1 mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <TrendingUp size={14} />
                    {project.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default PortfolioPage;
