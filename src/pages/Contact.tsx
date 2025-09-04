import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:davytitoz456@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '' });
    }, 3000);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hi David! I'm interested in getting a quote for: ${formData.subject}\n\nName: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`);
    window.open(`https://wa.me/254769480189?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'davytitoz456@gmail.com',
      link: 'mailto:davytitoz456@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+254 769 480 189',
      link: 'tel:+254769480189'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'P.O Box 7448-40100, Kisumu, Kenya',
      link: '#'
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
                Let's Work Together
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to bring your vision to life? Let's discuss your project and create something amazing
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Get In Touch</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    I'm always excited to work on new projects and collaborate with creative minds. 
                    Whether you need a complete brand overhaul or a single design piece, I'm here to help 
                    bring your ideas to life with precision and creativity.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{info.title}</div>
                        <div className="text-lg font-medium text-slate-800 break-all">{info.content}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Fast turnaround times without compromising quality
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Unlimited revisions until you're completely satisfied
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Clear communication throughout the design process
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Competitive pricing with exceptional value
                    </li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Contact Forms */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Email Contact Form */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Mail className="w-6 h-6 text-orange-500" />
                        Send Email
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                              Project Type
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                            >
                              <option value="">Select a service</option>
                              <option value="Brand Identity Design">Brand Identity Design</option>
                              <option value="Print Design">Print Design</option>
                              <option value="Digital Design">Digital Design</option>
                              <option value="Packaging Design">Packaging Design</option>
                              <option value="UI/UX Design">UI/UX Design</option>
                              <option value="Art Direction">Art Direction</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                              Budget Range
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              required
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                            >
                              <option value="">Select budget</option>
                              <option value="$200 - $500">$200 - $500</option>
                              <option value="$500 - $1000">$500 - $1000</option>
                              <option value="$1000 - $2000">$1000 - $2000</option>
                              <option value="$2000+">$2000+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Details
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                            placeholder="Tell me about your project, timeline, and specific requirements..."
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <Send size={20} />
                          Send Email
                        </button>
                      </form>
                    </>
                  )}
                </div>

                {/* WhatsApp Quote Form */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    Get Quick Quote via WhatsApp
                  </h3>
                  <p className="text-green-100 mb-6">
                    Need a quick quote? Send me your project details via WhatsApp for faster response!
                  </p>
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                        placeholder="Your name"
                      />
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                      >
                        <option value="">Select service</option>
                        <option value="Brand Identity Design">Brand Identity Design</option>
                        <option value="Print Design">Print Design</option>
                        <option value="Digital Design">Digital Design</option>
                        <option value="Packaging Design">Packaging Design</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Art Direction">Art Direction</option>
                      </select>
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 resize-none"
                      placeholder="Brief project description..."
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-white text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={20} />
                      Get Quote on WhatsApp
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ContactPage;