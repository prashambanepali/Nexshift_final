import { motion } from "framer-motion";

const clients = [
  "Himalayan Bank",
  "TechVenture Nepal",
  "GreenLeaf Organics",
  "Nepal Tourism Board",
  "Everest Insurance",
  "Kathmandu Living Labs",
  "CG Electronics",
  "Ncell",
];

const ClientsSection = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-10"
        >
          Trusted By Leading Brands
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center py-4"
            >
              <span className="font-heading text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
