//@ts-nocheck

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DoctoricalCategories from "@/components/categories/DoctoricalCategories";
import DoctorCard from "@/components/doctorComponent";
import HeadCategory from "@/components/headcategory";
import SearchInput from "@/components/search";
import TopDoctors from "@/components/top/topDoctors";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IDoctorData } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { doctors } from "@/constants/data";
import Start from "./start";

const fetchData = async (url: string, options = {}) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const Doctors = () => {
  const backgroundColor = useThemeColor({}, "background");
  const navigation = useNavigation();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [doktors, setDoctors] = useState<IDoctorData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsList = await fetchData('https://med-production.up.railway.app/api/v1/doctors');
        setDoctors(doctorsList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [router]);

  const navigateToDoctorsList = () => {
    Alert.alert("Doctors List", "Redirecting to doctors list");
  };

  const goBack = () => {
    navigation.goBack();
  };

  if (loading) {
    return <Start/>;
  }

  if (error) {
    return <Text>Error fetching doctors list: {error}</Text>;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView>
      <ThemedView style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={Colors.light.black}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Doktorni toping</Text>
      </ThemedView>
        <SearchInput />
        <HeadCategory
          title="Kategoriyalar"
          linkText=""
          onLinkPress={navigateToDoctorsList}
        />
        <DoctoricalCategories />
        <HeadCategory
          title="Top Doktorlar"
          linkText="Hammasini ko'rish"
          onLinkPress={navigateToDoctorsList}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {doktors.map((doctor) => (
            <TopDoctors
              key={doctor.id}
              name={doctor.fullName}
              image={doctor.avatar}
              distance={"3.5km"}
              specialization={doctor.specialization}
              rating={doctor.rating}
              onPress={() => navigation.navigate('details/DoctorDetailScreen', { doctor })}
            />
          ))}
        </ScrollView>

        <HeadCategory
          title="Doktorlar"
          linkText="Hammasini ko'rish"
          onLinkPress={navigateToDoctorsList}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              image={doctor.image}
              name={doctor.name}
              specialization={doctor.specialization}
              rating={doctor.rating}
              distance={doctor.distance}
            />
          ))}
        </ScrollView>
        <HeadCategory
          title="So'ngi ko'rilganlar"
          linkText=""
          onLinkPress={navigateToDoctorsList}
        />
        <ThemedText>
          {/* Additional content here */}
        </ThemedText>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  header: {

      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      flexGrow: 1,
    },
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.light.black,
    },

  header_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.black,
    marginVertical: 10,
    marginLeft: 50,
  },
  backButton: {
    marginRight: 16,
  },
});

export default Doctors;
