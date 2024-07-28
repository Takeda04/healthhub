import { Colors } from '@/constants/Colors';
import { CardData } from '@/types/types';
import React, { useRef, useEffect } from 'react';
import { View, ScrollView, Animated, Dimensions, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get('window');

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
    }, 5000);

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
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.iconContainer}>
                {item.icon}
              </View>
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
    borderColor: Colors.light.green, // Border color
    borderWidth: 2, // Border width
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    paddingRight: 40, // Space for the icon
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -20 }], // Adjust the vertical center position
  },
});

export default Slider;
