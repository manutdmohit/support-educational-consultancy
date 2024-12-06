'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GetStartedWith = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/getstarted.jpg"
          alt="Japanese Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey to Japan Today
          </h2>
          <p className="text-lg mb-8">
            Join our community and receive updates about studying in Japan
          </p>

          {/* Email Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="text-black flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300 whitespace-nowrap"
            >
              Join Now
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedWith;
