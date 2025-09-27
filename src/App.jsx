import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myPhoto from "./Images/Gemini_Generated_Image_a3nulva3nulva3nu (1).png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCode, FaPalette, FaMobile, FaServer, FaCloud, FaLightbulb } from "react-icons/fa";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPcGGcBz-ZzoF74vcj5_Dz5gGlCiyB5qU",
  authDomain: "portfolio-varad.firebaseapp.com",
  projectId: "portfolio-varad",
  storageBucket: "portfolio-varad.firebasestorage.app",
  messagingSenderId: "815509900645",
  appId: "1:815509900645:web:2c7c554ea520a4d2fa258c",
  measurementId: "G-BCVC9PRRF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Enhanced Constants with Icons
const SERVICES = [
  {
    title: "Web Development",
    number: "01",
    description: "Building responsive, modern web applications with the latest technologies and frameworks.",
    icon: <FaCode className="text-2xl" />
  },
  {
    title: "UI/UX Design",
    number: "02",
    description: "Creating intuitive user interfaces and experiences that delight users and drive engagement.",
    icon: <FaPalette className="text-2xl" />
  },
  {
    title: "Mobile Apps",
    number: "03",
    description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android.",
    icon: <FaMobile className="text-2xl" />
  },
  {
    title: "API Development",
    number: "04",
    description: "Designing and building robust RESTful APIs and GraphQL endpoints for your applications.",
    icon: <FaServer className="text-2xl" />
  },
  {
    title: "DevOps & Deployment",
    number: "05",
    description: "Setting up CI/CD pipelines and deploying applications to cloud platforms with best practices.",
    icon: <FaCloud className="text-2xl" />
  },
  {
    title: "Technical Consulting",
    number: "06",
    description: "Providing expert advice on technology stack, architecture, and implementation strategies.",
    icon: <FaLightbulb className="text-2xl" />
  }
];

const STATS = [
  { value: "15", label: "Projects Completed", suffix: "+" },
  { value: "2", label: "Years Experience", suffix: "+" },
  { value: "12", label: "Happy Clients", suffix: "+" },
  { value: "20", label: "Technologies", suffix: "+" }
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin />, url: "https://in.linkedin.com/in/varad-lokare-860a3336b", name: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/VaradLokare", name: "GitHub" },
  { icon: <FaTwitter />, url: "https://x.com/LokareVarad", name: "Twitter" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/varad.lokare/", name: "Instagram" }
];

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
];

