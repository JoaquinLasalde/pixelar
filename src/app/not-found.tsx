"use client";

import Link from 'next/link';
import { ArrowLeft, Home, Code } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code className="h-12 w-12 text-accent-blue" />
              <div className="absolute -inset-1 bg-accent-blue/20 rounded-full blur-md"></div>
            </div>
            <span className="text-3xl font-bold gradient-text">PixelAr</span>
          </div>
        </div>

        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-accent-blue mb-4">404</h1>
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Página no encontrada
          </h2>
          <p className="text-text-secondary mb-8">
            Lo siento, la página que buscás no existe o fue movida.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="neon-button flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-dark-primary px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </button>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 p-4 glass rounded-lg">
          <p className="text-text-secondary mb-3">
            ¿No encontrás lo que buscás?
          </p>
          <button
            onClick={() => window.open('https://wa.me/5491123456789?text=Hola! No encontré lo que buscaba en el sitio web', '_blank')}
            className="text-accent-green hover:text-accent-blue transition-colors font-medium"
          >
            Contactanos por WhatsApp →
          </button>
        </div>
      </div>
    </div>
  );
}
