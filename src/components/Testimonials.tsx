import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'David transformed our brand identity completely. His creative vision and attention to detail exceeded our expectations. The new logo and brand materials have significantly improved our market presence.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder',
      company: 'Green Earth Co.',
      content: 'Working with David was an absolute pleasure. He understood our sustainability message perfectly and created packaging designs that truly reflect our values. Highly recommended!',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Creative Director',
      company: 'Fashion Forward',
      content: 'David\'s design work helped us launch our most successful campaign ever. His ability to capture our brand essence in visual form is remarkable. Professional, creative, and reliable.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={goToPrevious}
                className="p-2 text-white hover:text-orange-500 transition-colors duration-300"
              >
                <ChevronLeft size={32} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-orange-500' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 text-white hover:text-orange-500 transition-colors duration-300"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-orange-400">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;