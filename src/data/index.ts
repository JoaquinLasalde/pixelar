import { Service, PortfolioItem, Testimonial, ProcessStep, ContactInfo, Statistic } from '@/types';

export const contactInfo: ContactInfo = {
  whatsapp: "+54 9 11 2345-6789",
  email: "hola@pixelar.com.ar",
  location: "Buenos Aires, Argentina",
  workingHours: "Lun - Vie: 9:00 - 18:00 hs"
};

export const services: Service[] = [
  {
    id: "web-responsiva",
    title: "Página Web Responsiva",
    description: "Sitio web profesional que se adapta perfectamente a móviles, tablets y desktop. Optimizado para SEO y velocidad.",
    features: [
      "Diseño responsivo 100%",
      "Optimización SEO básica", 
      "Formulario de contacto",
      "Integración Google Maps",
      "Hosting incluido 1 año"
    ],
    priceFrom: "$170.000",
    icon: "globe",
    category: "web"
  },
  {
    id: "ecommerce-basico",
    title: "E-commerce Básico",
    description: "Tienda online completa con carrito de compras, pasarela de pagos y gestión de productos.",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Pasarela de pagos",
      "Panel de administración",
      "Envío automático por email"
    ],
    priceFrom: "$380.000",
    icon: "shopping-cart",
    category: "ecommerce"
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Página de aterrizaje optimizada para conversiones. Perfecta para campañas publicitarias.",
    features: [
      "Diseño centrado en conversión",
      "Formularios optimizados",
      "Analytics integrado",
      "A/B Testing incluido",
      "Entrega en 3-5 días"
    ],
    priceFrom: "$90.000",
    icon: "target",
    category: "landing"
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Web",
    description: "Mantenimiento mensual de tu sitio web. Actualizaciones, backups y soporte técnico continuo.",
    features: [
      "Actualizaciones mensuales",
      "Backup automático",
      "Soporte técnico",
      "Monitoreo de seguridad",
      "Reportes de rendimiento"
    ],
    priceFrom: "$12.000/mes",
    icon: "settings",
    category: "maintenance"
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones",
    description: "Automatiza procesos de tu negocio: emails, reportes, integración con WhatsApp Business y más.",
    features: [
      "Email marketing automatizado",
      "Chatbot WhatsApp Business",
      "Integración con CRM",
      "Reportes automáticos",
      "Notificaciones personalizadas"
    ],
    priceFrom: "$120.000",
    icon: "zap",
    category: "automation"
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "restaurant-laparrilla",
    title: "La Parrilla del Barrio",
    description: "Sitio web completo para restaurante con menú digital, reservas online y delivery integrado.",
    category: "restaurant",
    image: "/portfolio/restaurant-1.jpg",
    technologies: ["Next.js", "WhatsApp API", "Google Maps", "PayPal"],
    developmentTime: "2 semanas",
    featured: true
  },
  {
    id: "ferreteria-martinez",
    title: "Ferretería Martínez",
    description: "E-commerce completo con catálogo de 500+ productos y sistema de pedidos por WhatsApp.",
    category: "ecommerce",
    image: "/portfolio/ferreteria-1.jpg", 
    technologies: ["React", "Node.js", "WhatsApp Business", "MercadoPago"],
    developmentTime: "3 semanas",
    featured: true
  },
  {
    id: "gimnasio-fitness",
    title: "Gimnasio FitMax",
    description: "Landing page optimizada que aumentó las inscripciones en 180% en 2 meses.",
    category: "landing",
    image: "/portfolio/gym-1.jpg",
    technologies: ["Next.js", "Framer Motion", "Google Analytics", "Facebook Pixel"],
    developmentTime: "1 semana", 
    featured: true
  },
  {
    id: "veterinaria-pets",
    title: "Veterinaria Pets & Care",
    description: "Sitio web con sistema de turnos online y ficha médica digital para mascotas.",
    category: "commerce",
    image: "/portfolio/vet-1.jpg",
    technologies: ["React", "Calendar API", "Email Automation"],
    developmentTime: "2 semanas",
    featured: false
  },
  {
    id: "inmobiliaria-sur",
    title: "Inmobiliaria del Sur",
    description: "Portal inmobiliario con filtros avanzados y tours virtuales 360°.",
    category: "corporate", 
    image: "/portfolio/real-estate-1.jpg",
    technologies: ["Next.js", "3D Tours", "Google Maps", "WhatsApp"],
    developmentTime: "4 semanas",
    featured: true
  },
  {
    id: "panaderia-artesanal",
    title: "Panadería Artesanal",
    description: "E-commerce con pedidos personalizados y sistema de delivery por zonas.",
    category: "ecommerce",
    image: "/portfolio/bakery-1.jpg",
    technologies: ["Shopify", "Custom Apps", "MercadoPago", "WhatsApp"],
    developmentTime: "2 semanas",
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "carlos-rodriguez",
    name: "Carlos Rodríguez",
    business: "La Parrilla del Barrio",
    role: "Propietario",
    content: "Joaquín transformó completamente mi negocio. Antes solo vendía en el local, ahora el 60% de mis pedidos llegan por la web. Súper profesional y precios justos.",
    rating: 5,
    location: "San Telmo, CABA"
  },
  {
    id: "maria-gonzalez",
    name: "María González", 
    business: "Ferretería Martínez",
    role: "Gerente",
    content: "La página web nos permitió llegar a clientes de toda la zona. El sistema de WhatsApp es genial, los clientes pueden preguntar precios al instante. Muy recomendable.",
    rating: 5,
    location: "Lanús, Buenos Aires"
  },
  {
    id: "roberto-silva",
    name: "Roberto Silva",
    business: "Gimnasio FitMax", 
    role: "Director",
    content: "En 2 meses duplicamos las inscripciones gracias a la landing page. Joaquín entiende perfectamente cómo atraer clientes locales. Vale cada peso invertido.",
    rating: 5,
    location: "Villa Crespo, CABA"
  },
  {
    id: "ana-martinez",
    name: "Ana Martínez",
    business: "Veterinaria Pets & Care",
    role: "Veterinaria",
    content: "El sistema de turnos online me cambió la vida. Menos llamadas telefónicas y mejor organización. Los clientes están encantados con la facilidad de uso.",
    rating: 5,
    location: "Quilmes, Buenos Aires"
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    title: "Consulta Gratuita",
    description: "Charlamos 15 minutos sobre tu negocio, objetivos y presupuesto. Sin compromisos.",
    duration: "15 min",
    icon: "message-circle",
    order: 1
  },
  {
    id: "step-2", 
    title: "Propuesta Personalizada",
    description: "Te envío una propuesta detallada con presupuesto, cronograma y mockups iniciales.",
    duration: "24-48 hs",
    icon: "file-text",
    order: 2
  },
  {
    id: "step-3",
    title: "Desarrollo",
    description: "Desarrollo tu sitio con actualizaciones constantes. Podés seguir el progreso en tiempo real.",
    duration: "1-3 semanas",
    icon: "code",
    order: 3
  },
  {
    id: "step-4",
    title: "Lanzamiento + Capacitación", 
    description: "Publicamos tu sitio, te enseño a administrarlo y te doy soporte post-lanzamiento.",
    duration: "1 día",
    icon: "rocket",
    order: 4
  }
];

