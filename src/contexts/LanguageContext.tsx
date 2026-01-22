import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.booking': { es: 'Citas', en: 'Booking' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },

  // Hero
  'hero.headline': {
    es: 'Servicios Profesionales Para Tu Tranquilidad Financiera',
    en: 'Professional Services For Your Financial Peace of Mind',
  },
  'hero.subheadline': {
    es: 'Expertos en servicios de impuestos, negocios y seguros. Tu éxito es nuestra prioridad.',
    en: 'Experts in tax, business, and insurance services. Your success is our priority.',
  },
  'hero.cta.book': { es: 'Agendar Cita', en: 'Book Appointment' },
  'hero.cta.services': { es: 'Ver Servicios', en: 'View Services' },
  'hero.address': { es: '204 N Park Ave Suites 100-102, Sanford, FL 32771', en: '204 N Park Ave Suites 100-102, Sanford, FL 32771' },

  // Services
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.subtitle': {
    es: 'Soluciones profesionales adaptadas a tus necesidades',
    en: 'Professional solutions tailored to your needs',
  },
  'service.tax.title': { es: 'Preparación de Impuestos', en: 'Tax Preparation' },
  'service.tax.desc': {
    es: 'Preparación profesional de impuestos personales y de negocios con máximo reembolso garantizado.',
    en: 'Professional personal and business tax preparation with maximum refund guaranteed.',
  },
  'service.itin.title': { es: 'Solicitud de ITIN', en: 'ITIN Application' },
  'service.itin.desc': {
    es: 'Asistencia completa para obtener tu Número de Identificación de Contribuyente Individual.',
    en: 'Complete assistance to obtain your Individual Taxpayer Identification Number.',
  },
  'service.bookkeeping.title': { es: 'Contabilidad y Nómina', en: 'Bookkeeping & Payroll' },
  'service.bookkeeping.desc': {
    es: 'Gestión contable y procesamiento de nóminas para mantener tu negocio en orden.',
    en: 'Accounting management and payroll processing to keep your business in order.',
  },
  'service.notary.title': { es: 'Notario Público', en: 'Notary Public' },
  'service.notary.desc': {
    es: 'Servicios de notarización para documentos legales y comerciales.',
    en: 'Notarization services for legal and business documents.',
  },
  'service.virtual.title': { es: 'Asistente Virtual', en: 'Virtual Assistant' },
  'service.virtual.desc': {
    es: 'Apoyo administrativo remoto para optimizar las operaciones de tu negocio.',
    en: 'Remote administrative support to optimize your business operations.',
  },
  'service.workers.title': { es: 'Seguro de Compensación', en: "Workers' Compensation" },
  'service.workers.desc': {
    es: 'Protección integral para empleadores y trabajadores con las mejores coberturas.',
    en: 'Comprehensive protection for employers and workers with the best coverage.',
  },
  'service.liability.title': { es: 'Seguro de Responsabilidad', en: 'General Liability' },
  'service.liability.desc': {
    es: 'Seguros de responsabilidad general para proteger tu negocio de imprevistos.',
    en: 'General liability insurance to protect your business from unforeseen events.',
  },

  // Booking
  'booking.title': { es: 'Agenda Tu Cita', en: 'Book Your Appointment' },
  'booking.subtitle': {
    es: 'Reservar una cita es fácil y rápido. ¡Estamos aquí para ayudarte!',
    en: "Booking an appointment is easy and quick. We're here to help!",
  },
  'booking.step1': { es: 'Selecciona Servicio', en: 'Select Service' },
  'booking.step2': { es: 'Elige Horario', en: 'Choose Time' },
  'booking.step3': { es: 'Confirma Cita', en: 'Confirm Appointment' },
  'booking.cta': { es: 'Reservar Ahora', en: 'Book Now' },

  // About
  'about.title': { es: 'Sobre Nosotros', en: 'About Us' },
  'about.description': {
    es: 'MiCasa MultiService LLC es tu socio de confianza para servicios fiscales, empresariales y de seguros en Sanford, Florida. Nos dedicamos a servir a la comunidad hispana y americana con excelencia y profesionalismo.',
    en: 'MiCasa MultiService LLC is your trusted partner for tax, business, and insurance services in Sanford, Florida. We are dedicated to serving the Hispanic and American community with excellence and professionalism.',
  },
  'about.value1.title': { es: 'Profesionalismo', en: 'Professionalism' },
  'about.value1.desc': { es: 'Servicio de primera calidad', en: 'First-class service' },
  'about.value2.title': { es: 'Confianza', en: 'Trust' },
  'about.value2.desc': { es: 'Tu información está segura', en: 'Your information is safe' },
  'about.value3.title': { es: 'Eficiencia', en: 'Efficiency' },
  'about.value3.desc': { es: 'Resultados rápidos y precisos', en: 'Fast and accurate results' },
  'about.value4.title': { es: 'Personalización', en: 'Personalization' },
  'about.value4.desc': { es: 'Atención a tu medida', en: 'Tailored attention' },
  'about.stats.years': { es: 'Años de Experiencia', en: 'Years of Experience' },
  'about.stats.clients': { es: 'Clientes Satisfechos', en: 'Happy Clients' },
  'about.stats.services': { es: 'Servicios Completados', en: 'Services Completed' },

  // Contact
  'contact.title': { es: 'Contáctanos', en: 'Contact Us' },
  'contact.subtitle': {
    es: 'Estamos aquí para responder tus preguntas',
    en: "We're here to answer your questions",
  },
  'contact.address': { es: 'Dirección', en: 'Address' },
  'contact.hours': { es: 'Horario', en: 'Hours' },
  'contact.hours.value': { es: 'Lunes - Viernes: 12:00 PM - 7:00 PM', en: 'Monday - Friday: 12:00 PM - 7:00 PM' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.email': { es: 'Correo', en: 'Email' },
  'contact.form.name': { es: 'Nombre Completo', en: 'Full Name' },
  'contact.form.email': { es: 'Correo Electrónico', en: 'Email Address' },
  'contact.form.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.submit': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.form.success': { es: '¡Mensaje enviado!', en: 'Message sent!' },

  // Footer
  'footer.tagline': {
    es: 'Tu socio de confianza para servicios profesionales.',
    en: 'Your trusted partner for professional services.',
  },
  'footer.quicklinks': { es: 'Enlaces Rápidos', en: 'Quick Links' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },

  // WhatsApp
  'whatsapp.message': {
    es: '¡Hola! Me gustaría obtener más información sobre sus servicios.',
    en: 'Hello! I would like to get more information about your services.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
