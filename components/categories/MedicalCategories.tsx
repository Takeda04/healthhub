import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, LayoutAnimation, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';


// Define the icon names correctly
type IconName = keyof typeof Ionicons.glyphMap;

interface Category {
  id: string;
  icon: IconName;
  text: string;
  link :string
}

const categories: Category[] = [
  { id: '1', icon: 'git-network-outline', text: 'Doktor', link: "screens/doctor" },
  { id: '2', icon: 'leaf-outline', text: 'Dorixona',  link: "" },
  { id: '3', icon: 'business-outline', text: 'Klinika', link: "" },
  { id: '4', icon: 'sparkles-outline', text: 'AI Doktor', link: "" },
 
];


const MedicalCategories = () => {
  const [showAll, setShowAll] = useState(false);
  const backgroundColor = useThemeColor({}, 'background');
  const tintColor = useThemeColor({}, 'tint');
  const shadowColor = useThemeColor({}, 'icon');

  const visibleCategories = showAll ? categories : categories.slice(0, 3);
  const navigate = useRouter()

  const navigateToDoctorsList = (link: any) => {
    if(link !== ''){
      navigate.push(link)
    }else{
      Alert.alert("Diqqat!!!", "Hozircha loyihaning doktorlar qisminigina ishlata olasiz!");
    }
  };

  const toggleCategories = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowAll(!showAll);
  };

  return (
    <ThemedView style={[styles.categoriesContainer, { backgroundColor }]}>
      {visibleCategories.map((category) => (
        <TouchableOpacity onPress={() => navigateToDoctorsList(category.link)} key={category.id} style={[styles.categoryCard, { shadowColor }]}>
          <Ionicons name={category.icon} size={24} style={[styles.icon, { color: tintColor }]} />
          <Text style={[styles.text, { color: tintColor }]}>{category.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.categoryCard, { shadowColor }]} onPress={toggleCategories}>
        <Ionicons name={showAll ? 'chevron-up-outline' : 'ellipsis-horizontal-circle-outline'} size={24} style={[styles.icon, { color: tintColor }]} />
        <Text style={[styles.text, { color: tintColor }]}>{showAll ? 'Kam' : "Ko'proq"}</Text>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  categoryCard: {
    width: '22%', // Ensures 4 cards per row with some spacing
    aspectRatio: 1, // Keeps the card square
    borderRadius: 10,
    borderColor: Colors.light.green,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  icon: {
    marginBottom: 4,
    color: Colors.light.green
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default MedicalCategories;
