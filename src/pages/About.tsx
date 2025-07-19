import { motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    Heart,
    Mail,
    MapPin,
    Phone,
    Star,
    Users
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Design',
      description: 'We pour our hearts into every project, creating spaces that inspire and delight.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every aspect of our work.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Your vision and satisfaction are at the center of everything we do.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of trends while creating timeless, functional designs.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Interior Designer',
      experience: '10+ years',
      avatar: '👩‍💼',
      bio: 'Sarah brings creativity and expertise to every project, specializing in modern and contemporary designs.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Designer',
      experience: '8+ years',
      avatar: '👨‍💼',
      bio: 'Michael excels in space planning and functional design solutions for residential and commercial spaces.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Color Specialist',
      experience: '6+ years',
      avatar: '👩‍🎨',
      bio: 'Emily has a keen eye for color psychology and creating harmonious color palettes that transform spaces.'
    },
    {
      name: 'David Thompson',
      role: 'Project Manager',
      experience: '12+ years',
      avatar: '👨‍🏗️',
      bio: 'David ensures every project runs smoothly from concept to completion, on time and within budget.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Awards Won' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary-800 mb-6">
                About Elegance Interiors
              </h1>
              <p className="text-xl text-primary-600 mb-8 leading-relaxed">
                We are passionate about creating beautiful, functional spaces that reflect 
                your unique style and enhance your daily life. With over a decade of 
                experience, we've helped hundreds of clients transform their homes and 
                businesses into stunning environments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-accent-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-primary-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <div className="text-8xl mb-4">🏠</div>
                  <p className="text-xl font-medium">Beautiful Design</p>
                  <p className="text-sm opacity-75">Professional & Modern</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              These core values guide everything we do and ensure we deliver 
              exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-4 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300"
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Our talented team of designers and project managers work together 
              to bring your vision to life with creativity and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-primary-500 mb-4">{member.experience}</p>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                Ready to start your design journey? Contact us today to schedule 
                a consultation and discuss your project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">Address</h4>
                    <p className="text-primary-600">123 Design Street, City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">Phone</h4>
                    <p className="text-primary-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">Email</h4>
                    <p className="text-primary-600">hello@eleganceinteriors.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                Schedule a Consultation
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 