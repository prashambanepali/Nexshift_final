import { motion } from "framer-motion";
import { useState } from "react";
import {
  Megaphone, Search, BarChart3, Share2, Palette, Target,
  PartyPopper, Calendar, Building2, Landmark, Mic2, Clapperboard,
  Camera, Video, Film, Plane, Smartphone, Image,
  ArrowRight, CheckCircle2, ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";

const tabs = [
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "event-management", label: "Event Management" },
  { id: "photo-video", label: "Photography & Videography" },
];

const digitalServices = [
  { icon: Megaphone, title: "Social Media Management", description: "Strategic content creation, community management, and growth campaigns across all major platforms.", benefits: ["Consistent brand voice", "Engagement growth", "Audience analytics"] },
  { icon: Target, title: "Paid Ads & Lead Generation", description: "ROI-focused advertising on Facebook, Instagram, Google, and LinkedIn to drive qualified leads.", benefits: ["Precision targeting", "Cost optimization", "Conversion tracking"] },
  { icon: Palette, title: "Branding & Creative Design", description: "Logo design, brand identity systems, packaging, and visual assets that make your brand unforgettable.", benefits: ["Brand consistency", "Professional identity", "Market differentiation"] },
  { icon: Share2, title: "Content Strategy", description: "Compelling narratives and content ecosystems that position your brand as an industry leader.", benefits: ["Thought leadership", "SEO benefits", "Audience retention"] },
  { icon: BarChart3, title: "Performance Marketing", description: "Data-driven campaigns with real-time optimization, A/B testing, and comprehensive ROI reporting.", benefits: ["Measurable ROI", "Real-time optimization", "Transparent reporting"] },
  { icon: Search, title: "Corporate Campaign Management", description: "End-to-end campaign management for large-scale corporate and institutional marketing initiatives.", benefits: ["Strategic planning", "Multi-channel execution", "Impact measurement"] },
];

const eventServices = [
  { icon: Building2, title: "Corporate Events", description: "Board meetings, annual gatherings, gala dinners, and corporate celebrations managed with precision.", benefits: ["Professional execution", "Vendor coordination", "Brand alignment"] },
  { icon: PartyPopper, title: "Product Launches", description: "High-impact launch events with media coverage, influencer engagement, and immersive brand experiences.", benefits: ["Media coverage", "Brand awareness", "Lead generation"] },
  { icon: Landmark, title: "Government & Institutional Events", description: "Conferences, seminars, and public events for government bodies and institutional organizations.", benefits: ["Protocol compliance", "Large-scale logistics", "Professional decorum"] },
  { icon: Calendar, title: "Banking & Financial Events", description: "AGMs, investor meets, financial seminars, and banking sector conferences with corporate-grade execution.", benefits: ["Regulatory awareness", "Stakeholder management", "Data security"] },
  { icon: Mic2, title: "Conferences & Seminars", description: "Multi-day conferences with speaker management, AV production, and attendee engagement programs.", benefits: ["Speaker coordination", "AV excellence", "Attendee experience"] },
  { icon: Clapperboard, title: "Full Event Production", description: "Complete production services including staging, lighting, sound, and technical management.", benefits: ["State-of-the-art equipment", "Technical expertise", "Seamless execution"] },
];

const photoVideoServices = [
  { icon: Camera, title: "Corporate Shoots", description: "Professional photography for corporate profiles, team portraits, office environments, and branding materials.", benefits: ["Professional quality", "Brand-aligned imagery", "Quick turnaround"] },
  { icon: Video, title: "Commercial Ads", description: "High-production commercial video content for TV, digital platforms, and social media campaigns.", benefits: ["Cinematic quality", "Story-driven", "Multi-platform"] },
  { icon: Image, title: "Event Coverage", description: "Comprehensive photo and video documentation of events, capturing every meaningful moment.", benefits: ["Full coverage", "Same-day highlights", "Professional editing"] },
  { icon: Film, title: "Cinematic Brand Films", description: "Narrative-driven brand films that tell your company's story in a compelling, cinematic format.", benefits: ["Emotional storytelling", "Premium production", "Brand positioning"] },
  { icon: Smartphone, title: "Reels & Short-form Content", description: "Trending short-form video content optimized for Instagram Reels, TikTok, and YouTube Shorts.", benefits: ["Trend-aligned", "High engagement", "Platform-optimized"] },
  { icon: Plane, title: "Drone Shoots", description: "Aerial photography and videography for stunning perspectives of events, properties, and landscapes.", benefits: ["Unique perspectives", "Licensed operators", "4K quality"] },
];

const serviceGroups: Record<string, typeof digitalServices> = {
  "digital-marketing": digitalServices,
  "event-management": eventServices,
  "photo-video": photoVideoServices,
};

