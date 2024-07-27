import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

const Start = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <ThemedView style={styles.themedView}>
        <Image
          source={require("@/assets/images/LogoApp.png")}
          style={styles.logo}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  headerStyle: {
    backgroundColor: Colors.light.background,
  },
  themedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 140,
    resizeMode: "contain",
  },
});

export default Start;
