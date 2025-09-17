"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Target, Settings, Zap, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
      globe: Globe,
      'shopping-cart': ShoppingCart,
      target: Target,
      settings: Settings,
      zap: Zap,
    };
    
    const IconComponent = iconMap[iconName] || Globe;
    return <IconComponent className="h-10 w-10" />;
  };

  const categories = [
    { id: 'all', label: 'Todos los servicios', count: services.length },
    { id: 'web', label: 'Páginas Web', count: services.filter(s => s.category === 'web').length },
    { id: 'ecommerce', label: 'E-commerce', count: services.filter(s => s.category === 'ecommerce').length },
    { id: 'landing', label: 'Landing Pages', count: services.filter(s => s.category === 'landing').length },
    { id: 'maintenance', label: 'Mantenimiento', count: services.filter(s => s.category === 'maintenance').length },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleWhatsAppContact = (serviceTitle: string) => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa el servicio de ${serviceTitle}. ¿Podrías contarme más detalles sobre precios y tiempos?`
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" className="section-padding bg-dark-primary relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-80 bg-accent-blue/5 blur-3xl" style={{
          clipPath: 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)'
        }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-96 bg-accent-green/5 blur-3xl" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
        }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-blue/3 blur-2xl" style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          transform: 'rotate(45deg)'
        }}></div>
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
            Servicios <span className="gradient-text">Profesionales</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto text-body"
          >
            Desde páginas web simples hasta e-commerce completos. 
            Todos los servicios incluyen hosting, soporte y capacitación.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-heading transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent-blue text-dark-primary'
                  : 'bg-dark-secondary text-text-secondary hover:bg-dark-tertiary hover:text-text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group w-full max-w-sm"
            >
              <Card variant="hover" className="h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-accent-blue/20 to-accent-green/20 border border-accent-blue/30 group-hover:scale-110 transition-transform duration-300">
                      {getIconComponent(service.icon)}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-text-secondary">Desde</span>
                      <div className="text-2xl font-bold text-accent-green">
                        {service.priceFrom}
                      </div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-2xl text-display text-text-primary mb-4 group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 text-body flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-text-secondary text-body">
                        <Check className="h-4 w-4 text-accent-green mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-accent-blue text-body">
                        +{service.features.length - 3} características más
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent-blue group-hover:text-dark-primary group-hover:border-accent-blue transition-all duration-300"
                    onClick={() => handleWhatsAppContact(service.title)}
                  >
                    Consultar precio
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants} className="glass imperfect-border p-8 max-w-4xl mx-auto slight-rotation">
            <h3 className="text-2xl text-display text-text-primary mb-4">
              ¿No encontrás lo que necesitás?
            </h3>
            <p className="text-text-secondary mb-6 text-lg text-body">
              Charlemos sobre tu proyecto específico. Cada negocio es único y merece una solución personalizada.
            </p>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => handleWhatsAppContact('consulta personalizada')}
            >
              Conversemos tu idea
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
