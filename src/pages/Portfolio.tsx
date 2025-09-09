import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Filter } from 'lucide-react';

const PortfolioPage = () => {
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
      title: 'Staff Name Tags',
      category: 'branding',
      image: '/Portfolio/1.jpg',
      description: 'Complete brand identity design for Staffs.',
      client: 'Variety of Clients',
      year: '2024',
      tags: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Material']
    },
    {
      id: 2,
      title: 'Drop Banner',
      category: 'print',
      image: '/Portfolio/2.jpg',
      description: 'High-end print materials for luxury fashion brand.',
      client: 'Apparels',
      year: '2024',
      tags: ['Print Design', 'Branding', 'Marketing Materials']
    },
    {
      id: 3,
      title: 'Mugs Printing',
      category: 'digital',
      image: '/Portfolio/3.jpg',
      description: 'give your brand a boost with custom-designed mugs that leave a lasting impression.',
      client: 'Nurses Community',
      year: '2024',
      tags: ['Design', 'Print', 'Merchandise']
    },
    {
      id: 4,
      title: 'Staff Diaries',
      category: 'Branding',
      image: '/Portfolio/4.jpg',
      description: 'make your brand stand out with custom-designed diaries that leave a lasting impression.',
      client: 'Koru Girls.',
      year: '2023',
      tags: ['Design', 'print', 'Branding']
    },
    {
      id: 5,
      title: 'Caps Embroidery',
      category: 'Branding',
      image: '/Portfolio/5.jpg',
      description: 'Elevate your brand with custom embroidered caps that combine style and professionalism.',
      client: 'Sunblest',
      year: '2023',
      tags: ['Embroidery', 'Design', 'Merchandise']
    },
    {
      id: 6,
      title: 'Reflectors Branding',
      category: 'ui-ux',
      image: '/Portfolio/6.jpg',
      description: 'Print your brand a boost with custom-designed reflectors that leave a lasting impression.',
      client: 'Several Clients',
      year: '2024',
      tags: ['Design', 'Print', 'Branding']
    },
    {
      id: 7,
      title: 'Stamps',
      category: 'digital',
      image: '/Portfolio/7.jpg',
      description: 'Custom-designed stamps for business branding and promotional use, adding a unique touch to your materials.',
      client: 'Savory Delights',
      year: '2023',
      tags: ['Stamp Design', 'Branding', 'Marketing']
    },
    {
      id: 8,
      title: 'Sign-Posts',
      category: 'digital',
      image: '/Portfolio/9.jpg',
      description: 'Custom-designed sign-posts for effective wayfinding and brand visibility in various environments.',
      client: 'Cyber Cafe',
      year: '2024',
      tags: ['Signage Design', 'Branding', 'Outdoor']
    },
    {
      id: 9,
      title: 'Tear Drop Banners',
      category: 'digital',
      image: '/Portfolio/10.jpg',
      description: 'Custom-designed tear drop banners for eye-catching outdoor advertising and brand promotion.',
      client: 'Maxcure Hospital',
      year: '2025',
      tags: ['Banner Design', 'Outdoor', 'Marketing']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
                My Portfolio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A showcase of creative projects that demonstrate my passion for exceptional design
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="flex items-center gap-2 text-slate-700 font-medium mb-4 w-full justify-center">
                <Filter size={20} />
                <span>Filter by category:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-orange-500 shadow-md'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Client: {project.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Project Modal */}
            {selectedProject && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-auto"
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
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/70 transition-all duration-300"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-slate-800">{selectedProject.title}</h3>
                      <span className="text-lg text-gray-500">{selectedProject.year}</span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Client</h4>
                        <p className="text-gray-600">{selectedProject.client}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;