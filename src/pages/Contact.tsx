import { motion } from 'framer-motion';
import {
    Calendar,
    CheckCircle,
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Design Street', 'City, State 12345'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@eleganceinteriors.com', 'We reply within 24 hours'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM-6PM', 'Saturday: 10AM-4PM', 'Sunday: Closed'],
      action: 'Schedule Meeting'
    }
  ];

  const services = [
    'Interior Design Consultation',
    'Space Planning',
    'Color Consultation',
    'Furniture Selection',
    'Lighting Design',
    'Project Management'
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Contact us today to schedule a consultation 
              and discuss your interior design project. We're here to help bring your 
              vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-primary-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                  >
                    {info.action}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-primary-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours 
                to discuss your project.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors">
                    <option>Select a service</option>
                    <option>Interior Design</option>
                    <option>Space Planning</option>
                    <option>Color Consultation</option>
                    <option>Furniture Selection</option>
                    <option>Lighting Design</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Project Budget
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors">
                    <option>Select budget range</option>
                    <option>Under $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>Over $50,000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 py-4"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                  Our Services
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-accent-500 flex-shrink-0" />
                      <span className="text-primary-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Info */}
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Free Consultation
                </h3>
                <p className="mb-6 opacity-90">
                  Schedule a free 30-minute consultation to discuss your project 
                  and get expert advice from our design team.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} />
                    <span>30-minute session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={20} />
                    <span>In-person or virtual</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} />
                    <span>No obligation</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-white text-accent-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors w-full"
                >
                  Schedule Consultation
                </motion.button>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">
                      How long does a typical project take?
                    </h4>
                    <p className="text-primary-600 text-sm">
                      Most projects take 4-8 weeks from concept to completion, depending on scope.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">
                      What is your design process?
                    </h4>
                    <p className="text-primary-600 text-sm">
                      We follow a 5-step process: consultation, concept development, planning, implementation, and reveal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">
                      Do you work with specific budgets?
                    </h4>
                    <p className="text-primary-600 text-sm">
                      Yes, we work with various budgets and can provide solutions for any price range.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-primary-600">
              Come see our showroom and meet our team in person.
            </p>
          </motion.div>
          
          <div className="bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-primary-600">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl font-medium">Interactive Map</p>
              <p className="text-sm opacity-75">123 Design Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 