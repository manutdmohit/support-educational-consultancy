'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    'Experienced Japanese Language Instructors',
    'High Success Rate in JLPT & JLCT',
    'Direct University & College Placements',
    'Comprehensive Visa Support',
    'Affordable Study Programs',
    'Post-Arrival Support in Japan',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Support Educational Consultancy?
          </h2>
          <p className="text-gray-600">
            Your Gateway to Quality Education in Japan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] overflow-hidden"
          >
            <Image
              src="/why-choose-us.png"
              width={500}
              height={500}
              alt="Support Educational Consultancy"
              className="object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Right side - Reasons */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-gray-700">{reason}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
