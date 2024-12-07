'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaPassport,
  FaSchool,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaGraduationCap className="w-8 h-8 text-blue-600" />,
      title: 'Language Programs',
      description:
        'Language Fee After COE with comprehensive JLPT & JLCT preparation classes',
    },
    {
      icon: <FaPassport className="w-8 h-8 text-blue-600" />,
      title: 'Visa Support',
      description:
        'Complete assistance with visa processing and COE application',
    },
    {
      icon: <FaSchool className="w-8 h-8 text-blue-600" />,
      title: 'City Selection',
      description: 'Freedom to choose your preferred city for studies in Japan',
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: 'Eligibility',
      description: '+2 & Above qualifications can apply for our programs',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about/1.jpg"
            alt="Japanese Temple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support Educational Consultancy
            </h1>
            <p className="text-xl">
              We're here to Support your Dream, every step of the way
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-blue-900">
                Your Trusted Partner for Education in Japan
              </h2>
              <p className="text-gray-600">
                Located in Bagbazar-28 (KTM), near Shankerdev Campus, Support
                Educational Consultancy specializes in providing comprehensive
                guidance for students aspiring to study in Japan.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert guidance for Japanese language preparation',
                  'Specialized Bachelor and SSW preparation programs',
                  'Complete visa and COE processing support',
                  'Choice of study location across Japan',
                  'Continuous support throughout your journey',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/about/2.jpg"
                alt="Support Educational Consultancy"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
