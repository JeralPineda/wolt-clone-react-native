import { AppleAuthButton } from "@/components/auth/apple-auth-button";
import { GoogleAuthButton } from "@/components/auth/google-auth-button";
import { Pressable } from "@/components/pressable";
import { Colors, Fonts } from "@/constants/theme";
import useUserStore from "@/hooks/use-userstore";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function OtherOptions() {
  const router = useRouter();
  const { setIsGuest } = useUserStore();

  const continueAsGuest = () => {
    setIsGuest(true);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeButton} onPress={() => router.back()}>
        <Ionicons name="close" size={24} />
      </Pressable>

      <Text style={styles.title}>Log in or create a Wolt account</Text>

      <View style={styles.buttonContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <AppleAuthButton />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)}>
          <GoogleAuthButton />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)}>
          <Pressable style={styles.facebookButton}>
            <FontAwesome5 name="facebook" size={18} color="#000000" />
            <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
          </Pressable>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400)}>
          <Pressable style={styles.otherButton} onPress={continueAsGuest}>
            <Text style={styles.otherButtonText}>Continue as guest</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  closeButton: {
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 8,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    marginVertical: 22,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
  },
  otherButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },
  facebookButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  facebookButtonText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: "600",
  },
});
