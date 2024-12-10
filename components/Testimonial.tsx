'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Dipendra Shah',
    role: 'Student at Tokyo University',
    image: '/testimonials/student1.jpg',
    quote:
      'Support Educational Consultancy helped me achieve my dream of studying in Japan. Their guidance throughout the application process was invaluable.',
  },
  {
    name: 'Priya Sharma',
    role: 'Language School Student',
    image: '/testimonials/student2.jpg',
    quote:
      'The JLPT preparation classes were excellent. I passed N2 on my first attempt thanks to their dedicated instructors.',
  },
  {
    name: 'Rahul Sahani',
    role: 'SSW Program Participant',
    image: '/testimonials/student3.jpg',
    quote:
      "Their support didn't end with admission. They helped me settle in Japan and continue to guide me whenever needed.",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="flex flex-col items-center text-center flex-grow">
        <motion.div
          className="relative w-20 h-20 mb-4"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="flex-grow"
        >
          <FaQuoteLeft className="text-3xl text-blue-600 mb-4 mx-auto" />
          <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-auto pt-4 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
      >
        <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
        <p className="text-blue-600">{testimonial.role}</p>
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students who have achieved their dreams of
            studying in Japan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
