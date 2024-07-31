import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface DoctorCardProps {
  image: string;
  name: string;
  specialization: string;
  rating: string;
  distance: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  specialization,
  rating,
  distance,
}) => {
  return (
    <View style={styles.card}>
      <Image src={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialization}>{specialization}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.rating_box}>
          <Ionicons
            name="star"
            size={12}
            style={{
              color: Colors.light.green,
            }}
          />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.distance_box}>
          <Ionicons
            name="location-outline"
            size={12}
            style={{
              color: "#A1A8B0",
            }}
          />

          <Text style={styles.distance}>{distance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 203,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 10, // Adjust margin for spacing between cards
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
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
    width: 140,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  specialization: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  rating_box: {
    width: 40,
    height: 25,
    backgroundColor: Colors.light.lineColor,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  rating: {
    fontSize: 12,
    color: Colors.light.green,
    textAlign: "center",
  },
  distance_box: {
    width: 50,
    height: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  distance: {
    fontSize: 12,
    color: "#666",
  },
});

export default DoctorCard;
