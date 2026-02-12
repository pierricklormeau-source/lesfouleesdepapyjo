
export interface Race {
  id: string;
  name: string;
  distance: string;
  elevation: string;
  time: string;
  price: string;
  color: string;
  description: string;
}

export type AppView = 'home' | 'register' | 'results';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
  raceId: string;
  medicalCert: File | null;
}
