import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PillCardProps {
  image: string; // URL or local path to the image
  name: string;
  description: string;
  price: string; // Price as a string (e.g., "$12.99")
}

const PillCard: React.FC<PillCardProps> = ({ image, name, description, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 335,
    height: 135,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10, // Margin to separate cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.light.green,
  },
});

export default PillCard;
