'use client';

import { useRouter } from 'next/navigation';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-80"
        >
          <source src="/japan-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <motion.div
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center min-h-[80vh] text-center my-5"
        >
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="text-green-400">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(100).typeString('STUDY IN').start();
                }}
                options={{
                  cursor: '',
                  loop: false,
                  autoStart: true,
                }}
              />
            </span>

            <div className="m-4"></div>

            <span className="text-red-600">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .changeDelay(100)
                    .typeString('JAPAN')
                    .start();
                }}
                options={{
                  cursor: '',
                  loop: false,
                  autoStart: true,
                }}
              />
            </span>
          </motion.h1>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-8">
            <p className="text-xl text-gray-200 font-bold">
              Embark on your Japanese journey with us! 🌸 📚 Let's explore the
              land of the rising sun together and turn your dreams into reality.
              🎌
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-100"
          >
            <div className="space-y-3">
              {[
                'Language Fee After COE',
                'City of your choice',
                'JLPT, JLCT Preparation classes',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300"
                >
                  <span className="text-green-400 text-2xl">★</span>
                  <p className="text-lg font-bold">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-3">
              {['+2 & Above can apply', 'Bachelor/SSW Preparation classes'].map(
                (item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-green-400 text-2xl">★</span>
                    <p className="text-lg font-bold">{item}</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 md:mb-5 rounded-full hover:shadow-lg transition duration-300"
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
