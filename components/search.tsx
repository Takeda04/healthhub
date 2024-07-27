import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';

const SearchInput = () => {
  return (
    <ThemedView style={styles.searchContainer}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={Colors.dark.black}
        style={styles.searchInput}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    borderColor: Colors.light.lineColor,
    backgroundColor: "#fff"
  },
  searchInput: {
    height: 40,
    borderColor: Colors.light.lineColor,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default SearchInput;
