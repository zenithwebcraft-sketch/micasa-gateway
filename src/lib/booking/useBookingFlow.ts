// src/lib/booking/useBookingFlow.ts

import { useState } from 'react';
import { micasaConfig, BookingService } from '@/config/micasa.config';

type BookingStep = 'service' | 'datetime' | 'email' | 'details' | 'confirmation';

interface BookingFormData {
  serviceId?: string;
  date?: string;
  time?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

export const useBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  const [formData, setFormData] = useState<BookingFormData>({});

  // Obtener el servicio seleccionado
  const service = formData.serviceId 
    ? micasaConfig.bookingServices.find(s => s.id === formData.serviceId)
    : undefined;

  const updateFormData = (data: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    const steps: BookingStep[] = ['service', 'datetime', 'email', 'details', 'confirmation'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const previousStep = () => {
    const steps: BookingStep[] = ['service', 'datetime', 'email', 'details', 'confirmation'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const reset = () => {
    setCurrentStep('service');
    setFormData({});
  };

  return {
    currentStep,
    formData,
    service,
    updateFormData,
    nextStep,
    previousStep,
    reset,
  };
};
