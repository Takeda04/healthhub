//@ts-nocheck
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { format } from "date-fns";

type RootStackParamList = {
  DoctorDetailScreen: { doctor: any };
};

type DoctorDetailScreenRouteProp = RouteProp<RootStackParamList, 'DoctorDetailScreen'>;

const DoctorDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<DoctorDetailScreenRouteProp>();
  const { doctor } = route.params;
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = Array.from({ length: 30 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return {
      day: format(date, "E"),
      date: format(date, "d"),
    };
  });

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "07:00 PM",
  ];

  const handleDayPress = (day: number) => {
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const handleTimePress = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (selectedDay && selectedTime) {
      Alert.alert(
        "Appointment Booked",
        `Day: ${selectedDay}, Time: ${selectedTime}`
      );
    } else {
      Alert.alert("Please select a day and time");
    }
  };

  const handleChatPress = () => {
    Alert.alert("Chat with Doctor", "Redirecting to chat...");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={Colors.light.black}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Doktor ma'lumotlari</Text>
      </View>

      <View style={styles.doctorInfo}>
        <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorSpecialization}>
            {doctor.specialization}
          </Text>
          <View style={styles.ratingDistance}>
            <Text style={styles.rating}>
              <Ionicons name="star" size={16} color={Colors.light.green} />{" "}
              {doctor.rating}
            </Text>
            <Text style={styles.distance}>
              <Ionicons
                name="location-outline"
                size={18}
                color={Colors.light.primary}
              />{" "}
              {doctor.distance}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>{doctor.about}</Text>
      </View>

      <View style={styles.dateSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateScrollView}
        >
          {days.map(({ day, date }) => (
            <TouchableOpacity
              key={date}
              style={[
                styles.dateButton,
                selectedDay === date && styles.selectedDateButton,
              ]}
              onPress={() => handleDayPress(date)}
            >
              <Text
                style={[
                  styles.dateDay,
                  selectedDay === date && styles.selectedDateText,
                ]}
              >
                {day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  selectedDay === date && styles.selectedDateText,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.timeSection}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.selectedTimeButton,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.selectedTimeText,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleChatPress} style={styles.chatButton}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={22}
            color={Colors.light.white}
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 3,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleBookAppointment}
          style={styles.bookButton}
        >
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.black,
  },
  doctorInfo: {
    flexDirection: "row",
    padding: 16,
  },
  doctorImage: {
    width: 115,
    height: 115,
    borderRadius: 16,
  },
  doctorDetails: {
    marginLeft: 16,
    justifyContent: "center",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.black,
  },
  doctorSpecialization: {
    fontSize: 16,
    color: Colors.light.primary,
  },
  ratingDistance: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    fontSize: 14,
    color: Colors.light.black,
    marginRight: 8,
  },
  distance: {
    fontSize: 14,
    color: Colors.light.black,
  },
  aboutSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.light.black,
  },
  aboutText: {
    fontSize: 14,
    color: Colors.light.black,
    textAlign: "justify",
  },
  dateSection: {
    padding: 16,
  },
  dateScrollView: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateButton: {
    marginRight: 12,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.green,
    width: 46,
    height: 64

  },
  selectedDateButton: {
    backgroundColor: Colors.light.green,
  },
  dateDay: {
    fontSize: 13,
    color: Colors.light.green,
    textAlign: "center",

  },
  dateText: {
    fontSize: 16,
    color: Colors.light.black,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },
  selectedDateText: {
    color: Colors.light.white,
  },
  timeSection: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems :"center"
  },
  timeButton: {
    marginRight: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.green,
    width: "23%"
  },
  selectedTimeButton: {
    backgroundColor: Colors.light.green,
  },
  timeText: {
    fontSize: 14,
    color: Colors.light.black,
    textAlign: "center",
    fontWeight: "bold"
  },
  selectedTimeText: {
    color: Colors.light.white,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  chatButton: {
    flex: 1,
    padding: 9,
    borderRadius: 8,
    backgroundColor: Colors.light.green,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  bookButton: {
    flex: 3,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.light.green,
    alignItems: "center",
    justifyContent: "center",
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.white,
  },
});

export default DoctorDetailScreen;
