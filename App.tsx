import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PerfumeShowcase from './components/PerfumeShowcase';
import ProductMenu from './components/ProductMenu';
import Offers from './components/Offers';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative bg-black min-h-screen text-white font-sans selection:bg-brand-pink selection:text-brand-chocolate">
      
      {/* Smooth Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-[20%] -left-[20%] w-[70vw] h-[70vw] bg-brand-chocolate rounded-full blur-[120px] opacity-10"
        />
        <motion.div 
           animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] bg-brand-pink rounded-full blur-[150px] opacity-10"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <PerfumeShowcase />
          <ProductMenu />
          <Offers />
          <Features />
          <FAQ />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
}

export default App;