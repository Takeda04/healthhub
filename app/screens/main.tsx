import MedicalCategories from "@/components/categories";
import Header from "@/components/header";
import SearchInput from "@/components/search";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const Main = () => {
  const backgroundColor = useThemeColor({}, 'background');
  return (
    <SafeAreaView style={{
      backgroundColor: backgroundColor ,
      width: "100%",
      height: "100%",
    }}>
       <ScrollView>
        <Header />
        <SearchInput />
        <MedicalCategories />
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Main;