// Enhanced Home Page Component
const HomePage = ({ handleNavigation, scrollToWork }) => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Enhanced hero section animations
    gsap.fromTo(".hero-title", 
      { opacity: 0, y: 80 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.fromTo(".hero-avatar", 
      { opacity: 0, scale: 0.7, rotation: -10 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 1.2, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".hero-avatar",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.fromTo(".hero-text", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // Enhanced stats counter animation
    gsap.to(".stat-number", {
      textContent: function(i, target) {
        return parseInt(target.getAttribute("data-value"));
      },
      duration: 2.5,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onUpdate: function() {
        this.targets()[0].textContent = Math.ceil(this.targets()[0].textContent);
      }
    });

    // Floating elements animation
    gsap.to(".floating-element-1", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-element-2", {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
  }, []);
  
  return (
    <>
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 floating-element-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 floating-element-2"></div>
        
        {/* Large title covering the whole width */}
        <motion.div
          className="absolute w-full text-center z-0 hero-title cursor-pointer"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={() => handleNavigation('home')}
        >
          <h1
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter opacity-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '0.85' }}
          >
            Varad Lokare
          </h1>
        </motion.div>
        
        {/* Avatar image positioned over the title */}
        <motion.div 
          className="relative z-10 flex flex-col items-center hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <motion.div 
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/80 shadow-2xl relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={myPhoto}
              alt="Varad Lokare"
              className="w-full h-full object-cover"
            />

            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full"></div>
            
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-70"></div>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Software Engineer
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              I'm passionate about building creative digital solutions — from websites and applications to innovative platforms that solve real-world challenges. With expertise in React, Firebase, Cloud technologies, and modern web development, I love turning ideas into impactful projects that connect people and businesses.
            </p>
            
            <motion.div 
              className="flex justify-center gap-6 mt-12"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden group font-semibold"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={scrollToWork}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaCode /> View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button 
                className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:border-blue-400 group relative overflow-hidden font-semibold"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavigation('contact')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaMobile /> Contact Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-sm mb-3 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <motion.section 
        className="bg-gradient-to-r from-gray-50 to-blue-50 py-20 relative stats-section overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced animated background elements */}
        <div className="absolute -top-32 right-10 w-80 h-80 bg-blue-200 rounded-full filter blur-4xl opacity-30"></div>
        <div className="absolute -bottom-32 left-10 w-80 h-80 bg-purple-200 rounded-full filter blur-4xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full filter blur-4xl opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
              By the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Quantifying my journey through projects, experience, and technological expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/50 hover:border-blue-200/50 hover:scale-105"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative">
                  <h3 className="text-5xl font-bold text-gray-900 mb-2 stat-number" data-value={stat.value} style={{ fontFamily: "'Poppins', sans-serif" }}>
                    0
                  </h3>
                  {stat.suffix && <span className="text-2xl font-bold text-blue-600">{stat.suffix}</span>}
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: "'Open Sans', sans-serif" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Services Preview Section */}
      <section className="container mx-auto px-6 py-24 relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-100 rounded-full filter blur-4xl opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-100 rounded-full filter blur-4xl opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-green-100 rounded-full filter blur-3xl opacity-15"></div>
        
        <motion.div
          className="mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-blue-500 text-sm mb-3 block font-semibold uppercase tracking-wider" style={{ fontFamily: "'Open Sans', sans-serif" }}>My Expertise</span>
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Development & Design Solutions
          </h2>
          
          <p 
            className="text-xl text-gray-700 max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Creating digital experiences that combine technical excellence with beautiful design, 
            delivering solutions that users love and businesses need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {SERVICES.slice(0, 3).map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 hover:border-blue-200/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4 } }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl text-blue-600">
                  {service.icon}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {service.title}
                  </h3>
                  <span className="text-gray-400 text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {service.number}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 relative z-10 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{service.description}</p>
              
              <motion.div 
                className="text-blue-500 font-semibold flex items-center gap-2 relative z-10 cursor-pointer group/link"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                onClick={() => handleNavigation('services')}
              >
                <span className="group-hover/link:text-blue-600 transition-colors">Discover more</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </motion.div>
              
              {/* Enhanced hover effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold group relative overflow-hidden"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={() => handleNavigation('services')}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </section>

      {/* Enhanced Testimonial Section */}
      <motion.section 
        className="bg-gradient-to-br from-gray-50 to-blue-50 py-28 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-4xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-4xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-15"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-7xl text-blue-200 mb-8"
            >
              "
            </motion.div>
            
            <motion.p 
              className="text-3xl font-light text-gray-800 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Transforming ideas into powerful digital solutions with code, creativity, innovation and business acumen. Every project is an opportunity to create something meaningful.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl inline-block"
            >
              <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Varad Lokare</p>
              <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>Software Developer • Cloud Engineer • AI Enthusiast</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white rounded-full opacity-10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to bring your vision to life?
          </motion.h2>
          
          <motion.p 
            className="text-xl opacity-95 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Let's collaborate to create something extraordinary that resonates with your audience and drives real business results.
          </motion.p>
          
          <motion.button 
            className="bg-white text-blue-600 px-14 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all font-bold relative overflow-hidden group"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={() => handleNavigation('contact')}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project Today
            </span>
            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.p 
            className="mt-6 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Let's discuss your project in a free consultation
          </motion.p>
        </div>
      </motion.section>
    </>
  );
};

