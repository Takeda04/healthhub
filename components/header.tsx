import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

const Header = () => {

  const backgroundColor = useThemeColor({}, 'background');
  const borderBottomColor = useThemeColor({}, 'background');
  const tintColor = useThemeColor({}, 'tint');
  const titleColor = useThemeColor({}, "black");
  return (
    <ThemedView style={[styles.headerContainer, { backgroundColor, borderBottomColor }]}>
      <ThemedText style={[styles.headerText, { color: titleColor }]}>
        Find your desire healt solution
      </ThemedText>
      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={tintColor}
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
