import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiReact, SiVuedotjs, SiNodedotjs, 
  SiFlask, SiDjango, SiFastapi, SiMongodb, SiPostgresql, 
  SiDocker, SiRedis, SiGit, SiGooglecloud, SiPandas, 
  SiNumpy, SiScikitlearn, SiHtml5 
} from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, level: 90, color: "#3776ab" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "#f7df1e" },
        { name: "SQL", icon: FiDatabase, level: 80, color: "#336791" },
        { name: "HTML/CSS", icon: SiHtml5, level: 85, color: "#e34f26" },
      ]
    },
    {
      title: "Frontend Frameworks",
      skills: [
        { name: "React", icon: SiReact, level: 88, color: "#61dafb" },
        { name: "Vue.js", icon: SiVuedotjs, level: 75, color: "#4fc08d" },
      ]
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Flask", icon: SiFlask, level: 90, color: "#000000" },
        { name: "Django", icon: SiDjango, level: 80, color: "#092e20" },
        { name: "Node.js", icon: SiNodedotjs, level: 75, color: "#339933" },
        { name: "FastAPI", icon: SiFastapi, level: 70, color: "#009688" },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47a248" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#336791" },
        { name: "Redis", icon: SiRedis, level: 75, color: "#dc382d" },
        { name: "Docker", icon: SiDocker, level: 80, color: "#2496ed" },
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: SiPandas, level: 85, color: "#150458" },
        { name: "NumPy", icon: SiNumpy, level: 80, color: "#013243" },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 75, color: "#f7931e" },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Git", icon: SiGit, level: 90, color: "#f05032" },
        { name: "Google Cloud", icon: SiGooglecloud, level: 70, color: "#4285f4" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains of software development and data science.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon 
                            className="w-6 h-6" 
                            style={{ color: skill.color }}
                          />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          custom={skill.level}
                          className="h-full rounded-full transition-all duration-300 group-hover:shadow-lg"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Icons */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Additional Technologies & Tools
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { icon: SiPython, name: "Python", color: "#3776ab" },
                { icon: SiReact, name: "React", color: "#61dafb" },
                { icon: SiVuedotjs, name: "Vue.js", color: "#4fc08d" },
                { icon: SiFlask, name: "Flask", color: "#000000" },
                { icon: SiDjango, name: "Django", color: "#092e20" },
                { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
                { icon: SiDocker, name: "Docker", color: "#2496ed" },
                { icon: SiGooglecloud, name: "GCP", color: "#4285f4" },
                { icon: SiRedis, name: "Redis", color: "#dc382d" },
                { icon: SiGit, name: "Git", color: "#f05032" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="group relative"
                >
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <tech.icon 
                      className="w-8 h-8 mx-auto" 
                      style={{ color: tech.color }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Programming Languages & Frameworks
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Database Technologies
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  3+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Years of Learning & Building
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 