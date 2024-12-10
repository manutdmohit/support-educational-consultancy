'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useSpring } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaClock } from 'react-icons/fa';

interface CounterProps {
  value: number;
  text: string;
  icon: React.ReactNode;
}

const Counter = ({ value, text, icon }: CounterProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCounter((prev) => {
          if (prev < value) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 50);

      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
      });

      return () => clearInterval(timer);
    }
  }, [isInView, controls, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      animate={controls}
      className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl text-blue-600 mb-4"
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 flex items-center
       whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
      "
      >
        <span>{counter}</span>
        <span className="text-blue-600">+</span>
      </motion.div>
      <p className="text-gray-600 text-center font-medium uppercase tracking-wider">
        {text}
      </p>
    </motion.div>
  );
};
const StatsSection = () => {
  const stats = [
    {
      value: 5,
      text: 'Years of Experience',
      icon: <FaClock className="animate-pulse" />,
    },
    {
      value: 150,
      text: 'Happy Students',
      icon: <FaGraduationCap className="animate-bounce" />,
    },
    {
      value: 19,
      text: 'Colleges & Universities',
      icon: <FaUniversity className="animate-pulse" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Our Achievement Numbers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              value={stat.value}
              text={stat.text}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
