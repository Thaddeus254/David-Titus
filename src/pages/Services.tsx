import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Palette, Monitor, Package, Camera, FileText, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Creating memorable logos, color palettes, and complete brand guidelines that establish your unique market presence.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Schemes', 'Typography'],
      price: 'Varies with project scope'
    },
    {
      icon: FileText,
      title: 'Print Design',
      description: 'Professional print materials that make lasting impressions, from business cards to large-format displays.',
      features: ['Business Cards', 'Brochures', 'Posters', 'Annual Reports'],
      price: 'as per project scope'
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Eye-catching packaging solutions that protect your products while attracting customers on shelves.',
      features: ['Product Packaging', 'Label Design', '3D Mockups', 'Prototyping'],
      price: 'Affodarble'
    },
    {
      icon: Camera,
      title: 'Art Direction',
      description: 'Complete creative direction for photo shoots, campaigns, and multi-platform brand experiences.',
      features: ['Photo Direction', 'Campaign Strategy', 'Creative Concepts', 'Brand Positioning'],
      price: 'Pocket Friendly'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your brand, goals, and target audience to create a strategic foundation.'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Brainstorming and sketching initial concepts based on research and strategy.'
    },
    {
      step: '03',
      title: 'Design & Refinement',
      description: 'Creating detailed designs and refining them based on your feedback.'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'Final delivery with all necessary files and ongoing support for implementation.'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Design Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive design solutions to elevate your brand and achieve your goals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-orange-600 mb-4">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
    Get Quote
    <ArrowRight size={16} />
  </button>
</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                My Design Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures exceptional results for every project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;