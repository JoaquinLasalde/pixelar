"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa la consulta gratuita para mi negocio. ¿Cuándo podemos hablar?'
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-80 bg-blue-500/5 blur-3xl" style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-72 bg-green-500/5 blur-3xl" style={{
          clipPath: 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)'
        }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-56 bg-accent-blue/3 blur-2xl" style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-display text-text-primary mb-6 max-w-6xl mx-auto"
          >
            Desarrollo web{' '}
            <span className="gradient-text">profesional</span>
            <br />
            para tu negocio local
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <p className="text-lg sm:text-xl text-accent-blue text-warm">
              5 años de experiencia corporativa
            </p>
            <p className="text-base sm:text-lg text-text-secondary text-body">
              precios de freelancer argentino.
            </p>
            <p className="text-base sm:text-lg text-text-secondary text-organic">
              Llevá tu negocio al siguiente nivel.
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <div className="glass imperfect-border px-6 py-3 slight-rotation">
              <span className="text-accent-green text-heading text-base sm:text-lg">87% más clientes</span>
              <span className="text-text-secondary text-body ml-2">con presencia web</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-24"
          >
            <button
              onClick={handleWhatsAppClick}
              className="neon-button flex items-center gap-2 text-base sm:text-lg px-8 py-4 text-heading"
            >
              Consultá Gratis
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={scrollToPortfolio}
              className="border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-dark-primary px-8 py-4 rounded-lg transition-all duration-300 text-base sm:text-lg text-heading"
            >
              Ver mi trabajo
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex flex-col items-center text-text-secondary"
          >
            <span className="text-sm mb-2 text-body">Deslizá para ver más</span>
            <div className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent-blue rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