// Enhanced Work Page Component
const WorkPage = ({ scrollToContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'ai', label: 'AI Projects' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Soul AI',
      category: 'ai',
      description: 'An intelligent AI assistant platform with natural language processing and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
      technologies: ['React', 'Python', 'TensorFlow', 'Node.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VaradLokare'
    },
    {
      id: 2,
      title: 'Restaurant Management System',
      category: 'web',
      description: 'Complete restaurant management solution with order tracking, inventory, and analytics.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
      technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VaradLokare'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce platform with payment integration and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VaradLokare'
    },
    {
      id: 4,
      title: 'Fitness Mobile App',
      category: 'mobile',
      description: 'Cross-platform fitness application with workout tracking and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VaradLokare'
    },
    {
      id: 5,
      title: 'Portfolio Website Design',
      category: 'design',
      description: 'Modern portfolio website with stunning animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      technologies: ['Figma', 'Adobe XD', 'Webflow'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VaradLokare'
    },
    {
      id: 6,
      title: 'Cloud Dashboard',
      category: 'web',
      description: 'Real-time cloud resource monitoring and management dashboard.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      technologies: ['React', 'AWS', 'GraphQL', 'D3.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VaradLokare'
    }
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>My Portfolio</h1>
        <p className="text-xl text-gray-700 max-w-3xl leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          A curated selection of projects showcasing my expertise in development, design, and innovative solutions.
        </p>
      </motion.div>
      
      {/* Enhanced Category Filters */}
      <motion.div 
        className="flex flex-wrap gap-4 mb-16"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-xl transition-all font-medium backdrop-blur-sm border ${
              selectedCategory === category.id 
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                : 'bg-white/80 text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
            }`}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Enhanced Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-white/50 hover:border-blue-200/50 relative group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-3">
                  <motion.a 
                    href={project.liveUrl}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.githubUrl}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Enhanced Call to Action */}
      <motion.div 
        className="text-center mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>Have a project in mind?</h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto relative z-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Let's discuss how we can work together to bring your ideas to life with cutting-edge technology and creative solutions.
        </p>
        <motion.button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold relative overflow-hidden group"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Poppins', sans-serif" }}
          onClick={scrollToContact}
        >
          <span className="relative z-10 flex items-center gap-2">
            Start a Conversation
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </motion.div>
    </section>
  );
};

// Enhanced About Page Component
const AboutPage = () => {
  const skills = [
    { name: 'React/Next.js', level: 90, category: 'Frontend' },
    { name: 'Node.js/Express', level: 85, category: 'Backend' },
    { name: 'Python/Django', level: 80, category: 'Backend' },
    { name: 'Firebase/Supabase', level: 85, category: 'Database' },
    { name: 'AWS/Cloud', level: 75, category: 'DevOps' },
    { name: 'UI/UX Design', level: 80, category: 'Design' },
    { name: 'React Native', level: 70, category: 'Mobile' },
    { name: 'AI/ML', level: 65, category: 'AI' }
  ];
  
  const experiences = [
    {
      year: '2024 - Present',
      role: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building web applications and mobile apps for clients across various industries.'
    },
    {
      year: '2023 - 2024',
      role: 'Software Engineer Intern',
      company: 'Tech Startup',
      description: 'Developed and maintained web applications using modern technologies.'
    },
    {
      year: '2022 - 2023',
      role: 'Web Developer',
      company: 'Student Projects',
      description: 'Created multiple personal projects to enhance skills and build portfolio.'
    }
  ];
  
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>About Me</h1>
        <p className="text-xl text-gray-700 max-w-4xl leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          I'm a passionate software engineer with a love for creating digital solutions that make a difference. 
          With expertise in full-stack development, cloud technologies, and AI, I enjoy turning complex problems 
          into elegant, user-friendly applications.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Skills & Expertise</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-900" style={{ fontFamily: "'Open Sans', sans-serif" }}>{skill.name}</span>
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full" style={{ fontFamily: "'Open Sans', sans-serif" }}>{skill.category}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 relative pl-10 before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-blue-400 to-purple-400"
              >
                <div className="text-blue-600 font-semibold mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>{exp.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{exp.role}</h3>
                <div className="text-gray-600 mb-3 font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>{exp.company}</div>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Personal Info Section */}
      <motion.div 
        className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Beyond Code</h3>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge through technical writing. I believe in continuous learning and staying updated 
              with the latest industry trends.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-50"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Always Learning</h4>
              <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>Currently exploring AI/ML and advanced cloud architectures</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Enhanced Services Page Component
const ServicesPage = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>My Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
        </p>
      </motion.div>
      
      {/* Enhanced Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-white/50 hover:border-blue-200/50 relative overflow-hidden group"
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4 } }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl text-blue-600">
                {service.icon}
              </div>
              <div className="flex-1 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {service.title}
                </h3>
                <span className="text-gray-400 text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {service.number}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed relative z-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>{service.description}</p>
            
            <motion.div 
              className="text-blue-500 font-semibold flex items-center gap-2 relative z-10 cursor-pointer group/link"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <span className="group-hover/link:text-blue-600 transition-colors">Learn more</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >→</motion.span>
            </motion.div>
            
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500 rounded-3xl"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Enhanced Process Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white rounded-full opacity-10"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white rounded-full opacity-10"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>My Process</h2>
          <p className="text-xl opacity-95 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            A structured approach to ensure quality, efficiency, and successful project delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {[
            { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
            { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and strategy' },
            { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
            { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto backdrop-blur-sm">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h3>
              <p className="opacity-90 text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Enhanced Contact Page Component with Firebase Integration
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Add message to Firestore
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
        read: false
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>Get In Touch</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>
      
      {/* Submission Status Messages */}
      {submitStatus === 'success' && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-8 text-center"
        >
          <p className="font-medium">Thank you for your message! I'll get back to you soon.</p>
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-8 text-center"
        >
          <p className="font-medium">Sorry, there was an error sending your message. Please try again.</p>
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Enhanced Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Let's Connect</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                📧
              </div>
              <div>
                <h3 className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</h3>
                <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>varadlokare@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                📱
              </div>
              <div>
                <h3 className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Phone</h3>
                <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>+91 93253 96340</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Location</h3>
                <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>Mumbai, India</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Follow Me</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-50"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced Contact Form with Firebase */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Send a Message</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder="Project Discussion"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800 rounded-full filter blur-4xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800 rounded-full filter blur-4xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-800 rounded-full filter blur-3xl opacity-15"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Varad Lokare</h3>
            <p className="text-gray-300 max-w-md leading-relaxed mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Creating digital experiences that inspire and deliver results. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-white/20 transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.id}`} className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            © 2024 Varad Lokare. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToWork = () => {
    setActiveSection('work');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    setActiveSection('contact');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const renderSection = () => {
    switch (activeSection) {
      case 'work':
        return <WorkPage scrollToContact={scrollToContact} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage handleNavigation={handleNavigation} scrollToWork={scrollToWork} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-white/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigation('home')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                VL
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Varad Lokare
              </span>
            </motion.div>
            
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.id);
                  }}
                  className={`font-medium transition-all relative py-2 ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      layoutId="activeSection"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
              
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Get in Touch
              </motion.button>
            </div>
            
            {/* Enhanced Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <motion.span 
                  className="w-full h-0.5 bg-gray-700 rounded"
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-gray-700 rounded"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-gray-700 rounded"
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                />
              </div>
            </motion.button>
          </div>
          
          {/* Enhanced Mobile Menu */}
          <motion.div 
            className={`md:hidden mt-4 pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.id);
                  }}
                  className={`font-medium py-3 px-4 rounded-xl transition-all ${
                    activeSection === item.id 
                      ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl shadow-lg font-semibold mt-2"
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>
      
      {/* Main Content */}
      <main className="pt-20">
        {renderSection()}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;