import { Colors } from "@/constants/Colors";
import { CardData } from "@/types/types";
import React, { useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

interface SliderProps {
  data: CardData[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let scrollValue = 0;
    let scrolled = 0;

    const interval = setInterval(() => {
      scrolled++;
      if (scrolled < data.length) {
        scrollValue = scrollValue + width;
      } else {
        scrollValue = 0;
        scrolled = 0;
      }
      scrollViewRef.current?.scrollTo({ x: scrollValue, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length, width]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Clicked", 'asasas')}>
                  <Text style={styles.subtitle}>{item.button}</Text>
                </TouchableOpacity>
              </View>
              <Image source={require("@/assets/images/nurse.png")}/>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 135,
  },
  card: {
    width: 335,
    height: 135,
    borderRadius: 20,
    marginHorizontal: (width - 335) / 2,
    backgroundColor: Colors.light.lineColor, // Customize card background color
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.light.green, 
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    paddingRight: 40, // Space for the icon
  },
  title: {
    width: 169,
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  button: {
    width: 97,
    height: 35,
    borderRadius: 20,
    backgroundColor: Colors.light.green,
  },
  subtitle:{
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -20 }], // Adjust the vertical center position
  },
});

export default Slider;
