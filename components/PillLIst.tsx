import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import PillCard from './PillCard'; // Adjust the import path

const { width } = Dimensions.get('window');

const PillsList: React.FC<{ pills: any[] }> = ({ pills }) => {
  const renderPillCard = ({ item }: { item: any }) => (
    <PillCard
      image={item.image}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  );

  return (
    <FlatList
      horizontal
      data={pills}
      renderItem={renderPillCard}
      keyExtractor={(item) => item.name} // Use a unique key
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
      snapToInterval={335} // Matches the width of the PillCard for snapping effect
      decelerationRate="fast"
    />
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 10,
    paddingHorizontal: 15, // Added padding to the sides
  },
});

export default PillsList;
