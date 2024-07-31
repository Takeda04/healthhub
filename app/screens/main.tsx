import PillCard from "@/components/PillCard";
import MedicalCategories from "@/components/categories/MedicalCategories";
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
import React, { FC } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { IDoctorData } from "@/types/types";

interface Props {
  doctors: IDoctorData[];
}
const Main: FC<Props> = ({doctors}) => {
  const backgroundColor = useThemeColor({}, "background");
  const navigation = useNavigation();

  const navigateToDoctorsList = () => {
    Alert.alert("Doctors List", "Redirecting to doctors list");
  };

  const data: CardData[] = [
    {
      title: "Oilangiz salomatligi uchun erta himoya",
      button: "Batafsil ma'lumot",
      image: "../assets/images/nurse.png",
    },
    {
      title: "Har bir bemor ichida o'z shifokori bor",
      button: "Batafsil ma'lumot",
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
          title="Shifokorlar"
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
              image={doctor.avatar}
              name={doctor.fullName}
              specialization={doctor.specialization}
              rating={doctor.rating}
              distance={"5.0"}
            />
          ))}
        </ScrollView>
        <HeadCategory
          title="Dorixona"
          linkText="Hammasini ko'rish"
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
