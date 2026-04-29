import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Build Something
              <br />
              Powerful Together.
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Ready to elevate your brand? Get a free consultation and discover how we can 
              drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
