import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 z-10"
          >
            <span className="text-brand-pink uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">The Art of Perfumery</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At L'Odeur Exquise, we believe that a fragrance is more than just a scent; it is a memory, an emotion, and a personal signature. Founded in the heart of London, our boutique brings together centuries-old traditions of perfumery with modern sophistication.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              We meticulously select rare ingredients from Grasse to the Orient, ensuring every bottle captures a unique story. Whether you seek fresh florals or deep musks, our collection is curated to help you find your perfect match.
            </p>
            <button 
              onClick={() => document.getElementById('perfumes')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-brand-chocolate text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider"
            >
              Read More
            </button>
          </motion.div>

          {/* Image Grid Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <img src="https://i.pinimg.com/originals/89/dc/49/89dc496bedf1183cf35331c4a277b63c.jpg" alt="Ingredients" className="rounded-lg transform translate-y-8 shadow-2xl border border-white/10 w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=300&auto=format&fit=crop" alt="Bottle" className="rounded-lg shadow-2xl border border-white/10 w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=300&auto=format&fit=crop" alt="Process" className="rounded-lg transform translate-y-8 shadow-2xl border border-white/10 w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=300&auto=format&fit=crop" alt="Shop" className="rounded-lg shadow-2xl border border-white/10 w-full h-48 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;