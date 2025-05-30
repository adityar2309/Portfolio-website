import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/adityar2309",
      label: "GitHub"
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/aditya-r-192a24197",
      label: "LinkedIn"
    },
    {
      icon: FiMail,
      href: "mailto:21f1006862@ds.study.iitm.ac.in",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text cursor-pointer"
                onClick={scrollToTop}
              >
                Aditya R
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                Full Stack Developer & Data Scientist passionate about building 
                innovative solutions and extracting insights from data.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <motion.button
                    key={link}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-left"
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Get in Touch
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <a 
                    href="mailto:21f1006862@ds.study.iitm.ac.in"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    21f1006862@ds.study.iitm.ac.in
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <a 
                    href="tel:9373629345"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    937-362-9345
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Pune, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>© 2024 Aditya R. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FiHeart className="w-4 h-4 text-red-500" />
                </motion.div>
                <span>and React</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 