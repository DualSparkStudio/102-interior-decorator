import { motion } from 'framer-motion';
import { ArrowRight, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioShowcase = () => {
  const projects = [
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

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we transform spaces into 
            beautiful, functional environments that exceed expectations.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-accent-500 text-white'
                    : 'bg-primary-100 text-primary-600 hover:bg-accent-100 hover:text-accent-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 mx-auto"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase; 