const faqs: Record<string, { q: string; a: string }[]> = {
  "digital-marketing": [
    { q: "What digital marketing services do you offer in Nepal?", a: "We offer social media management, paid advertising (Facebook, Google, LinkedIn), SEO, content strategy, performance marketing, branding, and corporate campaign management — all tailored for the Nepali market." },
    { q: "How much does digital marketing cost in Nepal?", a: "Pricing depends on the scope — from NPR 25,000/month for basic social media management to custom packages for comprehensive digital strategies. We provide detailed proposals after understanding your goals." },
    { q: "How long does it take to see results from digital marketing?", a: "Paid advertising can show results within days. SEO and organic growth typically take 3–6 months. We provide monthly reports so you can track progress from day one." },
    { q: "Do you work with businesses outside Kathmandu?", a: "Absolutely. We work with clients across Nepal and internationally. Digital marketing is location-independent — we collaborate remotely while delivering local market expertise." },
    { q: "Can you manage our existing social media accounts?", a: "Yes. We can audit your current presence, develop a strategy, and take over content creation, scheduling, community management, and performance reporting." },
  ],
  "event-management": [
    { q: "What types of events does NexShift manage?", a: "We manage corporate events, product launches, conferences, seminars, government and institutional events, banking sector events, and full-scale productions with AV, staging, and catering." },
    { q: "How far in advance should we book for an event?", a: "We recommend 2–4 months for large corporate events and 1–2 months for smaller gatherings. However, we can accommodate tighter timelines when needed." },
    { q: "Do you handle event photography and videography too?", a: "Yes — that's one of our strengths. We provide integrated event management with in-house photography, videography, and post-production, ensuring consistent quality." },
    { q: "Can you manage hybrid or virtual events?", a: "Yes. We offer live streaming, virtual event platforms, and hybrid solutions that connect in-person and remote audiences seamlessly." },
    { q: "What is included in your event management package?", a: "Our packages typically include concept development, venue selection, vendor management, branding, AV setup, on-ground coordination, and post-event reporting. Everything is customizable." },
  ],
  "photo-video": [
    { q: "What kind of photography and videography services do you offer?", a: "We offer corporate photography, commercial ads, event coverage, cinematic brand films, drone shoots, reels production, and product photography — all with professional-grade equipment." },
    { q: "Do you provide drone videography in Nepal?", a: "Yes. Our licensed drone operators provide aerial photography and 4K videography for events, real estate, tourism, and brand content across Nepal." },
    { q: "How long does post-production take?", a: "Photo editing typically takes 5–7 business days. Video production varies — short reels take 3–5 days, while brand films may take 2–4 weeks depending on complexity." },
    { q: "Can you create content for social media?", a: "Absolutely. We specialize in creating platform-optimized content — from Instagram Reels and TikTok videos to YouTube content and LinkedIn professional imagery." },
    { q: "Do you offer photography packages for events?", a: "Yes. Our event photography packages include on-site coverage, professional editing, highlight reels, and digital delivery. Packages are customizable based on event duration and scope." },
  ],
};

const faqSchema = (tabId: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs[tabId]?.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing, Event Management, Photography & Videography",
  "provider": {
    "@type": "LocalBusiness",
    "name": "NexShift Media & Events",
    "address": { "@type": "PostalAddress", "addressLocality": "Kathmandu", "addressCountry": "NP" },
  },
  "areaServed": "Nepal",
};

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("digital-marketing");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Services — Digital Marketing, Events & Production"
          description="NexShift offers digital marketing, event management, and photography & videography services in Nepal. Get a free proposal today."
          canonical="/services"
          jsonLd={serviceSchema}
          breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]}
        />
        <Navbar />
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Hero */}
        <section className="pt-8 pb-20 md:pt-12 md:pb-28">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">Our Services</p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Everything You Need to<br />
                <span className="text-gradient-primary">Dominate Your Market.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From digital campaigns to large-scale events and cinematic productions — we deliver end-to-end solutions that drive real results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => { setActiveTab(tab.id); setOpenFaq(null); }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === tab.id ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceGroups[activeTab].map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all group">
                  <service.icon size={36} className="text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Get a Proposal <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-gradient-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our {tabs.find(t => t.id === activeTab)?.label} services.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs[activeTab]?.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown size={20} className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(activeTab)) }} />
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient-primary">Process</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">A proven workflow that delivers results, every time.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: "01", title: "Concept", desc: "Deep-dive into your brand, goals, and target audience." },
                { step: "02", title: "Planning", desc: "Strategic roadmap with timelines, budgets, and KPIs." },
                { step: "03", title: "Execution", desc: "Flawless implementation with real-time coordination." },
                { step: "04", title: "Coverage", desc: "Complete documentation, reporting, and optimization." },
              ].map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="font-heading text-5xl font-bold text-gradient-primary mb-3">{s.step}</div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
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

export default ServicesPage;
