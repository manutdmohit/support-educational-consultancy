'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DirectorMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Message from Director
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Director's Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/director.jpg"
                alt="Director"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-blue-900 text-white py-2 px-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold">Mr. Bibek Pathak</h3>
              <p className="text-sm">Director</p>
            </motion.div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 leading-relaxed"
            >
              "Welcome to Support Educational Consultancy! Our mission is to
              guide students towards their dreams of studying in Japan. With
              years of experience and dedication, we provide comprehensive
              support from language preparation to university placement."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 leading-relaxed"
            >
              "We understand the challenges and opportunities that come with
              studying abroad. Our team is committed to ensuring each student
              receives personalized attention and guidance throughout their
              journey."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-blue-900 font-bold">
                  Mr. Bibek Pathak
                </span>
                <span className="text-gray-500">Director</span>
                <span className="text-gray-500">
                  Support Educational Consultancy
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
