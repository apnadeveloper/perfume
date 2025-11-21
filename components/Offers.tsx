import React from 'react';
import { motion } from 'framer-motion';

const Offers: React.FC = () => {
  const offers = [
    {
      title: "Student Special",
      discount: "25% OFF",
      desc: "Valid with student ID on all fresh scents.",
      bg: "from-blue-900 to-black",
      image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Family Bundle",
      discount: "Buy 2 Get 1",
      desc: "Perfect for gifts and sharing love.",
      bg: "from-brand-chocolate to-black",
      image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Business Class",
      discount: "Corporate Gifts",
      desc: "Exclusive packaging for bulk orders.",
      bg: "from-emerald-900 to-black",
      image: "https://images.unsplash.com/photo-1602052756087-097896a36783?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-white mb-12">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl h-80 group"
            >
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${offer.bg} opacity-80`} />
              
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center border-2 border-white/10 m-4 rounded-lg">
                <h3 className="text-2xl font-serif text-brand-pink mb-2">{offer.title}</h3>
                <div className="text-4xl font-bold text-white mb-4">{offer.discount}</div>
                <p className="text-gray-300 mb-6">{offer.desc}</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-brand-pink transition-colors"
                >
                  Claim Offer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;