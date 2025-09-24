"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip after 5 seconds for first time users
    const tooltipTimer = setTimeout(() => {
      const hasSeenTooltip = localStorage.getItem('pixelar-whatsapp-tooltip');
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        localStorage.setItem('pixelar-whatsapp-tooltip', 'true');
        
        // Hide tooltip after 3 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 3000);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa saber más sobre los servicios de PixelAr. ¿Podrías contarme más detalles?'
    );
    const whatsappUrl = `https://wa.me/5491154641503?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                className="absolute bottom-16 right-0 mb-2 mr-2 bg-white text-dark-primary px-4 py-2 rounded-lg shadow-lg max-w-xs"
              >
                <div className="relative">
                  <p className="text-sm font-medium">
                    ¡Consultá gratis! 💬
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Te respondo en menos de 5 minutos
                  </p>
                  
                  {/* Close button */}
                  <button
                    onClick={hideTooltip}
                    className="absolute -top-1 -right-1 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                  >
                    <X size={12} />
                  </button>

                  {/* Arrow */}
                  <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsAppClick}
            className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            
            {/* Icon */}
            <div className="relative">
              <MessageCircle size={28} />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
