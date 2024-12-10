'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClock,
} from 'react-icons/fa';

const TestPreparationPage = () => {
  const router = useRouter();

  const courses = [
    {
      title: 'JLPT (Japanese Language Proficiency Test)',
      description: 'Comprehensive preparation for all JLPT levels (N5 to N1)',
      features: [
        'Structured curriculum for each level',
        'Practice tests and mock exams',
        'Grammar and vocabulary focus',
        'Speaking and listening practice',
      ],
      icon: <FaBook />,
    },
    {
      title: 'JLCT (Japanese Language Capability Test)',
      description: 'Specialized preparation for JLCT certification',
      features: [
        'Cultural context integration',
        'Reading comprehension strategies',
        'Writing skills development',
        'Exam techniques and tips',
      ],
      icon: <FaChalkboardTeacher />,
    },
  ];

  const features = [
    {
      title: 'Expert Instructors',
      description: 'Learn from experienced Japanese language teachers',
      icon: <FaUserGraduate />,
    },
    {
      title: 'Flexible Schedule',
      description: 'Morning, afternoon, and evening classes available',
      icon: <FaClock />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mt-5 md:mt-10 mb-4">
            Test Preparation Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive preparation programs for Japanese language proficiency
            tests
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-blue-600 mb-4">{course.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <ul className="space-y-3">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-4 bg-blue-50 p-6 rounded-lg"
            >
              <div className="text-3xl text-blue-600">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
          onClick={() => router.push('/contact')}
        >
          <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg">
            Enroll Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestPreparationPage;
