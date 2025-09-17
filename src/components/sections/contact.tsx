"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Clock, Send, Phone, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/data';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would send this data to your backend
    // For now, we'll redirect to WhatsApp with the form data
    const message = encodeURIComponent(`
¡Hola! Te escribo desde pixelar.com.ar

Mis datos:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Tipo de proyecto: ${formData.projectType}
• Presupuesto: ${formData.budget}
• Timeline: ${formData.timeline}

Mensaje: ${formData.message}

¡Espero tu respuesta!
    `.trim());

    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Respuesta inmediata',
      value: contactInfo.whatsapp,
      action: () => window.open(`https://wa.me/5491123456789?text=${encodeURIComponent('¡Hola! Me interesa conocer más sobre tus servicios.')}`, '_blank'),
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Consultas detalladas',
      value: contactInfo.email,
      action: () => window.open(`mailto:${contactInfo.email}?subject=Consulta desde PixelAr&body=Hola, me interesa conocer más sobre tus servicios.`, '_blank'),
      primary: false,
    },
    {
      icon: Phone,
      title: 'Teléfono',
      description: 'Para charlas directas',
      value: '+54 9 11 2345-6789',
      action: () => window.open('tel:+5491123456789', '_blank'),
      primary: false,
    },
  ];

  const projectTypes = [
    'Página Web Corporativa',
    'E-commerce / Tienda Online',
    'Landing Page',
    'Aplicación Web',
    'Rediseño de sitio existente',
    'Mantenimiento y soporte',
    'Otro (especificar en mensaje)',
  ];

  const budgetRanges = [
    'Hasta $100.000',
    '$100.000 - $300.000',
    '$300.000 - $500.000',
    '$500.000 - $1.000.000',
    'Más de $1.000.000',
    'A definir',
  ];

  const timelines = [
    'Urgente (menos de 1 semana)',
    '1-2 semanas',
    '3-4 semanas',
    '1-2 meses',
    'Más de 2 meses',
    'Flexible',
  ];

  return (
    <section id="contacto" className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-green/3 rounded-full blur-3xl"></div>
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
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Empecemos <span className="gradient-text">tu proyecto</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Contame sobre tu negocio y veamos cómo puedo ayudarte a crecer online.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-text-primary mb-6">
              Formas de contacto
            </motion.h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    variant="hover" 
                    className={`cursor-pointer transition-all duration-300 ${
                      method.primary 
                        ? 'border-accent-blue bg-gradient-to-r from-accent-blue/5 to-accent-green/5' 
                        : 'hover:border-accent-blue/50'
                    }`}
                    onClick={method.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${
                          method.primary 
                            ? 'bg-accent-blue text-dark-primary' 
                            : 'bg-dark-tertiary text-accent-blue'
                        }`}>
                          <method.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary mb-1">
                            {method.title}
                            {method.primary && (
                              <span className="ml-2 text-xs bg-accent-green text-dark-primary px-2 py-1 rounded-full">
                                RECOMENDADO
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-text-secondary mb-2">{method.description}</p>
                          <p className="text-accent-blue font-medium">{method.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Card variant="glass">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-accent-green/20 text-accent-green">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Horarios de atención</h4>
                      <p className="text-text-secondary">{contactInfo.workingHours}</p>
                      <p className="text-sm text-accent-green">Respuesta típica: &lt; 2 horas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-accent-blue/20 text-accent-blue">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Ubicación</h4>
                      <p className="text-text-secondary">{contactInfo.location}</p>
                      <p className="text-sm text-accent-blue">Trabajo remoto con toda Argentina</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-text-primary mb-6">
              Contame sobre tu proyecto
            </motion.h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-10 w-10 text-dark-primary" />
                </div>
                <h4 className="text-2xl font-bold text-text-primary mb-4">¡Mensaje enviado!</h4>
                <p className="text-text-secondary mb-6">
                  Te redirigimos a WhatsApp para que puedas enviar tu consulta directamente.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </motion.div>
            ) : (
              <Card variant="glass" className="border-accent-blue/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Project Type */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                          WhatsApp / Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors"
                          placeholder="+54 9 11 1234-5678"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
                          Tipo de proyecto *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
                        >
                          <option value="">Seleccionar...</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget and Timeline */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                          Presupuesto estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
                        >
                          <option value="">Seleccionar...</option>
                          {budgetRanges.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-text-primary mb-2">
                          ¿Cuándo necesitás el proyecto?
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
                        >
                          <option value="">Seleccionar...</option>
                          {timelines.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        Contame sobre tu negocio y proyecto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-tertiary border border-dark-primary rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors resize-none"
                        placeholder="Describí tu negocio, qué necesitás, qué objetivos tenés, etc."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="neon"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-5 h-5 border-2 border-dark-primary border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                    </Button>

                    <p className="text-xs text-text-secondary text-center">
                      Al enviar este formulario serás redirigido a WhatsApp para completar la consulta.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Quick CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-accent-blue mr-3" />
              <h3 className="text-2xl font-bold text-text-primary">
                ¿Preferís una charla directa?
              </h3>
            </div>
            <p className="text-text-secondary mb-6 text-lg">
              Reservá una consulta gratuita de 15 minutos por WhatsApp. 
              Sin compromisos, solo charlamos sobre tu proyecto.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open(`https://wa.me/5491123456789?text=${encodeURIComponent('¡Hola! Me gustaría agendar una consulta gratuita de 15 minutos para hablar sobre mi proyecto.')}`, '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Agendar consulta gratuita
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
