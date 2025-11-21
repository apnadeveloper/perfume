import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Regular Customer",
    content: "The scent profile is unlike anything I've found on the high street. Truly unique.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Perfume Enthusiast",
    content: "Exceptional packaging and delivery. The 'Noir Intense' is now my signature daily wear.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Fashion Blogger",
    content: "A hidden gem. The floral notes are delicate yet powerful. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-white mb-16">What They Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-black p-8 rounded-xl border border-white/5 relative">
              <Quote className="text-brand-chocolate absolute top-4 right-4 opacity-50" size={40} />
              <p className="text-gray-300 mb-6 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-brand-pink object-cover" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-brand-pink text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;