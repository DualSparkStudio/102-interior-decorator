import { motion } from 'framer-motion';
import {
    ArrowRight,
    Camera,
    CheckCircle,
    Clock,
    Home,
    Lightbulb,
    Paintbrush,
    Palette,
    Ruler,
    Sparkles,
    Users
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  // Load services data from localStorage
  useEffect(() => {
    const savedServices = localStorage.getItem('admin-services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
  }, []);

  // Default services if no admin data
  const defaultServices = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Complete interior design solutions tailored to your style and budget.',
      price: 'From $2,500',
      duration: '4-8 weeks',
      features: [
        'Initial consultation and space assessment',
        'Concept development and mood boards',
        'Space planning and furniture layout',
        'Color scheme and material selection',
        'Furniture and accessory sourcing',
        'Project management and installation',
        'Final styling and photography'
      ]
    },
    {
      icon: Home,
      title: 'Space Planning',
      description: 'Optimize your space for maximum functionality and visual appeal.',
      price: 'From $1,200',
      duration: '2-4 weeks',
      features: [
        'Detailed space analysis',
        'Traffic flow optimization',
        'Storage solutions design',
        'Multi-purpose space planning',
        'Furniture placement strategy',
        'Lighting layout design',
        '3D visualization'
      ]
    },
    {
      icon: Sparkles,
      title: 'Color Consultation',
      description: 'Expert color guidance to create the perfect mood and atmosphere.',
      price: 'From $800',
      duration: '1-2 weeks',
      features: [
        'Color psychology analysis',
        'Personal style assessment',
        'Custom color palette creation',
        'Material and texture coordination',
        'Lighting consideration',
        'Sample testing and approval',
        'Implementation guidance'
      ]
    },
    {
      icon: Ruler,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that complement your space and lifestyle.',
      price: 'From $1,500',
      duration: '3-6 weeks',
      features: [
        'Style and budget assessment',
        'Custom furniture sourcing',
        'Quality and durability evaluation',
        'Size and proportion analysis',
        'Delivery and installation coordination',
        'Warranty and maintenance guidance',
        'Future expansion planning'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Create the perfect ambiance with strategic lighting solutions.',
      price: 'From $1,000',
      duration: '2-4 weeks',
      features: [
        'Lighting needs assessment',
        'Natural and artificial light optimization',
        'Fixture selection and placement',
        'Smart lighting integration',
        'Energy efficiency recommendations',
        'Installation coordination',
        'Lighting control systems'
      ]
    },
    {
      icon: Camera,
      title: 'Staging & Photography',
      description: 'Professional staging and photography for real estate or portfolio.',
      price: 'From $1,800',
      duration: '1-3 days',
      features: [
        'Space preparation and cleaning',
        'Furniture and accessory staging',
        'Professional photography',
        'Virtual tour creation',
        'Marketing material preparation',
        'Social media optimization',
        'Portfolio enhancement'
      ]
    }
  ];

  // Use admin services if available, otherwise use defaults
  const displayServices = services.length > 0 ? services : defaultServices;

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We meet to discuss your vision, budget, and timeline.',
      icon: Users
    },
    {
      step: 2,
      title: 'Concept Development',
      description: 'We create mood boards and design concepts for your approval.',
      icon: Lightbulb
    },
    {
      step: 3,
      title: 'Detailed Planning',
      description: 'We develop detailed plans, specifications, and material selections.',
      icon: Ruler
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'We manage the entire process from procurement to installation.',
      icon: Paintbrush
    },
    {
      step: 5,
      title: 'Final Reveal',
      description: 'We unveil your transformed space and ensure your complete satisfaction.',
      icon: Sparkles
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive interior design services to transform your space 
              into a beautiful, functional environment that reflects your unique style 
              and enhances your daily life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {displayServices.map((service, index) => {
              // Use default icon if service doesn't have one
              const Icon = service.icon || Palette;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center">
                        <Icon size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-primary-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-accent-600">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span className="text-primary-500">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-primary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 btn-primary flex items-center space-x-2"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              We follow a proven 5-step process to ensure your project is completed 
              on time, within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent-200 transform translate-x-4"></div>
                    )}
                  </div>
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project and create something beautiful together. 
              Contact us today for a free consultation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-accent-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 