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

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock size={48} />,
      title: "24/7 Availability",
      description: "We're here when you need us, day or night, weekends and holidays",
      image: "https://images.pexels.com/photos/2418645/pexels-photo-2418645.jpeg"
    },
    {
      icon: <Leaf size={48} />,
      title: "Eco-Friendly Supplies",
      description: "Safe, green cleaning products that protect your family and the environment",
      image: "https://images.unsplash.com/photo-1583907659441-addbe699e921"
    },
    {
      icon: <DollarSign size={48} />,
      title: "Competitive Pricing",
      description: "Quality cleaning services at prices that fit your budget",
      image: "https://images.pexels.com/photos/17423267/pexels-photo-17423267.jpeg"
    },
    {
      icon: <MapPin size={48} />,
      title: "Greater Toronto Area",
      description: "Serving all of GTA with reliable, professional cleaning services",
      image: "https://images.pexels.com/photos/17423267/pexels-photo-17423267.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            Why Choose <span className="text-gradient">Clean Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional cleaning services that exceed your expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div 
                  className="w-24 h-24 rounded-full mx-auto bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${benefit.image})` }}
                >
                  <div className="absolute inset-0 bg-brand-blue/80 rounded-full flex items-center justify-center text-white group-hover:bg-brand-blue-dark transition-colors">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Standard Cleaning",
      price: "From $80",
      description: "Perfect for regular maintenance",
      features: [
        "Dusting all surfaces",
        "Vacuuming & mopping",
        "Bathroom sanitization",
        "Kitchen cleaning",
        "Trash removal"
      ],
      popular: false
    },
    {
      name: "Deep Cleaning",
      price: "From $150",
      description: "Comprehensive top-to-bottom clean",
      features: [
        "Everything in Standard",
        "Inside appliances",
        "Baseboards & windows",
        "Light fixtures",
        "Detailed scrubbing"
      ],
      popular: true
    },
    {
      name: "Commercial Cleaning",
      price: "Custom Quote",
      description: "Tailored for business needs",
      features: [
        "Office space cleaning",
        "Restroom maintenance",
        "Floor care",
        "Trash & recycling",
        "Flexible scheduling"
      ],
      popular: false
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
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the cleaning package that fits your needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                plan.popular ? 'ring-4 ring-brand-blue scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-neutral-dark">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 text-gradient">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check size={20} className="text-accent-green flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-brand-blue text-white hover:bg-brand-blue-dark' 
                  : 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
              }`}>
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Booking Section Component
const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you shortly to confirm your booking.');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
              Book Your <span className="text-gradient">Cleaning</span> Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready for a sparkling clean space? Schedule your cleaning service in just a few clicks. 
              We'll confirm your appointment within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Flexible Scheduling</h4>
                  <p className="text-gray-600">Choose the date and time that works for you</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Quality Guarantee</h4>
                  <p className="text-gray-600">100% satisfaction guaranteed or we'll make it right</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-yellow rounded-full flex items-center justify-center text-white">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Trusted Team</h4>
                  <p className="text-gray-600">Experienced, insured, and background-checked cleaners</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move-in/Move-out</option>
                  <option value="airbnb">Airbnb Cleaning</option>
                  <option value="window">Window Cleaning</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                  required
                />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                </select>
              </div>
              
              <textarea
                name="message"
                placeholder="Additional details or special requests..."
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full cta-button px-8 py-4 rounded-xl text-lg font-semibold text-white"
              >
                Book Now - Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Navigation Header Component
const NavigationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-brand-blue">Clean Connect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-neutral-dark hover:text-brand-blue transition-colors">Services</a>
            <a href="#pricing" className="text-neutral-dark hover:text-brand-blue transition-colors">Pricing</a>
            <a href="#booking" className="text-neutral-dark hover:text-brand-blue transition-colors">Book Now</a>
            <a href="#contact" className="text-neutral-dark hover:text-brand-blue transition-colors">Contact</a>
            <button className="bg-brand-blue text-white px-6 py-2 rounded-xl hover:bg-brand-blue-dark transition-colors">
              Call Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-neutral-dark hover:text-brand-blue transition-colors">Services</a>
              <a href="#pricing" className="text-neutral-dark hover:text-brand-blue transition-colors">Pricing</a>
              <a href="#booking" className="text-neutral-dark hover:text-brand-blue transition-colors">Book Now</a>
              <a href="#contact" className="text-neutral-dark hover:text-brand-blue transition-colors">Contact</a>
              <button className="bg-brand-blue text-white px-6 py-2 rounded-xl hover:bg-brand-blue-dark transition-colors self-start">
                Call Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "Clean Connect transformed my home! Their eco-friendly approach and attention to detail is outstanding. The team is professional and always punctual.",
      image: "https://images.pexels.com/photos/15241284/pexels-photo-15241284.jpeg"
    },
    {
      name: "Michael Chen",
      location: "Mississauga, ON",
      rating: 5,
      text: "Best cleaning service in the GTA! They cleaned our office after renovation and it looks brand new. Highly recommend for commercial cleaning.",
      image: "https://images.pexels.com/photos/15241284/pexels-photo-15241284.jpeg"
    },
    {
      name: "Emma Rodriguez",
      location: "Markham, ON",
      rating: 5,
      text: "24/7 availability is a game-changer for my Airbnb business. Clean Connect helps me maintain 5-star ratings with their quick turnaround service.",
      image: "https://images.pexels.com/photos/15241284/pexels-photo-15241284.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-blue-light/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what satisfied customers across the GTA say about Clean Connect
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg relative"
              style={{
                backgroundImage: `url(${testimonial.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent-yellow fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/28209885/pexels-photo-28209885.jpeg)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue-dark/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for a <span className="text-accent-yellow">Spotless Space?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free quote today and discover why Clean Connect is the trusted choice 
              for cleaning services across the Greater Toronto Area.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us 24/7</h4>
                  <p className="opacity-90">(416) 555-CLEAN</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="opacity-90">hello@cleanconnect.ca</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Service Area</h4>
                  <p className="opacity-90">Greater Toronto Area</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-neutral-dark">Get Your Free Quote</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors">
                <option>Select Service Type</option>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-in/Move-out</option>
                <option>Airbnb Cleaning</option>
                <option>Window Cleaning</option>
              </select>
              <textarea
                placeholder="Tell us about your cleaning needs..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-blue focus:outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full bg-brand-blue text-white py-3 rounded-xl font-semibold hover:bg-brand-blue-dark transition-colors">
                Get Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                <Sparkles size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">Clean Connect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium cleaning services across the Greater Toronto Area. 
              Eco-friendly, reliable, and available 24/7.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-blue-light transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-blue-light transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-blue-light transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Move-in/Move-out</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Airbnb Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Window Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>(416) 555-CLEAN</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>hello@cleanconnect.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Greater Toronto Area</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Clean Connect. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <PricingSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}