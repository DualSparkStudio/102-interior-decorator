import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'New York, NY',
      rating: 5,
      content: 'Elegance Interiors transformed our living room into a stunning space that perfectly reflects our style. The attention to detail and quality of work exceeded our expectations. Highly recommended!',
      avatar: '👩‍💼',
      project: 'Modern Living Room Design'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      location: 'San Francisco, CA',
      rating: 5,
      content: 'Working with Elegance Interiors was a pleasure from start to finish. They understood our vision and delivered a beautiful office space that boosts productivity and impresses clients.',
      avatar: '👨‍💼',
      project: 'Corporate Office Design'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      location: 'Miami, FL',
      rating: 5,
      content: 'As a fellow designer, I appreciate the level of craftsmanship and creativity that Elegance Interiors brings to every project. Their work is truly inspiring and professional.',
      avatar: '👩‍🎨',
      project: 'Luxury Condo Renovation'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Real Estate Developer',
      location: 'Austin, TX',
      rating: 5,
      content: 'We\'ve worked with Elegance Interiors on multiple projects and they consistently deliver exceptional results. Their designs add significant value to our properties.',
      avatar: '👨‍🏗️',
      project: 'Multi-Unit Development'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl"
          >
            <div className="text-center">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-6"
              >
                <Quote size={32} />
              </motion.div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-primary-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>

              {/* Project */}
              <p className="text-sm text-accent-600 font-medium">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-accent-600 hover:bg-accent-50 transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-accent-500'
                      : 'bg-primary-300 hover:bg-primary-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-accent-600 hover:bg-accent-50 transition-all duration-200"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-2">98%</div>
            <div className="text-primary-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
            <div className="text-primary-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-2">5.0</div>
            <div className="text-primary-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 