import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSnapshot from "@/components/AboutSnapshot";
import ServicesPillars from "@/components/ServicesPillars";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Digital Marketing & Event Management Agency"
          description="NexShift Media & Events — Nepal's premium creative agency specializing in digital marketing, event management, photography & videography. We elevate brands."
          canonical="/"
        />
        <Navbar />
        <HeroSection />
        <AboutSnapshot />
        <ServicesPillars />
        <PortfolioSection />
        <TestimonialsSection />
        <ClientsSection />
        <CTASection />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Index;
