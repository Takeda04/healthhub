import { Image, SafeAreaView, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";;

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: Colors.light.background,
        },

        headerTitle: "",
        headerShadowVisible: false
      }}>

      </Stack.Screen>
      <ThemedView style={{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.light.background,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Image source={require("@/assets/images/LogoApp.png")}/>

      </ThemedView>
    </SafeAreaView>
  );
};

export default Home;
