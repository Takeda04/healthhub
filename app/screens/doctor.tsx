//@ts-nocheck

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DoctoricalCategories from "@/components/categories/DoctoricalCategories";
import DoctorCard from "@/components/doctorComponent";
import HeadCategory from "@/components/headcategory";
import SearchInput from "@/components/search";
import TopDoctors from "@/components/top/topDoctors";
import { Colors } from "@/constants/Colors";
import  {doctors} from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Doctors = () => {
  const backgroundColor = useThemeColor({}, "background");
  const navigation = useNavigation();

  const navigateToDoctorsList = () => {
    Alert.alert("Doctors List", "Redirecting to doctors list");
  };
  const goBack = () => {
    navigation.goBack();
  };

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
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.light.black}
            />
          </TouchableOpacity>

          <ThemedText style={styles.header_text}>Doktorni toping</ThemedText>
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
          {doctors.map((doctor) => (
            <TopDoctors
            key={doctor.id}
            name={doctor.name}
            image={doctor.image}
            distance={doctor.distance}
            specialization={doctor.specialization}
            rating={doctor.rating}
            onPress={() => navigation.navigate(doctor.link, { doctor })}
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
    marginLeft: -100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.black,
    marginVertical: 10,
    marginLeft: 50,
  },
  backButton: {
    marginRight: 30,
  },
});

export default Doctors;
