import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-primary">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a project in mind? Drop us a message and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-primary p-3 rounded-xl">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email Us</h4>
                <p className="text-muted-foreground">hello@nexshiftmedia.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-primary p-3 rounded-xl">
                <Phone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Call Us</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-primary p-3 rounded-xl">
                <MapPin size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Visit Us</h4>
                <p className="text-muted-foreground">123 Creative Blvd, Suite 100</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              required
              className="bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
