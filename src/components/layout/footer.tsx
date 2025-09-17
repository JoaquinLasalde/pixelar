"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, MessageCircle, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-primary border-t border-dark-tertiary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-green/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Code className="h-8 w-8 text-accent-blue" />
                  <div className="absolute -inset-1 bg-accent-blue/20 rounded-full blur-md"></div>
                </div>
                <span className="text-2xl font-bold gradient-text">PixelAr</span>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                Desarrollo web profesional para negocios argentinos. 
                Calidad enterprise, precios justos y soporte continuo.
              </p>

              <div className="flex items-center text-text-secondary text-sm">
                <span>Hecho con</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                <span>en Buenos Aires, Argentina</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Enlaces rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-200 hover:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Contacto
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`https://wa.me/5491123456789?text=${encodeURIComponent('¡Hola! Te escribo desde el sitio web de PixelAr.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent-green transition-colors duration-200 group"
                >
                  <MessageCircle className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  {contactInfo.whatsapp}
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-text-secondary hover:text-accent-blue transition-colors duration-200 group"
                >
                  <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  {contactInfo.email}
                </a>
                
                <div className="flex items-center text-text-secondary">
                  <MapPin className="h-5 w-5 mr-3" />
                  {contactInfo.location}
                </div>
              </div>

              <div className="mt-6 p-4 bg-dark-secondary rounded-lg border border-dark-tertiary">
                <p className="text-sm text-text-secondary mb-2">
                  <strong className="text-accent-green">Respuesta típica:</strong> &lt; 2 horas
                </p>
                <p className="text-sm text-text-secondary">
                  <strong className="text-accent-blue">Horarios:</strong> {contactInfo.workingHours}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-dark-tertiary py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              © {currentYear} PixelAr. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => scrollToSection('#inicio')}
                className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
              >
                Inicio
              </button>
              <span className="text-text-secondary">•</span>
              <span className="text-text-secondary">
                Desarrollado con Next.js y Tailwind CSS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
