import React, { useState, useEffect, createContext, ReactNode, FC } from 'react';
import { fetchClinics } from '../services/api';

interface ClinicsContextType {
  clinics: any[];
  loading: boolean;
}

export const ClinicsContext = createContext<ClinicsContextType | undefined>(undefined);

interface ClinicsContextProviderProps {
  children: ReactNode;
}

export const ClinicsContextProvider: FC<ClinicsContextProviderProps> = ({ children }) => {
  const [clinics, setClinics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClinics().then(data => {
      setClinics(data);
      setLoading(false);
    });
  }, []);

  return (
    <ClinicsContext.Provider value={{ clinics, loading }}>
      {children}
    </ClinicsContext.Provider>
  );
};
