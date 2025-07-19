import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import PortfolioShowcase from '../components/sections/PortfolioShowcase';
import ServicesPreview from '../components/sections/ServicesPreview';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
              Let's create a beautiful, functional space that reflects your unique style 
              and enhances your daily life. Start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Free Consultation
              </motion.button>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 