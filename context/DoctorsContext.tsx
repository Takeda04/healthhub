import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { IDoctorData } from '@/types/types';


interface DoctorsContextProps {
  doctors: IDoctorData[];
  loading: boolean;
  error: string | null;
}

interface DoctorsProviderProps {
  children: ReactNode;
}

export const DoctorsContext = createContext<DoctorsContextProps | undefined>(undefined);

export const DoctorsProvider = ({ children }: DoctorsProviderProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://med-production.up.railway.app/api/v1/doctors');
        setDoctors(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <DoctorsContext.Provider value={{ doctors, loading, error }}>
      {children}
    </DoctorsContext.Provider>
  );
};
