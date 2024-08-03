//@ts-nocheck

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios from 'axios';

import Main from "./screens/main";
import Start from "./screens/start";
import { Text } from "react-native";

const fetchData = async (url: string, options = {}) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsList = await fetchData('https://med-production.up.railway.app/api/v1/doctors');
        setDoctors(doctorsList);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [router]);

  console.log(doctors)

  if (loading) {
    return <Start />;
  }

  if (error) {
    return <Text>Error fetching doctors list: {error.message}</Text>;
  }

  return <Main doctors={doctors} />;
}
