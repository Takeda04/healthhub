import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

const SearchInput = () => {

  const borderColor = useThemeColor({}, 'icon');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  return (
    <ThemedView style={[styles.searchContainer, {backgroundColor}]}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={borderColor}
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
