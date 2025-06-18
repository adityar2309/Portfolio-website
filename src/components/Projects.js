import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Multilingual Translation Platform",
      description: "A full-stack multilingual translation platform with grammar analysis, pronunciation guidance, and cultural insights using Google Cloud APIs and Gemini AI.",
      technologies: ["Python", "Flask", "React", "Google Cloud", "Gemini API"],
      githubUrl: "https://github.com/adityar2309/TTSAI",
      liveUrl: "https://ttsai.netlify.app/",
      features: [
        "Real-time translation with cultural context",
        "Pronunciation guidance and audio feedback",
        "Spaced repetition learning system",
        "Dynamic flashcard generation"
      ]
    },
    {
      title: "Vehicle Parking Management",
      description: "A comprehensive web application with role-based dashboards for managing parking lot bookings, pricing, and availability with automated notifications.",
      technologies: ["Python", "Flask", "React", "MongoDB", "Redis", "Celery"],
      githubUrl: "https://github.com/adityar2309/Vehicle-Parking-App",
      liveUrl: "https://vehicle-parking-app.netlify.app",
      features: [
        "Role-based admin and user dashboards",
        "Automated email notifications",
        "Real-time booking management",
        "CSV data export functionality"
      ]
    },
    {
      title: "Ticketify - Ticket Booking System",
      description: "A full-stack ticket booking application with robust database design and automated background tasks for enhanced user experience.",
      technologies: ["Python", "Flask", "Vue.js", "SQLite", "Docker"],
      githubUrl: "https://github.com/adityar2309/TICKETIFY",
      liveUrl: "https://ticketiify.netlify.app",
      features: [
        "6 interconnected database models",
        "JWT authentication and authorization",
        "Automated daily and monthly reports",
        "Optimized performance with caching"
      ]
    },
    {
      title: "SynergySphere - Team Collaboration Platform",
      description: "🏆 Built by Team 336 for the Odoo Hackathon. An advanced, AI-powered project management and team collaboration platform designed to help teams operate at their peak performance with intelligent insights and real-time collaboration.",
      technologies: ["React", "Flask", "PostgreSQL", "Socket.IO", "Tailwind CSS", "SQLAlchemy", "Redis"],
      githubUrl: "https://github.com/your-github/SynergySphere_336",
      liveUrl: "https://voluble-tapioca-bc2df4.netlify.app",
      features: [
        "AI-powered task prioritization and deadline risk assessment",
        "Real-time collaboration with task-level chat and @mentions",
        "Comprehensive financial management with budget tracking",
        "Predictive analytics and project health scoring",
        "Mobile-responsive design for work anywhere"
      ]
    },
    {
      title: "Movie Review Sentiment Analysis",
      description: "A machine learning pipeline for movie sentiment prediction achieving 80%+ accuracy across multiple classification models.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      githubUrl: "https://github.com/adityar2309/movie-sentiment-analyzer",
      liveUrl: "https://movie-sentiment-ai.netlify.app/",
      features: [
        "Multiple ML model comparison",
        "TF-IDF vectorization pipeline",
        "Hyperparameter optimization",
        "Robust data preprocessing"
      ]
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work in full-stack development and data science, 
              demonstrating practical solutions to real-world problems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <FiCode className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <FiGithub className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </motion.a>
                      
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <FiExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.liveUrl ? 'Live & Source Available' : 'Source Available'}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/adityar2309"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <FiGithub />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 