import MedicalCategories from "@/components/categories";
import Header from "@/components/header";
import SearchInput from "@/components/search";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const Main = () => {
  return (
    <SafeAreaView>
       <ScrollView>
        <Header />
        <SearchInput />
        <MedicalCategories />
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Main;
