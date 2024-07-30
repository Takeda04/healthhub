import PillCard from "@/components/PillCard";
import MedicalCategories from "@/components/categories";
import DoctorCard from "@/components/doctorComponent";
import HeadCategory from "@/components/headcategory";
import Header from "@/components/header";
import SearchInput from "@/components/search";
import Slider from "@/components/slider";
import { doctors, pills } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { CardData } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const Main = () => {
  const backgroundColor = useThemeColor({}, "background");
  const navigation = useNavigation();

  const navigateToDoctorsList = () => {
    Alert.alert("Doctors List", "Redirecting to doctors list");
  };

  const data: CardData[] = [
    {
      title: "Early protection for your family health",
      button: "Learn more",
      image: "../assets/images/nurse.png",
    },
    {
      title: "Card Title 2",
      button: "Learn more",
      image: "../assets/images/nurse.png",
    },
    // Add more card data here
  ];
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView>
        <Header />
        <SearchInput />
        <MedicalCategories />
        <Slider data={data} />
        <HeadCategory
          title="Doctors"
          linkText="See all"
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
          title="Health article"
          linkText="See all"
          onLinkPress={navigateToDoctorsList}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {pills.map((pill, index) => (
            <PillCard
              key={index}
              image={pill.image}
              name={pill.name}
              description={pill.description}
              price={pill.price}
            />
          ))}
        </ScrollView>
        <HeadCategory
          title="Recommended Clinics"
          linkText="See all"
          onLinkPress={navigateToDoctorsList}
        />
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
});

export default Main;
