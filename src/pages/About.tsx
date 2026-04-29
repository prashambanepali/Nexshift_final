import { motion } from "framer-motion";
import { Target, Lightbulb, Zap, BarChart3, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";

const approach = [
  { icon: Target, title: "Strategy", description: "Deep research and data-driven planning to define clear objectives and target audiences." },
  { icon: Lightbulb, title: "Creativity", description: "Bold ideas and innovative concepts that differentiate your brand from the competition." },
  { icon: Zap, title: "Execution", description: "Flawless implementation with attention to every detail — on time, on budget, on brand." },
  { icon: BarChart3, title: "Results", description: "Measurable outcomes with transparent reporting and continuous optimization." },
];

const values = [
  { title: "Premium Quality", description: "We never cut corners. Every deliverable meets the highest standards of quality and craftsmanship." },
  { title: "Strategic Thinking", description: "Every decision is backed by data, research, and a deep understanding of your market." },
  { title: "Creative Excellence", description: "We push creative boundaries while staying true to your brand's identity and voice." },
  { title: "Client Partnership", description: "We treat every client as a partner. Your growth is our growth, your success is our success." },
  { title: "Measurable Impact", description: "We don't just deliver — we measure, optimize, and prove the impact of every campaign." },
  { title: "Innovation First", description: "We stay ahead of trends and bring cutting-edge solutions to every project." },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="About Us — Our Story, Vision & Team"
          description="Learn about NexShift Media & Events — Nepal's creative agency with a proven approach: Strategy → Creativity → Execution → Results."
          canonical="/about"
          breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
        />
        <Navbar />
        <Breadcrumbs items={[{ label: "About" }]} />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">About Us</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We're on a Mission to
              <br />
              <span className="text-gradient-primary">Elevate Brands.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NexShift Media & Events is a creative and strategic agency based in Nepal. 
              We specialize in digital marketing, event management, and visual production 
              for corporate clients, startups, banks, and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Born from a passion for creativity and strategic excellence, NexShift was founded 
                with a clear vision: to bridge the gap between powerful storytelling and measurable 
                business results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a small team with big ambitions has grown into one of Nepal's most 
                trusted creative agencies. We've managed 150+ projects, worked with 50+ clients, 
                and reached audiences of over 5 million.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve corporate giants, ambitious startups, banking institutions, 
                and government bodies — always with the same commitment to excellence that 
                defined us from day one.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Nepal's most impactful creative agency — setting the standard for strategic 
                  marketing, event excellence, and visual storytelling in South Asia.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower brands with bold creativity, data-driven strategies, and flawless 
                  execution — delivering measurable growth and unforgettable experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-primary">Approach</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A proven four-step process that turns ambitious ideas into measurable results.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card rounded-2xl border border-border p-8 text-center group hover:border-primary/30 transition-colors"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <step.icon size={36} className="text-primary mx-auto mb-4 mt-2" />
                <h3 className="font-heading text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient-primary">NexShift</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient-primary">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12">
              A talented team of strategists, creatives, producers, and technologists driving results.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Creative Director", "Marketing Strategist", "Event Producer", "Visual Producer"].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-muted-foreground" />
                </div>
                <p className="font-heading font-semibold text-foreground">Team Member</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        <CTASection />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
