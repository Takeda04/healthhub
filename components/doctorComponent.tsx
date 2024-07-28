import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface DoctorCardProps {
  image: string;
  name: string;
  specialization: string;
  rating: number;
  distance: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialization, rating, distance }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialization}>{specialization}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 138,
    height: 193,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10, // Adjust margin for spacing between cards
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rating: {
    fontSize: 12,
    color: Colors.light.green,
  },
  distance: {
    fontSize: 12,
    color: '#666',
  },
});

export default DoctorCard;
