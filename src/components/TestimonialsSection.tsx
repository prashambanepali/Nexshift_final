import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Shrestha",
    role: "CEO, TechVenture Nepal",
    text: "NexShift transformed our entire digital presence. Their strategic approach to social media and SEO doubled our leads within three months. Absolutely exceptional work.",
    rating: 5,
  },
  {
    name: "Priya Maharjan",
    role: "Marketing Head, Himalayan Bank",
    text: "The corporate event they managed for us was flawless — from concept to execution. Over 500 attendees and every detail was perfect. Highly recommended.",
    rating: 5,
  },
  {
    name: "Ankit Gurung",
    role: "Founder, GreenLeaf Organics",
    text: "Their brand film captured the essence of our mission perfectly. The cinematic quality and storytelling was on another level. NexShift delivers beyond expectations.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors relative"
            >
              <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
