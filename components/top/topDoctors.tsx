// TopDoctors.tsx
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors"; // Adjust import as necessary
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";

interface TopDoctorsProps {
  image: string;
  name: string;
  specialization: string;
  rating: string;
  distance: string;
  onPress: () => void;
 
}

const TopDoctors: React.FC<TopDoctorsProps> = ({
  image,
  name,
  specialization,
  rating,
  distance,
  onPress
}) => {
  const navigate = useRouter();


  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image src={image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.specialization}>{specialization}</Text>
          <View style={styles.line} />

          <View style={styles.footer}>
            <View style={styles.rating_box}>
              <Ionicons
                name="star-outline"
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
                size={15}
                style={{
                  color: "#A1A8B0",
                }}
              />

              <Text style={styles.distance}>{distance}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 327,
    height: 132,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.lineColor,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 8, // Add margin to space out cards
    marginBottom: 10, // Add margin bottom for additional spacing
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  details: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specialization: {
    fontSize: 14,
    color: Colors.light.primary,
  },
  line: {
    height: 1,
    backgroundColor: Colors.light.lineColor,
    width: 170,
    marginVertical: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  rating: {
    fontSize: 14,
    color: Colors.light.primary,
  },
  rating_box: {
    width: 50,
    height: 25,
    backgroundColor: Colors.light.lineColor,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  distance_box: {
    width: 60,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  distance: {
    fontSize: 14,
    color: Colors.light.black,
  },
});

export default TopDoctors;
