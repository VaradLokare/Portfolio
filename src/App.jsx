import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myPhoto from "./Images/Gemini_Generated_Image_a3nulva3nulva3nu (1).png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Constants
const SERVICES = [
  {
    title: "Web Development",
    number: "01",
    description: "Building responsive, modern web applications with the latest technologies and frameworks."
  },
  {
    title: "UI/UX Design",
    number: "02",
    description: "Creating intuitive user interfaces and experiences that delight users and drive engagement."
  },
  {
    title: "Mobile Apps",
    number: "03",
    description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android."
  },
  {
    title: "API Development",
    number: "04",
    description: "Designing and building robust RESTful APIs and GraphQL endpoints for your applications."
  },
  {
    title: "DevOps & Deployment",
    number: "05",
    description: "Setting up CI/CD pipelines and deploying applications to cloud platforms with best practices."
  },
  {
    title: "Technical Consulting",
    number: "06",
    description: "Providing expert advice on technology stack, architecture, and implementation strategies."
  }
];

const STATS = [
  { value: "5", label: "Projects Completed" },
  { value: "1", label: "Years Experience" },
  { value: "5", label: "Happy Clients" },
  { value: "12", label: "Technologies" }
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin />, url: "https://in.linkedin.com/in/varad-lokare-860a3336b", name: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/VaradLokare", name: "GitHub" },
  { icon: <FaTwitter />, url: "https://x.com/LokareVarad", name: "Twitter" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/varad.lokare/", name: "Instagram" }
];

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
];

const handleNavigation = () => {
     window.location.href = "/HomePage";
  };

// Animation Variants
const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 75 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  },
  slideInFromLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -5 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
};

