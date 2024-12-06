'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 transition-all duration-300 bg-[#000080] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Support Educational Consultancy Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-sm md:text-2xl font-bold text-white transition-colors duration-300 hover:text-blue-200">
                Support Educational Consultancy
              </span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${
                  item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                }`}
                className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                {item}
              </Link>
            ))}

            {/* Call-to-Action Button */}
            <Link
              href="/apply"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-all duration-300"
            >
              Apply Now
            </Link>

            {/* Language Selector */}
            {/* <div className="relative">
              <select
                className="bg-[#000080] text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue="EN"
              >
                <option value="EN">EN</option>
                <option value="JP">JP</option>
                <option value="NP">NP</option>
              </select>
            </div> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#000080]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === 'home' ? '' : item.toLowerCase()
              }`}
              className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
