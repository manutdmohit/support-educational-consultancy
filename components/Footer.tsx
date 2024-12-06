'use client';

import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaLanguage,
  FaPassport,
  FaSchool,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const services = [
    {
      icon: <FaLanguage className="text-xl" />,
      text: 'Japanese Language Training',
    },
    {
      icon: <FaPassport className="text-xl" />,
      text: 'Visa Application Support',
    },
    {
      icon: <FaSchool className="text-xl" />,
      text: 'School Selection Guidance',
    },
    {
      icon: <FaGraduationCap className="text-xl" />,
      text: 'Academic Counseling',
    },
    {
      icon: <FaUserGraduate className="text-xl" />,
      text: 'Career Development Support',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-5">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">
              Support Educational Consultancy
            </h3>
            <p className="text-sm">
              We're here to Support your Dream, every step of the way
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <span className="text-blue-400">{service.icon}</span>
                  {service.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>Bagbazar- 28 (KTM), Near Shankerdev Campus</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="w-5 h-5" />
                <span>01-5920126</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="w-5 h-5" />
                <span>sup.educational@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="container mx-auto px-4 py-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm"
          >
            © {new Date().getFullYear()} Support Educational Consultancy. All
            rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
