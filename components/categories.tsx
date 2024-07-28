import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

// Define the icon names correctly
type IconName = keyof typeof Ionicons.glyphMap;

interface Category {
  id: string;
  icon: IconName;
  text: string;
}

const categories: Category[] = [
  { id: '1', icon: 'heart-outline', text: 'Cardiology' },
  { id: '2', icon: 'medkit-outline', text: 'General Medicine' },
  { id: '3', icon: 'business-outline', text: 'Pharmacy' },
  { id: '4', icon: 'pulse-outline', text: 'Services' }, // Use a valid icon name here
  // Add more categories as needed
];

const MedicalCategories = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const tintColor = useThemeColor({}, 'tint');
  const shadowColor = useThemeColor({}, 'icon');

  return (
    <ThemedView style={[styles.categoriesContainer, { backgroundColor }]}>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={[styles.categoryCard, { shadowColor }]}>
          <Ionicons name={category.icon} size={24} color={tintColor} />
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: "#fff",
  },
  categoryCard: {
    width: 64,
    height: 56,
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
});

export default MedicalCategories;
