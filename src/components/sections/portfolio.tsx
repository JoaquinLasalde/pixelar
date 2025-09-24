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
    window.open(`https://wa.me/5491154641503?text=${message}`, '_blank');
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

  // Sección de portfolio comentada temporalmente - Trabajos que hablan por sí solos
  return null;
};

export default Portfolio;
