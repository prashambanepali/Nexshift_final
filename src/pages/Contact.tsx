import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Contact Us — Get a Free Consultation"
          description="Contact NexShift Media & Events for digital marketing, event management, and creative production services in Nepal. Get a free proposal."
          canonical="/contact"
          breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]}
        />

        <Navbar />
        <Breadcrumbs items={[{ label: "Contact" }]} />

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
                Contact Us
              </p>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Let's Build Something
                <br />
                <span className="text-gradient-primary">Powerful Together.</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind? Let's talk strategy and turn your vision into reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Info Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">
                    Get In Touch
                  </h2>

                  <p className="text-muted-foreground mb-8">
                    Whether you need a digital marketing strategy, event management,
                    or creative production — we're ready to help you succeed.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email Us", detail: "hello@nexshiftmedia.com" },
                    { icon: Phone, title: "Call Us", detail: "+977 9818633814" },
                    { icon: MapPin, title: "Visit Us", detail: "Kathmandu, Nepal" },
                    { icon: Clock, title: "Working Hours", detail: "Sun - Fri, 10:00 AM - 6:00 PM" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                        <item.icon size={20} className="text-primary-foreground" />
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                  {/* Social */}
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">Follow Us</h4>

                    <div className="flex flex-wrap gap-4">
                      <button
                        type="button"
                        onClick={() => window.open("https://www.instagram.com/nexshift.media.and.events/", "_blank", "noopener,noreferrer")}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        Instagram
                      </button>

                      <button
                        type="button"
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=61577277295076", "_blank", "noopener,noreferrer")}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        Facebook
                      </button>

                      <button
                        type="button"
                        onClick={() => window.open("https://www.linkedin.com/company/nexshift-media-events/", "_blank", "noopener,noreferrer")}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        LinkedIn
                      </button>

                      <button
                        type="button"
                        onClick={() => window.open("https://www.youtube.com/@NexShiftMediaandEvents", "_blank", "noopener,noreferrer")}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        YouTube
                      </button>
                    </div>
                  </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/9779818633814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[hsl(142,70%,45%)] text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>

              </motion.div>


              {/* Form Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-8 space-y-5"
                >

                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h3>

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
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />

                  <select
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a Service</option>
                    <option>Digital Marketing</option>
                    <option>Event Management</option>
                    <option>Photography & Videography</option>
                    <option>Branding & Creative Design</option>
                    <option>Other</option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
                  >
                    {submitted ? "Message Sent! ✓" : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>

                </form>

                {/* Map */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-border h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.11453830368!2d85.25082729999999!3d27.708954650000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NexShift Location - Kathmandu, Nepal"
                  />
                </div>

              </motion.div>

            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />

      </div>
    </PageTransition>
  );
};

export default ContactPage;