export const statistics: Statistic[] = [
  {
    id: "stat-1",
    value: "87%",
    label: "busca online antes de comprar",
    description: "Los argentinos investigan productos/servicios en internet antes de decidir",
    icon: "search"
  },
  {
    id: "stat-2", 
    value: "3x",
    label: "más confiable con sitio web",
    description: "Los negocios con presencia web generan 3 veces más confianza",
    icon: "shield-check"
  },
  {
    id: "stat-3",
    value: "65%",
    label: "usa móviles para buscar",
    description: "Las búsquedas locales se realizan desde dispositivos móviles",
    icon: "smartphone"
  },
  {
    id: "stat-4",
    value: "45%", 
    label: "más ventas en promedio",
    description: "Incremento típico en ventas después de tener presencia web profesional",
    icon: "trending-up"
  }
];

export const benefits = [
  {
    id: "experience",
    title: "5 años en grandes empresas",
    description: "Trabajé en startups y multinacionales. Traigo esa experiencia a tu negocio local.",
    icon: "briefcase"
  },
  {
    id: "local-focus",
    title: "Enfocado en negocios argentinos", 
    description: "Entiendo el mercado local, las necesidades y el presupuesto de las PyMES argentinas.",
    icon: "map-pin"
  },
  {
    id: "fair-pricing",
    title: "Precios justos y transparentes",
    description: "Sin letra chica ni sorpresas. Calidad enterprise a precio de freelancer argentino.",
    icon: "dollar-sign"
  },
  {
    id: "ongoing-support",
    title: "Soporte post-lanzamiento",
    description: "No te abandono después de entregar. Soporte técnico continuo incluido.",
    icon: "headphones"
  }
];

export const portfolioCategories = [
  { id: 'all', label: 'Todos los proyectos' },
  { id: 'restaurant', label: 'Restaurantes' },
  { id: 'commerce', label: 'Comercios' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'corporate', label: 'Corporativo' }
];
