import { motion } from 'framer-motion';
import { Users, Award, Clock, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers across the country'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Awards Won',
      description: 'Industry recognition for excellence'
    },
    {
      icon: Clock,
      number: '10+',
      label: 'Years Experience',
      description: 'Decade of design expertise'
    },
    {
      icon: Star,
      number: '5.0',
      label: 'Average Rating',
      description: 'Consistent 5-star reviews'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-4 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-lg font-semibold text-primary-700 mb-2">
                  {stat.label}
                </h4>
                <p className="text-sm text-primary-500">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 