import { motion } from 'framer-motion';
import { Eye, Filter, Grid, Heart, List, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  likes: number;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Portfolio data from home page
  const projects: PortfolioProject[] = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Living Room',
      description: 'Contemporary design with natural elements',
      image: '🏠',
      rating: 5,
      likes: 128
    },
    {
      id: 2,
      title: 'Elegant Kitchen',
      category: 'Kitchen',
      description: 'Functional and beautiful kitchen design',
      image: '🍳',
      rating: 5,
      likes: 95
    },
    {
      id: 3,
      title: 'Cozy Bedroom',
      category: 'Bedroom',
      description: 'Peaceful retreat with warm tones',
      image: '🛏️',
      rating: 5,
      likes: 156
    },
    {
      id: 4,
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      description: 'Spa-like bathroom with premium finishes',
      image: '🚿',
      rating: 5,
      likes: 87
    },
    {
      id: 5,
      title: 'Home Office',
      category: 'Office',
      description: 'Productive workspace with style',
      image: '💼',
      rating: 5,
      likes: 112
    },
    {
      id: 6,
      title: 'Dining Area',
      category: 'Dining',
      description: 'Elegant dining space for gatherings',
      image: '🍽️',
      rating: 5,
      likes: 134
    }
  ];

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office', 'Dining'];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary-800 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and see how we transform spaces into 
              beautiful, functional environments that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="section-padding bg-white border-b border-primary-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-primary-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-accent-500 text-white'
                        : 'bg-primary-100 text-primary-600 hover:bg-accent-100 hover:text-accent-600'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-primary-100 rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white text-accent-600 shadow-sm'
                    : 'text-primary-600 hover:text-accent-600'
                }`}
              >
                <Grid size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white text-accent-600 shadow-sm'
                    : 'text-primary-600 hover:text-accent-600'
                }`}
              >
                <List size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                No projects found for {selectedCategory}
              </h3>
              <p className="text-primary-600 mb-8">
                Check back soon for new {selectedCategory.toLowerCase()} projects or contact us for custom options.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('All')}
                className="btn-primary"
              >
                View All Projects
              </motion.button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-primary-200 to-accent-200 group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-primary-700 hover:bg-accent-500 hover:text-white transition-colors"
                          >
                            <Eye size={20} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-primary-700 hover:bg-accent-500 hover:text-white transition-colors"
                          >
                            <Heart size={20} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-primary-500 mb-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(project.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                          <span className="ml-1">({project.rating})</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={14} />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Get Quote
                        </motion.button>
                        <Link
                          to={`/portfolio/${project.category.toLowerCase().replace(' ', '-')}`}
                          className="bg-primary-100 hover:bg-primary-200 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          View Designs
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image */}
                    <div className="lg:w-1/3">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl flex items-center justify-center text-6xl">
                        {project.image}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-primary-600 leading-relaxed mb-2">
                            {project.description}
                          </p>
                          <p className="text-sm text-primary-500">
                            Category: <span className="font-medium">{project.category}</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(project.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                            <span className="text-sm text-primary-500">({project.rating})</span>
                          </div>
                          <div className="flex items-center space-x-1 text-primary-500">
                            <Heart size={16} />
                            <span className="text-sm">{project.likes}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                          >
                            Get Quote
                          </motion.button>
                          <Link
                            to={`/portfolio/${project.category.toLowerCase().replace(' ', '-')}`}
                            className="btn-secondary"
                          >
                            View Designs
                          </Link>
                        </div>
                        <div className="flex items-center space-x-1 text-primary-500">
                          <Heart size={16} />
                          <span className="text-sm">Save</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary-600">
                    Category: <span className="font-medium">{selectedProject.category}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-primary-500 hover:text-primary-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl flex items-center justify-center text-8xl">
                  {selectedProject.image}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">Description</h3>
                    <p className="text-primary-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">Rating & Reviews</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(selectedProject.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                      <span className="text-primary-600">({selectedProject.rating} stars)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-500">
                      <Heart size={16} />
                      <span>{selectedProject.likes} people liked this project</span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex-1"
                    >
                      Get Quote
                    </motion.button>
                    <Link
                      to={`/portfolio/${selectedProject.category.toLowerCase().replace(' ', '-')}`}
                      className="btn-secondary flex-1"
                    >
                      View All Designs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 