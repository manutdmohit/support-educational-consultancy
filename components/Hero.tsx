'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundColor: 'rgba(0, 0, 102, 0.85)',
          backgroundBlendMode: 'lighten',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column */}
          <div className="text-white space-y-6 order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">
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
                      .pauseFor(1000) // Wait for "STUDY IN" to complete
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
            </h1>

            <div>
              <p className="text-lg font-bold">
                Embark on your Japanese journey with us! 🌸 📚 Let's explore the
                land of the rising sun together and turn your dreams into
                reality. 🎌 Connect with us today and let the adventure begin!
                We Support You 🤝
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">★</span>
                <p className="text-lg">Language Fee After COE</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">★</span>
                <p className="text-lg">City of your choice</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">★</span>
                <p className="text-lg">JLPT, JLCT Preparation classes</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">★</span>
                <p className="text-lg">+2 & Above can apply</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">★</span>
                <p className="text-lg">Bachelor/SSW Preparation classes</p>
              </div>
            </div>
            <div className="pt-6">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300 mb-4 md:mb-0">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative w-full h-full rounded-lg overflow-hidden order-1">
            <Image
              src="/hero.png"
              alt="Support Educational Consultancy"
              width={450}
              height={450}
              className="w-full h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
