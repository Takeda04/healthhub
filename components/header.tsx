import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const Header = () => {
  return (
    <ThemedView style={styles.headerContainer}>
      <ThemedText style={styles.headerText}>
        Find your desire healt solution
      </ThemedText>
      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={Colors.dark.black}
        />
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  headerText: {
    width: 176,
    height: 64,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text,
  },
});

export default Header;
