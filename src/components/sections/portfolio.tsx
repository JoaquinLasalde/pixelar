"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Clock, Code2, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioItems, portfolioCategories } from '@/data';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleContactForProject = (projectTitle: string) => {
    const message = encodeURIComponent(
      `¡Hola! Me gustó mucho el proyecto "${projectTitle}" que hiciste. ¿Podrías hacer algo similar para mi negocio?`
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  // Placeholder images with gradients
  const getPlaceholderImage = (category: string, _index: number) => {
    const colors = {
      restaurant: ['from-orange-500', 'to-red-500'],
      ecommerce: ['from-blue-500', 'to-purple-500'],
      landing: ['from-green-500', 'to-teal-500'],
      commerce: ['from-pink-500', 'to-rose-500'],
      corporate: ['from-gray-500', 'to-slate-500'],
    };
    
    const colorPair = colors[category as keyof typeof colors] || ['from-accent-blue', 'to-accent-green'];
    
    return (
      <div className={`w-full h-full bg-gradient-to-br ${colorPair[0]} ${colorPair[1]} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-white text-center">
          <Code2 className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <div className="text-xs uppercase tracking-wider opacity-60">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-accent-green/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-blue/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
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
            Trabajos que <span className="gradient-text">hablan por sí solos</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto text-body"
          >
            Proyectos reales que generaron resultados medibles. 
            Cada diseño está pensado para convertir visitantes en clientes.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {portfolioCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent-blue text-dark-primary shadow-lg shadow-accent-blue/25'
                  : 'bg-dark-tertiary text-text-secondary hover:bg-dark-primary hover:text-text-primary border border-dark-tertiary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredPortfolio.map((item, _index) => (
              <motion.div
                key={`${selectedCategory}-${item.id}`}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group cursor-pointer"
              >
                <Card variant="hover" className="overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Placeholder Image */}
                     {getPlaceholderImage(item.category, _index)}
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/50 to-transparent flex items-end justify-center p-6"
                    >
                      <Button
                        variant="neon"
                        size="sm"
                        onClick={() => handleContactForProject(item.title)}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver detalles
                      </Button>
                    </motion.div>

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-accent-green text-dark-primary px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="h-3 w-3 mr-1" fill="currentColor" />
                        Destacado
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-accent-green">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.developmentTime}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-dark-tertiary text-text-secondary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-accent-blue/20 text-accent-blue text-xs rounded-full">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 text-accent-blue text-xs rounded-full border border-accent-blue/30">
                        {portfolioCategories.find(cat => cat.id === item.category)?.label}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              ¿Te gustó algún proyecto?
            </h3>
            <p className="text-text-secondary mb-6 text-lg">
              Puedo crear algo similar (o mejor) para tu negocio. 
              Cada proyecto es único y se adapta a tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="neon" 
                size="lg"
                onClick={() => handleContactForProject('proyecto personalizado')}
              >
                Quiero algo así
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver todos los trabajos
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
