import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGitBranch, FiBookOpen } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Full-Stack Development",
      description: "Experienced in React, Vue.js, Flask, Django, and Node.js"
    },
    {
      icon: FiDatabase,
      title: "Data Science",
      description: "Skilled in machine learning, data analysis, and visualization"
    },
    {
      icon: FiGitBranch,
      title: "DevOps & Tools",
      description: "Proficient with Docker, Redis, Celery, and cloud platforms"
    },
    {
      icon: FiBookOpen,
      title: "Continuous Learning",
      description: "Currently pursuing BS in Data Science at IIT Madras"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer and data scientist with a strong foundation in both theoretical knowledge and practical application.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold"
                >
                  AR
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50"></div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm Aditya R
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                <p>
                  I'm a passionate Full-Stack Developer and Data Scientist currently pursuing my 
                  Bachelor's in Data Science and Applications at IIT Madras. With a strong foundation 
                  in both web development and data analytics, I love building solutions that bridge 
                  the gap between technology and real-world problems.
                </p>
                
                <p>
                  My journey in tech has led me to work with diverse technologies including React, 
                  Python, Flask, Vue.js, and various machine learning frameworks. I've developed 
                  full-stack applications ranging from multilingual learning platforms to parking 
                  management systems, always focusing on user experience and scalable architecture.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or analyzing interesting datasets to uncover meaningful insights.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2025</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expected Graduation</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              What I Bring to the Table
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                      <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 