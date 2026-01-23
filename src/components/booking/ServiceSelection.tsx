// src/components/booking/ServiceSelection.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { micasaConfig } from "@/config/micasa.config";
import { FileText, Stamp, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface ServiceSelectionProps {
  onSelect: (serviceId: string) => void;
}

const iconMap: Record<string, any> = {
  FileText: FileText,
  Stamp: Stamp,
};

export const ServiceSelection = ({ onSelect }: ServiceSelectionProps) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    // Detectar idioma del navegador o contexto
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    setLanguage(browserLang);
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {language === 'es' ? 'Selecciona un Servicio' : 'Select a Service'}
        </h2>
        <p className="text-gray-600">
          {language === 'es' 
            ? 'Elige el servicio que necesitas para agendar tu cita' 
            : 'Choose the service you need to book your appointment'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {micasaConfig.bookingServices.map((service) => {
          const Icon = iconMap[service.icon] || FileText;
          
          return (
            <Card 
              key={service.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary"
              onClick={() => onSelect(service.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.durationMinutes} min
                  </div>
                </div>
                <CardTitle className="mt-4">
                  {service.title[language]}
                </CardTitle>
                <CardDescription>
                  {service.description[language]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  {language === 'es' ? 'Seleccionar' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
