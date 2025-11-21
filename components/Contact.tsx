import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating email send via mailto
    window.location.href = `mailto:info@odeurexquise.com?subject=Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-20 bg-brand-chocolate/10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white">Contact Us</h2>
          <p className="text-gray-400 mt-4">We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-black/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-brand-pink mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                <textarea 
                  name="message" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-pink text-brand-chocolate font-bold py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10">
                <div className="bg-brand-pink/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink">
                  <Phone />
                </div>
                <h4 className="text-white font-bold">Phone</h4>
                <p className="text-gray-400 text-sm mt-2">+44 7848 893414</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10">
                <div className="bg-brand-pink/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink">
                  <Mail />
                </div>
                <h4 className="text-white font-bold">Email</h4>
                <p className="text-gray-400 text-sm mt-2">info@odeurexquise.com</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10 md:col-span-2">
                <div className="bg-brand-pink/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink">
                  <MapPin />
                </div>
                <h4 className="text-white font-bold">Address</h4>
                <p className="text-gray-400 text-sm mt-2">123 Luxury Lane, Mayfair, London, UK</p>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden border border-white/10 relative min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.2416813!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1652362871234!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;