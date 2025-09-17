"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Smartphone, TrendingUp, Globe, Users, Clock, Award } from 'lucide-react';
import { statistics } from '@/data';
import AnimatedCounter from '@/components/ui/animated-counter';

const Statistics: React.FC = () => {
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
      search: Search,
      'shield-check': ShieldCheck,
      smartphone: Smartphone,
      'trending-up': TrendingUp,
    };
    
    const IconComponent = iconMap[iconName] || TrendingUp;
    return <IconComponent className="h-12 w-12" />;
  };

  // Additional business stats
  const businessStats = [
    { icon: Globe, value: 92, suffix: '%', label: 'de los negocios necesita presencia web' },
    { icon: Users, value: 73, suffix: '%', label: 'de clientes prefiere empresas con web' },
    { icon: Clock, value: 24, prefix: '', suffix: 'hs', label: 'para tener tu sitio funcionando' },
    { icon: Award, value: 150, prefix: '+', suffix: '%', label: 'ROI promedio en el primer año' },
  ];

  // Parse percentage values for counter
  const parseStatValue = (value: string) => {
    const numValue = parseInt(value.replace(/[^\d]/g, ''));
    const suffix = value.replace(/[\d]/g, '');
    return { numValue, suffix };
  };

  return (
    <section className="section-padding bg-dark-primary relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-80 bg-accent-blue/3 blur-3xl" style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-96 bg-accent-green/3 blur-3xl" style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}></div>
        
        {/* Organic geometric shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-accent-blue/10 blur-sm" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
          transform: 'rotate(15deg)'
        }}></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-accent-green/10 blur-sm" style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          transform: 'rotate(30deg)'
        }}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl text-display text-text-primary mb-6"
          >
            ¿Por qué tu negocio <span className="gradient-text">necesita una web</span>?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto text-body"
          >
            Los números no mienten. En la era digital, tener presencia web no es opcional, es esencial para el crecimiento de tu negocio.
          </motion.p>
        </motion.div>

        {/* Main Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {statistics.map((stat) => {
            const { numValue, suffix } = parseStatValue(stat.value);
            
            return (
              <motion.div key={stat.id} variants={itemVariants}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg text-center p-6 h-full hover:border-blue-400/40 transition-all duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-blue-500/20 border border-blue-500/30">
                      {getIconComponent(stat.icon)}
                    </div>
                  </div>
                  
                  {/* Animated Counter */}
                  <div className="mb-4">
                    <AnimatedCounter
                      end={numValue}
                      suffix={suffix}
                      className="text-4xl font-bold text-blue-400"
                      duration={2500}
                    />
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Business Impact Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Impacto real en tu negocio
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessStats.map((stat, _index) => (
              <motion.div key={_index} variants={itemVariants}>
                <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="mb-3">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-2xl font-bold text-green-400"
                      duration={2000}
                    />
                  </div>
                  <p className="text-sm text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Con web vs Sin web
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Web */}
            <motion.div variants={itemVariants}>
              <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-lg">
                <h4 className="text-2xl font-bold text-red-400 mb-6 text-center">
                  Sin presencia web
                </h4>
                <ul className="space-y-4">
                  {[
                    'Solo clientes de paso',
                    'Competencia te supera',
                    'Sin credibilidad online',
                    'Ventas limitadas al local',
                    'Difícil encontrar tu negocio'
                  ].map((item, _index) => (
                    <li key={_index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* With Web */}
            <motion.div variants={itemVariants}>
              <div className="p-8 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="text-2xl font-bold text-green-400 mb-6 text-center">
                  Con presencia web
                </h4>
                <ul className="space-y-4">
                  {[
                    'Clientes 24/7 desde internet',
                    'Competís de igual a igual',
                    'Confianza y profesionalismo',
                    'Ventas sin límite geográfico',
                    'Fácil de encontrar en Google'
                  ].map((item, _index) => (
                    <li key={_index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
