import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Filter, Grid, Heart, List, Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  designs: Design[];
}

interface Design {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  features: string[];
}

const PortfolioDetail = () => {
  const { category } = useParams<{ category: string }>();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  // Website demo data
  const websitePortfolio = [
    {
      id: 'website-1',
      title: 'Modern Living Room',
      category: 'Living Room',
      description: 'Contemporary design with natural elements',
      designs: [
        {
          id: 'website-1-1',
          name: 'Minimalist Elegance',
          description: 'Clean lines with neutral tones and natural materials',
          image: '🏠',
          price: '$15,000',
          features: ['Open concept', 'Natural lighting', 'Custom furniture']
        },
        {
          id: 'website-1-2',
          name: 'Cozy Contemporary',
          description: 'Warm and inviting with modern comfort',
          image: '🛋️',
          price: '$18,000',
          features: ['Plush seating', 'Warm lighting', 'Textured fabrics']
        }
      ]
    },
    {
      id: 'website-2',
      title: 'Elegant Kitchen',
      category: 'Kitchen',
      description: 'Functional and beautiful kitchen design',
      designs: [
        {
          id: 'website-2-1',
          name: 'Modern Farmhouse',
          description: 'Rustic charm meets modern functionality',
          image: '🍳',
          price: '$25,000',
          features: ['Quartz countertops', 'Custom cabinetry', 'Island design']
        },
        {
          id: 'website-2-2',
          name: 'Contemporary Chef',
          description: 'Professional-grade kitchen for serious cooking',
          image: '👨‍🍳',
          price: '$35,000',
          features: ['Professional appliances', 'Ample storage', 'Workflow optimization']
        }
      ]
    },
    {
      id: 'website-3',
      title: 'Cozy Bedroom',
      category: 'Bedroom',
      description: 'Peaceful retreat with warm tones',
      designs: [
        {
          id: 'website-3-1',
          name: 'Serene Sanctuary',
          description: 'Calming colors and soft textures for restful sleep',
          image: '🛏️',
          price: '$8,000',
          features: ['Plush bedding', 'Accent lighting', 'Storage solutions']
        },
        {
          id: 'website-3-2',
          name: 'Modern Retreat',
          description: 'Contemporary comfort with smart features',
          image: '🌙',
          price: '$12,000',
          features: ['Smart lighting', 'Built-in storage', 'Comfortable seating']
        }
      ]
    },
    {
      id: 'website-4',
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      description: 'Spa-like bathroom with premium finishes',
      designs: [
        {
          id: 'website-4-1',
          name: 'Modern Spa',
          description: 'Luxurious spa-like bathroom design',
          image: '🚿',
          price: '$20,000',
          features: ['Premium fixtures', 'Heated floors', 'Steam shower']
        }
      ]
    },
    {
      id: 'website-5',
      title: 'Home Office',
      category: 'Office',
      description: 'Productive workspace with style',
      designs: [
        {
          id: 'website-5-1',
          name: 'Executive Office',
          description: 'Professional workspace with modern amenities',
          image: '💼',
          price: '$12,000',
          features: ['Ergonomic furniture', 'Smart storage', 'Professional lighting']
        }
      ]
    },
    {
      id: 'website-6',
      title: 'Dining Area',
      category: 'Dining',
      description: 'Elegant dining space for gatherings',
      designs: [
        {
          id: 'website-6-1',
          name: 'Formal Dining',
          description: 'Elegant dining room for entertaining',
          image: '🍽️',
          price: '$16,000',
          features: ['Formal table setting', 'Ambient lighting', 'Storage solutions']
        }
      ]
    }
  ];

  // Load portfolio data from localStorage and combine with website data
  useEffect(() => {
    const savedPortfolio = localStorage.getItem('admin-portfolio');
    const adminPortfolio = savedPortfolio ? JSON.parse(savedPortfolio) : [];
    
    // Combine website and admin portfolio data
    setPortfolio([...websitePortfolio, ...adminPortfolio]);
  }, []);

  // Filter portfolio items by category
  const categoryItems = portfolio.filter(item => 
    item.category.toLowerCase() === category?.toLowerCase().replace('-', ' ')
  );

  // Get all designs for this category
  const allDesigns = categoryItems.flatMap(item => 
    item.designs.map(design => ({
      ...design,
      projectTitle: item.title,
      projectDescription: item.description
    }))
  );

  const categoryName = category?.replace('-', ' ').charAt(0).toUpperCase() + category?.replace('-', ' ').slice(1) || 'Category';

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
            <div className="flex items-center justify-center mb-6">
              <Link
                to="/portfolio"
                className="flex items-center space-x-2 text-primary-600 hover:text-accent-600 transition-colors mr-4"
              >
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </Link>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary-800 mb-6">
              {categoryName} Designs
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of {categoryName.toLowerCase()} designs, 
              each crafted with attention to detail and functionality.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-primary-600">
              <div className="flex items-center space-x-2">
                <Filter size={16} />
                <span>{allDesigns.length} designs available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span>Premium quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="section-padding bg-white border-b border-primary-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-primary-600 font-medium">View Mode:</span>
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
            
            <div className="text-sm text-primary-500">
              Showing {allDesigns.length} designs for {categoryName}
            </div>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {allDesigns.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                No designs found for {categoryName}
              </h3>
              <p className="text-primary-600 mb-8">
                Check back soon for new {categoryName.toLowerCase()} designs or contact us for custom options.
              </p>
              <Link
                to="/portfolio"
                className="btn-primary"
              >
                Back to Portfolio
              </Link>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedDesign(design)}
                >
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Design Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-primary-200 to-accent-200 group-hover:scale-110 transition-transform duration-300">
                        {design.image}
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

                      {/* Project Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                          {design.projectTitle}
                        </span>
                      </div>
                    </div>

                    {/* Design Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                        {design.name}
                      </h3>
                      <p className="text-primary-600 mb-4 leading-relaxed">
                        {design.description}
                      </p>
                      
                      {design.price && (
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-accent-600">
                            {design.price}
                          </span>
                        </div>
                      )}
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {design.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                            <span className="text-primary-600">{feature}</span>
                          </div>
                        ))}
                        {design.features.length > 3 && (
                          <div className="text-sm text-primary-500">
                            +{design.features.length - 3} more features
                          </div>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between mt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Get Quote
                        </motion.button>
                        <div className="text-sm text-primary-500">
                          {design.features.length} features
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {allDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedDesign(design)}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image */}
                    <div className="lg:w-1/3">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl flex items-center justify-center text-6xl">
                        {design.image}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
                            {design.name}
                          </h3>
                          <p className="text-primary-600 leading-relaxed mb-2">
                            {design.description}
                          </p>
                          <p className="text-sm text-primary-500">
                            From project: <span className="font-medium">{design.projectTitle}</span>
                          </p>
                        </div>
                        {design.price && (
                          <div className="text-right">
                            <span className="text-2xl font-bold text-accent-600">
                              {design.price}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {design.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-white px-3 py-1 rounded-full text-xs text-primary-600 border border-primary-200"
                          >
                            {feature}
                          </span>
                        ))}
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
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary"
                          >
                            View Details
                          </motion.button>
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

      {/* Design Modal */}
      {selectedDesign && (
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
                    {selectedDesign.name}
                  </h2>
                  <p className="text-primary-600">
                    From project: <span className="font-medium">{selectedDesign.projectTitle}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-primary-500 hover:text-primary-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Design Image */}
                <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl flex items-center justify-center text-8xl">
                  {selectedDesign.image}
                </div>

                {/* Design Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">Description</h3>
                    <p className="text-primary-600 leading-relaxed">
                      {selectedDesign.description}
                    </p>
                  </div>

                  {selectedDesign.price && (
                    <div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-2">Pricing</h3>
                      <p className="text-3xl font-bold text-accent-600">
                        {selectedDesign.price}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-3">Features</h3>
                    <div className="space-y-2">
                      {selectedDesign.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                          <span className="text-primary-600">{feature}</span>
                        </div>
                      ))}
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex-1"
                    >
                      Contact Designer
                    </motion.button>
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

export default PortfolioDetail; 