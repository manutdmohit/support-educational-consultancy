'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Japanese Language Training',
      description:
        'Expert-led JLPT & JLCT preparation with comprehensive language courses',
      image: '/services/language.jpg',
      delay: 0.2,
    },
    {
      title: 'Visa Application Support',
      description: 'Complete assistance with COE and visa processing',
      image: '/services/visa.jpg',
      delay: 0.3,
    },
    {
      title: 'University Placement',
      description: 'Direct placement in prestigious Japanese universities',
      image: '/services/university.jpg',
      delay: 0.4,
    },
    {
      title: 'Bachelor/SSW Programs',
      description: 'Specialized preparation for Bachelor and SSW programs',
      image: '/services/bachelor.jpg',
      delay: 0.5,
    },
    {
      title: 'Career Counseling',
      description: 'Professional guidance for your career path in Japan',
      image: '/services/career.jpg',
      delay: 0.6,
    },
    {
      title: 'Post-Arrival Support',
      description: 'Continuous support after reaching Japan',
      image: '/services/support.jpg',
      delay: 0.7,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your educational journey in Japan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div className="p-6 mt-auto">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
