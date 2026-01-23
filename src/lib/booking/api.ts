// src/lib/booking/api.ts

interface CreateBookingParams {
  serviceId: string;
  serviceTitle: string;
  dateTime: string; // ISO 8601 format
  duration: number; // minutes
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  price: number;
}

interface BookingResponse {
  success: boolean;
  data?: {
    eventId: string;
    eventLink: string;
  };
  error?: {
    code: string;
    message: string;
  };
}

export const createBooking = async (params: CreateBookingParams): Promise<BookingResponse> => {
  try {
    // TODO: Conectar con Google Calendar API
    // Por ahora simulamos una respuesta exitosa
    
    console.log('Creating booking with params:', params);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simular respuesta exitosa (cambiar cuando conectes la API real)
    return {
      success: true,
      data: {
        eventId: `event_${Date.now()}`,
        eventLink: 'https://calendar.google.com/event?eid=placeholder'
      }
    };
    
    // TODO: Implementar llamada real:
    /*
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
    */
    
  } catch (error: any) {
    console.error('Booking API error:', error);
    return {
      success: false,
      error: {
        code: 'BOOKING_FAILED',
        message: error.message || 'Failed to create booking'
      }
    };
  }
};

export const checkSlotAvailability = async (
  serviceId: string, 
  date: string, 
  time: string
): Promise<boolean> => {
  try {
    // TODO: Conectar con Google Calendar API para verificar disponibilidad
    console.log('Checking slot availability:', { serviceId, date, time });
    
    // Por ahora asumimos que siempre está disponible
    return true;
    
  } catch (error) {
    console.error('Availability check error:', error);
    return false;
  }
};
