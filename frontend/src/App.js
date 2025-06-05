import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Shield, 
  Leaf, 
  DollarSign,
  Home,
  Building,
  Sparkles,
  ArrowRight,
  Check,
  Calendar,
  Award,
  Users,
  Phone as PhoneIcon
} from 'lucide-react';
import './App.css';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1556910638-6cdac31d44dc)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Cleaning Services
            <span className="block text-accent-yellow">24/7 Available</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Eco-friendly, affordable cleaning solutions for your home and business 
            across the Greater Toronto Area
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button px-8 py-4 rounded-2xl text-lg font-semibold text-white flex items-center gap-3"
            >
              <PhoneIcon size={24} />
              Call for Free Quote
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect px-8 py-4 rounded-2xl text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 transition-all"
            >
              Book Online
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={20} />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={20} />
              <span>Best Prices</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 floating-element opacity-20">
        <Sparkles size={60} className="text-white" />
      </div>
      <div className="absolute bottom-20 left-20 floating-element opacity-20" style={{ animationDelay: '2s' }}>
        <Sparkles size={40} className="text-white" />
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Complete home cleaning services for busy families and professionals",
      image: "https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg",
      icon: <Home size={32} />,
      features: ["Deep cleaning", "Regular maintenance", "Custom schedules"]
    },
    {
      title: "Commercial Cleaning",
      description: "Professional office and business cleaning to maintain a pristine workspace",
      image: "https://images.unsplash.com/photo-1524803504179-6d7ae4d283f7",
      icon: <Building size={32} />,
      features: ["Office cleaning", "Retail spaces", "After-hours service"]
    },
    {
      title: "Deep Cleaning",
      description: "Thorough, comprehensive cleaning for those special occasions",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473",
      icon: <Sparkles size={32} />,
      features: ["Spring cleaning", "Post-renovation", "Move-in preparation"]
    },
    {
      title: "Move-in/Move-out",
      description: "Complete cleaning services for seamless transitions",
      image: "https://images.unsplash.com/photo-1518710098200-0ed3bc1b05e1",
      icon: <ArrowRight size={32} />,
      features: ["End of lease", "New home prep", "Deposit protection"]
    },
    {
      title: "Airbnb Cleaning",
      description: "Fast turnaround cleaning for rental properties and hosts",
      image: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d",
      icon: <Star size={32} />,
      features: ["Quick turnaround", "Guest-ready standards", "Inventory check"]
    },
    {
      title: "Window Cleaning",
      description: "Crystal-clear windows for perfect views and natural light",
      image: "https://images.pexels.com/photos/10755698/pexels-photo-10755698.jpeg",
      icon: <Sparkles size={32} />,
      features: ["Interior & exterior", "Screen cleaning", "Frame & sill care"]
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential to commercial, we provide comprehensive cleaning solutions 
            tailored to your specific needs across the Greater Toronto Area
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card-hover bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-neutral-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-accent-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-brand-blue text-white py-3 rounded-xl font-semibold hover:bg-brand-blue-dark transition-colors">
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}