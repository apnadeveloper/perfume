import React from 'react';
import { motion } from 'framer-motion';
import { Perfume } from '../types';

const featuredPerfumes: Perfume[] = [
  { id: 1, name: "Royal Oud", description: "A majestic blend of agarwood and spices.", price: "$120", image: "https://images.unsplash.com/photo-1737424064873-89db6803084a?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Velvet Rose", description: "Soft petals meets dark amber.", price: "$95", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Ocean Mist", description: "Fresh aquatic notes with citrus.", price: "$85", image: "https://plus.unsplash.com/premium_photo-1752485892414-6656876bf49b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2NlYW4lMjBtaXN0JTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Golden Amber", description: "Warm vanilla and musk undertones.", price: "$110", image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=600&auto=format&fit=crop" },
];

const PerfumeShowcase: React.FC = () => {
  return (
    <section id="perfumes" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-pink uppercase tracking-widest text-sm">Our Collections</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-3">Signature Scents</h2>
          <div className="w-24 h-1 bg-brand-pink mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPerfumes.map((perfume, index) => (
            <motion.div 
              key={perfume.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={perfume.image} 
                  alt={perfume.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif text-white">{perfume.name}</h3>
                  <p className="text-brand-pink text-sm mt-1">{perfume.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfumeShowcase;