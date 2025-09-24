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
    window.open(`https://wa.me/5491154641503?text=${message}`, '_blank');
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

  // Sección de testimonials comentada temporalmente - Resultados reales de clientes
  return null;
};

export default Testimonials;
