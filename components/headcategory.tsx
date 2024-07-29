import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

interface HeaderProps {
  title: string;
  linkText: string;
  onLinkPress: () => void;
}

const HeadCategory: React.FC<HeaderProps> = ({
  title,
  linkText,
  onLinkPress,
}) => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const titleColor = useThemeColor({}, "black");
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <TouchableOpacity onPress={onLinkPress}>
        <Text style={[styles.link, {color: textColor}]}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.black,
  },
  link: {
    fontSize: 16,
    color: Colors.light.green,
    fontWeight: "bold",
  },
});

export default HeadCategory;
