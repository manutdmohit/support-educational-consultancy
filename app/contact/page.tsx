'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
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
        setFormData({ fullName: '', email: '', phone: '', message: '' });
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We're here to help and answer any questions you might have
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <p className="text-gray-700">
                    Bagbazar-28 (KTM), Near Shankerdev Campus
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <p className="text-gray-700">01-5920126</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <p className="text-gray-700">sup.educational@gmail.com</p>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.524866888569!2d85.3194326!3d27.7055137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60cb4393ad0671cf%3A0x3a6a16855505d721!2ssupport%20educational%20consultancy!5e0!3m2!1sen!2snp!4v1733570927450!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['fullName', 'email', 'phone'].map((field) => (
                <motion.div key={field} whileHover={{ scale: 1.01 }}>
                  <label
                    htmlFor={field}
                    className="block text-gray-700 font-medium mb-2 capitalize"
                  >
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
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                disabled={submitting}
              >
                <FaPaperPlane className="text-sm" />
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactPage;