// Home Page Component
const HomePage = ({ handleNavigation }) => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(".hero-title", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(".hero-avatar", 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".hero-avatar",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(".hero-text", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Stats counter animation
    gsap.to(".stat-number", {
      textContent: function(i, target) {
        return parseInt(target.getAttribute("data-value"));
      },
      duration: 2,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onUpdate: function() {
        this.targets()[0].textContent = Math.ceil(this.targets()[0].textContent);
      }
    });
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Large title covering the whole width */}
        <motion.div
      className="absolute w-full text-center z-0 hero-title cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onClick={handleNavigation}
    >
      <h1
        className="text-7xl md:text-9xl font-bold uppercase tracking-tight opacity-10 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
        style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '0.9' }}
      >
        Varad Lokare
      </h1>
    </motion.div>
        
        {/* Avatar image positioned over the title */}
        <motion.div 
          className="relative z-10 flex flex-col items-center hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
            {/* Image */}
            <img
              src={myPhoto}
              alt="Varad Lokare"
              className="w-full h-full object-cover"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full"></div>
          </div>
          
          <motion.div 
            className="mt-8 text-center hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
             Software Engineer
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              I'm passionate about building creative digital solutions — from websites and applications to innovative platforms that solve real-world challenges. With experience in React, Firebase, and modern web technologies, I love turning ideas into impactful projects that connect people and businesses.
            </p>
            
            <motion.div 
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavigation('work')}
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-blue-400 group relative overflow-hidden"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavigation('contact')}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-sm mb-2">Scroll down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="bg-white py-16 border-y border-gray-100 relative stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements for stats */}
        <div className="absolute -top-20 right-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 left-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2 stat-number" data-value={stat.value} style={{ fontFamily: "'Poppins', sans-serif" }}>0</h3>
                <p className="text-gray-600 text-sm uppercase tracking-wider" style={{ fontFamily: "'Open Sans', sans-serif" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview Section */}
      <section className="container mx-auto px-6 py-24 relative">
        {/* Animated decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
        
        <motion.div
          className="mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 text-sm mb-2 block" style={{ fontFamily: "'Open Sans', sans-serif" }}>// SERVICES</span>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Development & Design Solutions
          </h2>
          
          <p 
            className="text-lg text-gray-700 max-w-2xl"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Creating digital experiences that combine technical excellence with beautiful design, 
            delivering solutions that users love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {SERVICES.slice(0, 3).map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {service.title}
                </h3>
                <span className="text-gray-400 text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {service.number}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 relative z-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>{service.description}</p>
              
              <motion.div 
                className="text-blue-500 font-medium flex items-center gap-2 relative z-10 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                onClick={() => handleNavigation('work')}
              >
                <span>Learn more</span>
                <span>→</span>
              </motion.div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={() => handleNavigation('services')}
          >
            View All Services
          </motion.button>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <motion.section 
        className="bg-gray-50 py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl text-gray-300 mb-8"
            >
              "
            </motion.div>
            
            <motion.p 
              className="text-2xl font-light text-gray-800 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Transforming ideas into powerful digital solutions with code, creativity, innovation and business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Varad Lokare</p>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>Software Developer, Entrepreneur, Digital Solutions, Cloud, Gen AI</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white rounded-full opacity-10"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white rounded-full opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to bring your vision to life?
          </motion.h2>
          
          <motion.p 
            className="text-xl opacity-90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Let's collaborate to create something extraordinary that resonates with your audience.
          </motion.p>
          
          <motion.button 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold relative overflow-hidden group"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={() => handleNavigation('contact')}
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </motion.section>
    </>
  );
};

// Work Page Component
const WorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Soul Ai',
      category: 'web',
      description: 'A full-featured online shopping platform with payment integration and inventory management.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Restaurant Management',
      category: 'web',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'Web Projecrs',
      category: 'design',
      description: 'Complete redesign of corporate website with improved UX and modern aesthetics.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Figma', 'Adobe XD', 'Illustrator']
    },
    {
      id: 4,
      title: 'App Projects',
      category: 'mobile',
      description: 'Project management tool with team collaboration features and real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Vue.js', 'Express', 'PostgreSQL']
    },
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>My Work</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          A selection of projects I've worked on, showcasing my skills in development and design.
        </p>
      </motion.div>
      
      {/* Category Filters */}
      <motion.div 
        className="flex flex-wrap gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.id 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {category.label}
          </button>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
              {project.title}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.button 
                className="text-blue-600 font-medium flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                <a href="https://github.com/VaradLokare" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                </a>
                <span>→</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// About Page Component
const AboutPage = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'JAVA', level: 50 },
    { name: 'Google Cloud', level: 80 },
    { name: 'AWS', level: 40 }
  ];
  
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2025 - Present',
      description: 'Developing responsive web applications and implementing modern frameworks and best practices.'
    },
    {
      role: 'Web Developer',
      company: 'Digital Solutions LLC',
      period: '2024 - 2025',
      description: 'Developed and maintained web applications for clients across various industries.'
    },
    {
      role: 'UI/UX Designer',
      company: 'Creative Minds Agency',
      period: '2023 - 2025',
      description: 'Created user-centered designs for websites and mobile applications, focusing on usability and aesthetics.'
    }
  ];
  
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2022 - 2026'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Code Academy',
      period: '2024'
    },
    {
      degree: 'Google Ai Labs',
      institution: 'Code Academy',
      period: '2025'
    }
  ];
  
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>About Me</h1>
        <p className="text-lg text-gray-700 max-w-3xl" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          I'm a passionate software engineer with 1 year of experience creating digital solutions 
          that combine technical excellence with user-centered design. My approach focuses on writing 
          clean, maintainable code while delivering exceptional user experiences.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Skills & Expertise</h2>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "'Open Sans', sans-serif" }}>{skill.name}</span>
                  <span style={{ fontFamily: "'Open Sans', sans-serif" }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{exp.role}</h3>
                <p className="text-gray-600 mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>{exp.company} • {exp.period}</p>
                <p className="text-gray-700" style={{ fontFamily: "'Open Sans', sans-serif" }}>{exp.description}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mt-12 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{edu.degree}</h3>
                <p className="text-gray-600 mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>{edu.institution} • {edu.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Page Component
const ServicesPage = ({ handleNavigation }) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Services</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          I offer a range of services to help bring your digital ideas to life with technical excellence and creative design.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-100 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {service.title}
              </h3>
              <span className="text-gray-400 text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {service.number}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 relative z-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>{service.description}</p>
            
            <motion.div 
              className="text-blue-500 font-medium flex items-center gap-2 relative z-10 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              onClick={() => handleNavigation('contact')}
            >
              <span>Get started</span>
              <span>→</span>
            </motion.div>
            
            {/* Hover effect line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
  className="text-center mt-16"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <Link to="/workshop"> {/* Change "/workshop" to your target page */}
    <motion.button
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Let's Work Together
    </motion.button>
  </Link>
</motion.div>
    </section>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Get In Touch</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              ></textarea>
            </div>
            
            <motion.button 
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all w-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</h3>
                <p className="text-gray-700" style={{ fontFamily: "'Open Sans', sans-serif" }}>shrilokare20@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Location</h3>
                <p className="text-gray-700" style={{ fontFamily: "'Open Sans', sans-serif" }}>Maharashtra, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Availability</h3>
                <p className="text-gray-700" style={{ fontFamily: "'Open Sans', sans-serif" }}>Available for freelance projects</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Connect with me</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavigation = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const renderPage = () => {
    switch (activePage) {
      case 'work':
        return <WorkPage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage handleNavigation={handleNavigation} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage handleNavigation={handleNavigation} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
      className="text-2xl font-bold cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
      onClick={handleNavigation}
    >
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Varad Lokare
      </span>
    </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${activePage === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {item.label}
                {activePage === item.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    layoutId="activePage"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </nav>
        
        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden bg-white border-t border-gray-200 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`py-2 text-left font-medium ${activePage === item.id ? 'text-blue-600' : 'text-gray-700'}`}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </header>
      
      {/* Main Content */}
      <main className="pt-20">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Varad Lokare</h3>
              <p className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>Software Engineer & Digital Creator</p>
            </div>
            
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              © {new Date().getFullYear()} Varad Lokare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;