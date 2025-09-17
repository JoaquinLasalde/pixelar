"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleContactSimilarProject = (businessName: string) => {
    const message = encodeURIComponent(
      `¡Hola! Vi el trabajo que hiciste para ${businessName} y me encantó. ¿Podrías hacer algo similar para mi negocio?`
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  // Star Rating Component
  const StarRating: React.FC<{ rating: number; animated?: boolean }> = ({ rating, animated = false }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            initial={animated ? { scale: 0, rotate: -180 } : false}
            animate={animated ? { scale: 1, rotate: 0 } : false}
            transition={animated ? { 
              delay: star * 0.1, 
              duration: 0.3,
              type: "spring",
              stiffness: 200 
            } : undefined}
          >
            <Star
              className={`h-5 w-5 ${
                star <= rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-600'
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  // Generate avatar placeholder
  const getAvatarPlaceholder = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
    const colors = ['bg-accent-blue', 'bg-accent-green', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500'];
    const colorIndex = name.length % colors.length;
    
    return (
      <div className={`w-16 h-16 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-bold text-lg`}>
        {initials}
      </div>
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-dark-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl"></div>
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
            Resultados <span className="gradient-text">reales</span> de clientes
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto text-body"
          >
            No solo promesas, sino resultados comprobables. Conocé las experiencias de negocios que crecieron con PixelAr.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-dark-secondary hover:bg-dark-tertiary border border-accent-blue/30 rounded-full flex items-center justify-center text-accent-blue transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-dark-secondary hover:bg-dark-tertiary border border-accent-blue/30 rounded-full flex items-center justify-center text-accent-blue transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card variant="glass" className="p-8 md:p-12 border-accent-blue/20">
                  <CardContent className="p-0">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-green/20 border border-accent-blue/30">
                        <Quote className="h-8 w-8 text-accent-blue" />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl md:text-2xl text-text-primary text-center mb-8 leading-relaxed italic">
                      &ldquo;{currentTestimonial.content}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      <StarRating rating={currentTestimonial.rating} animated={true} />
                    </div>

                    {/* Client Info */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        {getAvatarPlaceholder(currentTestimonial.name)}
                      </div>
                      
                      {/* Client Details */}
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold text-text-primary">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-accent-blue font-semibold">
                          {currentTestimonial.role} • {currentTestimonial.business}
                        </p>
                        <div className="flex items-center justify-center md:justify-start mt-2 text-text-secondary">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{currentTestimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-blue scale-125' 
                  : 'bg-dark-tertiary hover:bg-accent-blue/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Hidden on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:grid lg:grid-cols-2 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className={`${index === currentIndex ? 'opacity-50' : ''}`}
            >
              <Card variant="hover" className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4 mb-4">
                    {getAvatarPlaceholder(testimonial.name)}
                    <div>
                      <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-accent-blue">{testimonial.business}</p>
                      <div className="flex items-center mt-1">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleContactSimilarProject(testimonial.business)}
                    className="text-accent-blue hover:text-accent-green"
                  >
                    Proyecto similar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              ¿Querés ser el próximo testimonio?
            </h3>
            <p className="text-text-secondary mb-6 text-lg">
              Unite a la lista de negocios exitosos que confiaron en PixelAr para crecer online.
            </p>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => handleContactSimilarProject('tu negocio')}
            >
              Empezar mi proyecto
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
