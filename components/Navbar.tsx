'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    setSubmitting(true);

    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Application submitted successfully!');
        closeModal();
      } else {
        toast.error(data.error || 'Failed to submit application');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setIsDialogOpen(false);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <nav className="fixed w-full z-50 shadow-lg">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Top Section with Logo and Name */}
          <div className="bg-[#000080]">
            <div className="w-full max-w-7xl flex items-center justify-center space-x-4 h-20">
              <Link href="/" className="flex items-center space-x-4">
                <Image
                  src="/support-logo-main.jpg"
                  alt="Support Educational Consultancy"
                  className="h-16 w-16 object-contain"
                  width={64}
                  height={64}
                  priority
                />

                <span className="text-2xl lg:text-5xl font-bold text-white whitespace-nowrap">
                  Support Educational Consultancy
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom Section with Navigation */}
          <div className="bg-[#000080]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
              <div className="flex items-center justify-center space-x-4">
                {[
                  'Home',
                  'About',
                  'Services',
                  'Gallery',
                  'Test Preparation',
                  'Contact',
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${
                      item.toLowerCase() === 'home'
                        ? ''
                        : item.toLowerCase() === 'test preparation'
                        ? 'test-preparation'
                        : item.toLowerCase()
                    }`}
                    className="text-white bg-[#a3055b] hover:text-blue-900 px-4 py-2 rounded text-lg font-mono font-bold  transition-all duration-300 hover:bg-blue-50"
                  >
                    {item}
                  </Link>
                ))}
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden bg-[#000080]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/support-logo-main.jpg"
                    alt="Support Educational Consultancy"
                    className="h-12 w-12 object-contain"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <span className="text-sm font-bold text-white">
                  Support Educational Consultancy
                </span>
              </Link>
              <button
                className=" bg-white text-blue-900 hover:bg-blue-50 p-2 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                'Home',
                'About',
                'Services',
                'Gallery',
                'Test Preparation',
                'Contact',
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${
                    item.toLowerCase() === 'home'
                      ? ''
                      : item.toLowerCase() === 'test preparation'
                      ? 'test-preparation'
                      : item.toLowerCase()
                  }`}
                  className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isDialogOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto mt-5"
            >
              <div className="absolute top-1 right-2">
                <button
                  onClick={closeModal}
                  className="bg-white text-gray-500 hover:text-red-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Apply Now
                </h2>
                <p className="text-gray-600 mt-2">
                  Fill in your details to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {['fullName', 'email', 'phone'].map((field) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay:
                        ['fullName', 'email', 'phone'].indexOf(field) * 0.1,
                    }}
                  >
                    <label className="block text-gray-700 font-medium mb-2 capitalize">
                      {field.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                      type={
                        field === 'email'
                          ? 'email'
                          : field === 'phone'
                          ? 'tel'
                          : 'text'
                      }
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      placeholder={`Enter your ${field
                        .replace(/([A-Z])/g, ' $1')
                        .toLowerCase()
                        .trim()}`}
                      required
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* <AnimatePresence>
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">Apply Now</h2>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {['fullName', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 font-medium mb-2 capitalize">
                      {field.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                      type={
                        field === 'email'
                          ? 'email'
                          : field === 'phone'
                          ? 'tel'
                          : 'text'
                      }
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence> */}
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Navbar;
