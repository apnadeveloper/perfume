import React from 'react';
import { Star, Droplet, Leaf, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    { icon: <Star size={32} />, title: "Premium Quality", desc: "Sourced from the finest ingredients worldwide." },
    { icon: <Leaf size={32} />, title: "100% Organic", desc: "Natural extracts without harmful synthetics." },
    { icon: <Droplet size={32} />, title: "Long Lasting", desc: "High concentration oils that stay all day." },
    { icon: <Truck size={32} />, title: "Fast Delivery", desc: "Secure packaging and rapid shipping." },
  ];

  return (
    <section className="py-20 bg-brand-chocolate text-brand-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white">Right Choice</h2>
          <p className="mt-4 text-white/70">Why our customers choose us again and again.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-black/20 rounded-lg border border-white/10 hover:bg-black/40 transition-colors"
            >
              <div className="mb-4 p-4 bg-white/5 rounded-full text-white">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feat.title}</h3>
              <p className="text-sm text-brand-pink/80">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;