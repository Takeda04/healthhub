import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

// Define the icon names correctly
type IconName = keyof typeof Ionicons.glyphMap;

interface Category {
  id: string;
  icon: IconName;
  text: string;
  type: string
}

const textToType = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };

const doctor_categories: Category[] = [
    { id: "1", icon: "git-network-outline", text: "Doktor", type: textToType("Doktor") },
    { id: "2", icon: "heart-outline", text: "Kardiolog", type: textToType("Kardiolog") },
    { id: "3", icon: "bandage-outline", text: "Dermatolog", type: textToType("Dermatolog") },
    { id: "5", icon: "eye-outline", text: "Oftalmolog", type: textToType("Oftalmolog") },
    { id: "12", icon: "person-outline", text: "Pediatr", type: textToType("Pediatr") },
    { id: "7", icon: "medkit-outline", text: "Terapevt", type: textToType("Terapevt") },
    { id: "8", icon: "fitness-outline", text: "Fitnes Mutaxassisi", type: textToType("Fitnes Mutaxassisi") },
    { id: "9", icon: "nutrition-outline", text: "Oziqlanish Mutaxassisi", type: textToType("Oziqlanish Mutaxassisi") },
    { id: "10", icon: "flask-outline", text: "Laboratoriya", type: textToType("Laboratoriya") },
    { id: "11", icon: "happy-outline", text: "Psixolog", type: textToType("Psixolog") },
    { id: "13", icon: "school-outline", text: "Ginekolog", type: textToType("Ginekolog") },
    { id: "6", icon: "male-female-outline", text: "Urolog", type: textToType("Urolog") },
    { id: "14", icon: "restaurant-outline", text: "Diyetolog", type: textToType("Diyetolog") },
    { id: "15", icon: "medical-outline", text: "Xirurg", type: textToType("Xirurg") },
  ];
  


  

const DoctoricalCategories = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const backgroundColor = useThemeColor({}, 'background');
  const tintColor = useThemeColor({}, 'tint');
  const shadowColor = useThemeColor({}, 'icon');

  const visibleCategories = showAll
    ? doctor_categories
    : doctor_categories.slice(0, 7);

    const handleCategoryClick = (id: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        // Toggle selection: If the clicked category is already selected, unselect it
        setSelectedCategoryId((prevId) => (prevId === id ? null : id));
      };
      

  const toggleCategories = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowAll(!showAll);
  };

  return (
    <ThemedView style={[styles.categoriesContainer, { backgroundColor }]}>
      {visibleCategories.map((category) => (
        <TouchableOpacity
        key={category.id}
        onPress={() => handleCategoryClick(category.id)}
        style={[
          styles.categoryCard,
          { shadowColor },
          selectedCategoryId === category.id && { backgroundColor: Colors.light.clicked },
        ]}
        >
          <Ionicons
            name={category.icon}
            size={24}
            style={[styles.icon, { color: tintColor }]}
          />
          <Text style={[styles.text, { color: tintColor }]}>
            {category.text}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.categoryCard, { shadowColor }]}
        onPress={toggleCategories}
      >
        <Ionicons
          name={
            showAll
              ? "chevron-up-outline"
              : "ellipsis-horizontal-circle-outline"
          }
          size={24}
          style={[styles.icon, { color: tintColor }]}
        />
        <Text style={[styles.text, { color: tintColor }]}>
          {showAll ? "Kam" : "Ko'proq"}
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
  },
  categoryCard: {
    width: "22%", // Ensures 4 cards per row with some spacing
    aspectRatio: 1, // Keeps the card square
    borderRadius: 10,
    borderColor: Colors.light.green,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  icon: {
    marginBottom: 4,
    color: Colors.light.green,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default DoctoricalCategories;
