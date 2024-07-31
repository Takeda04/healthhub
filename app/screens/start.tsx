import { Image, SafeAreaView, StyleSheet, View } from "react-native";
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
      <View style={styles.themedView}>
        <Image
          source={require("@/assets/images/LogoappLogo.png")}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.green,
  },
  headerStyle: {
    backgroundColor: Colors.light.green,
  },
  themedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 140,
    resizeMode: "contain",
  },
});

export default Start;
