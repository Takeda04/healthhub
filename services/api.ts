const API_URL = 'https://api.example.com'; 

export const fetchClinics = async () => {
  const response = await fetch(`${API_URL}/clinics`);
  const data = await response.json();
  return data;
};

export const fetchDoctors = async () => {
  const response = await fetch(`${API_URL}/doctors`);
  const data = await response.json();
  return data;
};
