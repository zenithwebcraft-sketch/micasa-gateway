export const micasaConfig = {
  // ========================
  // COMPANY INFORMATION
  // ========================
  company: {
    name: "MiCasa MultiService LLC",
    legalName: "MiCasa MultiService, LLC",
    tagline: {
      en: "Professional Services For Your Financial Peace of Mind",
      es: "Servicios Profesionales Para Tu Tranquilidad Financiera"
    },
    description: {
      en: "Expert tax, business, and insurance services tailored to your needs. We serve clients across multiple states with professionalism and dedication.",
      es: "Servicios expertos en impuestos, negocios y seguros adaptados a tus necesidades. Atendemos clientes en múltiples estados con profesionalismo y dedicación."
    },
    shortDescription: {
      en: "Your trusted partner for tax, business, and insurance services in Central Florida and beyond.",
      es: "Tu socio de confianza para servicios de impuestos, negocios y seguros en Florida Central y más allá."
    }
  },

  // ========================
  // CONTACT INFORMATION
  // ========================
  contact: {
    phone: "(407) 555-0123", // Placeholder - reemplazar con real
    email: "info@micasaworks4u.com",
    website: "micasaworks4u.com",
    address: {
      street: "204 N Park Ave",
      suite: "Suites 100-102",
      city: "Sanford",
      state: "FL",
      zip: "32771",
      fullAddress: "204 N Park Ave Suites 100-102, Sanford, FL 32771"
    },
    social: {
      facebook: "https://facebook.com/micasamultiservice", // Placeholder
      instagram: "https://instagram.com/micasamultiservice", // Placeholder
      linkedin: null
    }
  },

  // ========================
  // BUSINESS HOURS
  // ========================
  hours: {
    schedule: {
      monday: { open: "12:00", close: "19:00", isOpen: true },
      tuesday: { open: "12:00", close: "19:00", isOpen: true },
      wednesday: { open: "12:00", close: "19:00", isOpen: true },
      thursday: { open: "12:00", close: "19:00", isOpen: true },
      friday: { open: "12:00", close: "19:00", isOpen: true },
      saturday: { open: null, close: null, isOpen: false },
      sunday: { open: null, close: null, isOpen: false }
    },
    display: {
      en: "Monday - Friday: 12:00 PM - 7:00 PM",
      es: "Lunes - Viernes: 12:00 PM - 7:00 PM"
    },
    timezone: "America/New_York"
  },

  // ========================
  // BOOKABLE SERVICES
  // ========================
  bookingServices: [
    {
      id: "tax-preparation",
      title: {
        en: "Tax Preparation Consultation",
        es: "Consulta de Preparación de Impuestos"
      },
      description: {
        en: "Initial consultation for personal or business tax preparation. We'll review your documents and discuss your tax situation.",
        es: "Consulta inicial para preparación de impuestos personales o empresariales. Revisaremos tus documentos y discutiremos tu situación fiscal."
      },
      durationMinutes: 30,
      price: 0, // Free consultation
      currency: "USD",
      icon: "FileText",
      color: "#10B981",
      requirements: {
        en: "Please bring relevant tax documents (W-2s, 1099s, previous returns, etc.)",
        es: "Por favor traiga documentos fiscales relevantes (W-2s, 1099s, declaraciones anteriores, etc.)"
      }
    },
    {
      id: "notary-service",
      title: {
        en: "Notary Public Service",
        es: "Servicio Notarial"
      },
      description: {
        en: "Professional notarization of legal documents and signature certification. Valid government-issued ID required.",
        es: "Notarización profesional de documentos legales y certificación de firmas. Se requiere identificación oficial vigente."
      },
      durationMinutes: 30,
      price: 0, // Price varies by document
      currency: "USD",
      icon: "Stamp",
      color: "#10B981",
      requirements: {
        en: "Valid government-issued photo ID required for all notarizations",
        es: "Se requiere identificación oficial con foto vigente para todas las notarizaciones"
      }
    }
  ],

  // ========================
  // ALL SERVICES (Display Only)
  // ========================
  allServices: [
    {
      id: "tax-preparation",
      title: {
        en: "Tax Preparation",
        es: "Preparación de Impuestos"
      },
      description: {
        en: "Maximize your refund with expert personal and business tax preparation services.",
        es: "Maximiza tu devolución con servicios expertos de preparación de impuestos personales y empresariales."
      },
      icon: "FileText",
      bookable: true
    },
    {
      id: "itin-application",
      title: {
        en: "ITIN Application",
        es: "Aplicación de ITIN"
      },
      description: {
        en: "We help you obtain your Individual Taxpayer Identification Number quickly and correctly.",
        es: "Te ayudamos a obtener tu Número de Identificación Fiscal Individual de forma rápida y correcta."
      },
      icon: "CreditCard",
      bookable: false
    },
    {
      id: "bookkeeping-payroll",
      title: {
        en: "Bookkeeping & Payroll",
        es: "Contabilidad y Nómina"
      },
      description: {
        en: "Keep your finances organized and compliant with professional bookkeeping and payroll services.",
        es: "Mantén tus finanzas organizadas y cumpliendo con servicios profesionales de contabilidad y nómina."
      },
      icon: "Calculator",
      bookable: false
    },
    {
      id: "notary-public",
      title: {
        en: "Notary Public",
        es: "Notario Público"
      },
      description: {
        en: "Official certification and notarization of important legal documents.",
        es: "Certificación oficial y notarización de documentos legales importantes."
      },
      icon: "Stamp",
      bookable: true
    },
    {
      id: "virtual-assistant",
      title: {
        en: "Virtual Assistant",
        es: "Asistente Virtual"
      },
      description: {
        en: "Professional administrative support to help your business run smoothly.",
        es: "Apoyo administrativo profesional para que tu negocio funcione sin problemas."
      },
      icon: "Laptop",
      bookable: false
    },
    {
      id: "workers-compensation",
      title: {
        en: "Workers' Compensation Insurance",
        es: "Seguro de Compensación Laboral"
      },
      description: {
        en: "Protect your employees and meet legal requirements with comprehensive workers' comp coverage.",
        es: "Protege a tus empleados y cumple con los requisitos legales con cobertura integral de compensación laboral."
      },
      icon: "Shield",
      bookable: false
    },
    {
      id: "general-liability",
      title: {
        en: "General Liability Insurance",
        es: "Seguro de Responsabilidad General"
      },
      description: {
        en: "Comprehensive business protection against unexpected events and liability claims.",
        es: "Protección empresarial integral contra eventos inesperados y reclamaciones de responsabilidad."
      },
      icon: "ShieldCheck",
      bookable: false
    }
  ],

  // ========================
  // TRUST INDICATORS
  // ========================
  stats: {
    yearsOfExperience: {
      value: "10+",
      label: {
        en: "Years of Experience",
        es: "Años de Experiencia"
      }
    },
    happyClients: {
      value: "1000+",
      label: {
        en: "Happy Clients",
        es: "Clientes Satisfechos"
      }
    },
    taxReturns: {
      value: "5000+",
      label: {
        en: "Tax Returns Filed",
        es: "Declaraciones Presentadas"
      }
    }
  },

  // ========================
  // COMPANY VALUES
  // ========================
  values: [
    {
      id: "professionalism",
      title: {
        en: "Professionalism",
        es: "Profesionalismo"
      },
      description: {
        en: "Expert service with attention to detail",
        es: "Servicio experto con atención al detalle"
      },
      icon: "Award"
    },
    {
      id: "trust",
      title: {
        en: "Trust",
        es: "Confianza"
      },
      description: {
        en: "Your information is safe with us",
        es: "Tu información está segura con nosotros"
      },
      icon: "ShieldCheck"
    },
    {
      id: "efficiency",
      title: {
        en: "Efficiency",
        es: "Eficiencia"
      },
      description: {
        en: "Fast turnaround without compromising quality",
        es: "Respuesta rápida sin comprometer la calidad"
      },
      icon: "Zap"
    },
    {
      id: "personalized",
      title: {
        en: "Personalized Service",
        es: "Servicio Personalizado"
      },
      description: {
        en: "Tailored solutions for your unique needs",
        es: "Soluciones adaptadas a tus necesidades únicas"
      },
      icon: "Users"
    }
  ],

  // ========================
  // THEME CONFIGURATION TEST
  // ========================
  theme: {
    colors: {
      primary: "#10B981",      // Teal-500
      primaryDark: "#059669",  // Teal-600
      primaryLight: "#6EE7B7", // Teal-300
      accent: "#14B8A6",       // Cyan-500
      dark: "#134E4A",         // Teal-900
      light: "#F0FDFA"         // Teal-50
    },
    fonts: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif"
    }
  }
};

// ========================
// TYPE EXPORTS
// ========================
export type BookingService = typeof micasaConfig.bookingServices[0];
export type DisplayService = typeof micasaConfig.allServices[0];
export type Language = 'en' | 'es';