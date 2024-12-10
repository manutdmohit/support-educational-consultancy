'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const galleryItems = [
  {
    id: 1,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 2,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 3,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 4,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 5,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 6,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 7,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 8,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 9,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 10,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 11,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 12,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 13,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 14,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },
  {
    id: 15,
    image: '/gallery/student1.jpg',
    title: 'JLPT N2 Success',
    description: 'Our students celebrating their JLPT N2 certification success',
  },

  // Add more gallery items
];

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const paginatedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12 mt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Capturing moments of success and cultural exchange in our journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {paginatedItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                } transition-colors`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
