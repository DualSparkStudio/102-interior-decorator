import { motion } from 'framer-motion';
import {
    ArrowRight,
    Home,
    Palette,
    Ruler,
    Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Complete interior design solutions tailored to your style and budget.',
      features: ['Space Planning', 'Color Schemes', 'Furniture Selection', 'Lighting Design'],
      price: 'From $2,500'
    },
    {
      icon: Home,
      title: 'Space Planning',
      description: 'Optimize your space for maximum functionality and visual appeal.',
      features: ['Layout Optimization', 'Traffic Flow', 'Storage Solutions', 'Multi-purpose Design'],
      price: 'From $1,200'
    },
    {
      icon: Sparkles,
      title: 'Color Consultation',
      description: 'Expert color guidance to create the perfect mood and atmosphere.',
      features: ['Color Psychology', 'Palette Creation', 'Material Coordination', 'Lighting Consideration'],
      price: 'From $800'
    },
    {
      icon: Ruler,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that complement your space and lifestyle.',
      features: ['Custom Sourcing', 'Style Matching', 'Quality Assurance', 'Installation Support'],
      price: 'From $1,500'
    }
  ];

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            We offer comprehensive interior design services to transform your space 
            into a beautiful, functional environment that reflects your unique style.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 text-accent-600 rounded-lg mb-4 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-primary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-primary-500">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-accent-600">
                    {service.price}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-accent-500 group-hover:text-accent-600 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview; 