import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'print', name: 'Print Design' },
    { id: 'digital', name: 'Digital' },
    { id: 'packaging', name: 'Packaging' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Tech Startup Brand',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Complete brand identity design for an innovative tech startup'
    },
    {
      id: 2,
      title: 'Luxury Fashion Campaign',
      category: 'print',
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
      description: 'High-end print materials for luxury fashion brand'
    },
    {
      id: 3,
      title: 'E-commerce Website Design',
      category: 'digital',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
      description: 'User-focused e-commerce platform design'
    },
    {
      id: 4,
      title: 'Organic Food Packaging',
      category: 'packaging',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      description: 'Sustainable packaging design for organic food products'
    },
    {
      id: 5,
      title: 'Corporate Annual Report',
      category: 'print',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      description: 'Professional annual report design with infographics'
    },
    {
      id: 6,
      title: 'Mobile App Interface',
      category: 'digital',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      description: 'Clean and intuitive mobile application interface'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my best work showcasing creativity, innovation, and attention to detail
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-orange-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <Eye size={20} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-auto m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;