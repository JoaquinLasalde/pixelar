"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Headphones, Code, Clock, Award, Zap } from 'lucide-react';
import { benefits } from '@/data';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> } = {
      briefcase: Briefcase,
      'map-pin': MapPin,
      'dollar-sign': DollarSign,
      headphones: Headphones,
    };
    
    const IconComponent = iconMap[iconName] || Briefcase;
    return <IconComponent className="h-8 w-8 text-accent-blue" />;
  };

  const stats = [
    { icon: Code, value: "15+", label: "Proyectos completados" },
    { icon: Clock, value: "5", label: "Años de experiencia" },
    { icon: Zap, value: "24/7", label: "Soporte técnico" },
    { icon: Award, value: "100%", label: "Proyectos entregados" },
  ];

  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-80 bg-accent-blue/3 blur-3xl" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
        }}></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-72 bg-accent-green/3 blur-3xl" style={{
          clipPath: 'polygon(35% 0%, 65% 0%, 100% 35%, 100% 65%, 65% 100%, 35% 100%, 0% 65%, 0% 35%)'
        }}></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-48 bg-accent-blue/2 blur-2xl" style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl text-display text-text-primary mb-6"
          >
            ¿Por qué elegir <span className="gradient-text">PixelAr</span>?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto text-body"
          >
            Combino la calidad y profesionalismo de las grandes empresas
            con la cercanía y precios justos de un freelancer argentino.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
            key={index}
              variants={itemVariants}
              className="text-center p-4"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <stat.icon className="h-8 w-8 text-accent-blue" />
                </div>
              </div>
              <h3 className="text-3xl text-display text-white mb-2">{stat.value}</h3>
              <p className="text-gray-300 text-sm text-body">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={itemVariants}>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 h-full hover:border-blue-400/50 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                      {getIconComponent(benefit.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-heading text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-body">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Touch Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="glass imperfect-border p-8 md:p-12 slight-rotation-reverse">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
              {/* Real Photo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-accent-blue p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-dark-primary flex items-center justify-center">
                    {/* Placeholder para foto real - reemplazar con imagen */}
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <span className="text-2xl font-bold gradient-text">JL</span>
                    </div>
                    {/* 
                    <img 
                      src="/images/joaquin-photo.jpg" 
                      alt="Joaquín Lasalde - Desarrollador" 
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl text-display text-text-primary mb-4">
                  Joaquín Lasalde
                </h3>
                <p className="text-lg text-text-secondary mb-6 text-warm">
                  Desarrollador Full-Stack con 5 años trabajando en startups y multinacionales. 
                  Ahora ayudo a negocios locales argentinos a crecer con tecnología de primera calidad 
                  a precios accesibles.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent-blue" />
                    <span className="text-body">Buenos Aires, Argentina</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-accent-green" />
                    <span className="text-body">Respuesta en &lt; 2hs</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
