"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code, Rocket, Check, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { processSteps } from '@/data';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

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
      'message-circle': MessageCircle,
      'file-text': FileText,
      code: Code,
      rocket: Rocket,
    };
    
    const IconComponent = iconMap[iconName] || MessageCircle;
    return IconComponent;
  };

  const handleStartProject = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa empezar un proyecto web. ¿Podemos agendar la consulta gratuita de 15 minutos?'
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  return (
    <section id="proceso" className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-green/3 rounded-full blur-3xl"></div>
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
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Proceso de <span className="gradient-text">Trabajo</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Un proceso simple, transparente y eficiente. Desde la primera charla hasta el lanzamiento.
          </motion.p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-dark-tertiary transform -translate-y-1/2"></div>
              <div 
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-accent-blue to-accent-green transform -translate-y-1/2 transition-all duration-1000"
                style={{ width: `${(activeStep / processSteps.length) * 100}%` }}
              ></div>

              {/* Steps */}
              <div className="flex justify-between items-center relative">
                {processSteps.map((step, index) => {
                  const IconComponent = getIconComponent(step.icon);
                  const stepNumber = index + 1;
                  const isActive = stepNumber <= activeStep;
                  const isCurrent = stepNumber === activeStep;

                  return (
                    <motion.div
                      key={step.id}
                      variants={itemVariants}
                      className="flex flex-col items-center cursor-pointer group"
                      onClick={() => setActiveStep(stepNumber)}
                    >
                      {/* Step Circle */}
                      <motion.div
                        className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-accent-blue to-accent-green border-transparent text-dark-primary' 
                            : 'bg-dark-secondary border-dark-tertiary text-text-secondary group-hover:border-accent-blue/50'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        animate={isCurrent ? { 
                          scale: [1, 1.1, 1],
                          boxShadow: ['0 0 0 0 rgba(0, 212, 255, 0.7)', '0 0 0 10px rgba(0, 212, 255, 0)', '0 0 0 0 rgba(0, 212, 255, 0)']
                        } : {}}
                        transition={{ duration: 2, repeat: isCurrent ? Infinity : 0 }}
                      >
                        <IconComponent className="h-8 w-8" />
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-accent-green rounded-full flex items-center justify-center"
                          >
                            <Check className="h-3 w-3 text-dark-primary" />
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Step Info */}
                      <div className="text-center max-w-48">
                        <h3 className={`font-semibold mb-2 transition-colors ${
                          isActive ? 'text-text-primary' : 'text-text-secondary'
                        }`}>
                          {step.title}
                        </h3>
                        <div className="flex items-center justify-center text-sm text-accent-blue mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {processSteps.map((step, index) => {
                const IconComponent = getIconComponent(step.icon);
                const stepNumber = index + 1;

                return (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-green flex items-center justify-center text-dark-primary">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {stepNumber}. {step.title}
                      </h3>
                      <div className="flex items-center text-sm text-accent-blue mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {step.duration}
                      </div>
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Active Step Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:block mb-16"
          >
            <Card variant="glass" className="p-8 border-accent-blue/20">
              <CardContent className="p-0">
                {processSteps
                  .filter((_, index) => index + 1 === activeStep)
                  .map((step) => {
                    const IconComponent = getIconComponent(step.icon);
                    
                    return (
                      <div key={step.id} className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-green flex items-center justify-center text-dark-primary">
                            <IconComponent className="h-8 w-8" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <h3 className="text-2xl font-bold text-text-primary mr-4">
                              {step.title}
                            </h3>
                            <div className="flex items-center text-accent-blue">
                              <Clock className="h-5 w-5 mr-2" />
                              <span className="font-semibold">{step.duration}</span>
                            </div>
                          </div>
                          <p className="text-lg text-text-secondary leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
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
                ¿Listo para empezar tu proyecto?
              </h3>
              <p className="text-text-secondary mb-6 text-lg">
                El primer paso es una charla de 15 minutos sin compromisos. 
                Hablemos sobre tu negocio y cómo puedo ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="neon" 
                  size="lg"
                  onClick={handleStartProject}
                >
                  Empezar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver más info
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
