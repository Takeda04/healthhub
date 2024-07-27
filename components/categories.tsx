import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme.web';

interface Category {
  id: string;
  icon: string;
  text: string;
}

const categories: Category[] = [
  { id: '1', icon: 'heart-outline', text: 'Cardiology' },
  { id: '2', icon: 'medkit-outline', text: 'General Medicine' },
  { id: '3', icon: 'business-outline', text: 'Pharmacy' },
  { id: '4', icon: 'puzzle-outline', text: 'Services' },
  // Add more categories as needed
];

const MedicalCategories = () => {

    const colorScheme = useColorScheme();
  return (
    <ThemedView style={styles.categoriesContainer}>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.categoryCard}>
          <Ionicons name={category.icon} size={24} color={Colors.light.green} />
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
    padding: 16,
    backgroundColor: "#fff"
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
  }
});

export default MedicalCategories;
