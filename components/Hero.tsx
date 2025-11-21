import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?q=80&w=1920&auto=format&fit=crop",
    title: "Essence of Elegance",
    subtitle: "Discover the scent that defines you."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615529328331-a8b9d9f3f715?q=80&w=1920&auto=format&fit=crop",
    title: "Floral Symphony",
    subtitle: "Nature's finest blooms in a bottle."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?q=80&w=1920&auto=format&fit=crop",
    title: "Midnight Mystery",
    subtitle: "Deep, dark, and unforgettable."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          key={`text-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-brand-pink tracking-[0.5em] uppercase text-sm md:text-base mb-4 block">
            New Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-bold mb-6">
            {slides[current].title}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8">
            {slides[current].subtitle}
          </p>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-chocolate transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Shop Now
          </button>
        </motion.div>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 border border-white/20 rounded-full"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 border border-white/20 rounded-full"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default Hero;