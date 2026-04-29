import { motion } from "framer-motion";
import {
  Megaphone,
  BarChart3,
  Search,
  Share2,
  PartyPopper,
  Calendar,
  Camera,
  Mic2,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategic campaigns across all platforms to amplify your brand voice and grow engagement.",
    gradient: true,
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Dominate search results with data-driven SEO strategies and targeted paid search campaigns.",
    gradient: false,
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused advertising that converts clicks into customers with precision targeting.",
    gradient: false,
  },
  {
    icon: Share2,
    title: "Content Strategy",
    description: "Compelling narratives and content ecosystems that position your brand as an industry leader.",
    gradient: false,
  },
  {
    icon: PartyPopper,
    title: "Corporate Events",
    description: "From intimate gatherings to large-scale conferences — flawlessly planned and executed.",
    gradient: true,
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "End-to-end event management including venue selection, logistics, and vendor coordination.",
    gradient: false,
  },
  {
    icon: Camera,
    title: "Production & AV",
    description: "State-of-the-art audio visual, lighting, and stage design for unforgettable experiences.",
    gradient: false,
  },
  {
    icon: Mic2,
    title: "Brand Activations",
    description: "Immersive brand experiences that create lasting impressions and drive real engagement.",
    gradient: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A full spectrum of digital marketing and event management solutions tailored to elevate your brand.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                service.gradient
                  ? "bg-gradient-primary border-transparent shadow-glow"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <service.icon
                size={32}
                className={`mb-4 ${service.gradient ? "text-primary-foreground" : "text-primary"}`}
              />
              <h3
                className={`font-heading text-lg font-semibold mb-2 ${
                  service.gradient ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.gradient ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
