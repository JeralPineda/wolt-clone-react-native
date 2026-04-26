import { Pressable } from "@/components/pressable";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text } from "react-native";

export function GoogleAuthButton() {
  return (
    <Pressable style={styles.gogleButton}>
      <Ionicons name="logo-google" size={18} color="#fff" />
      <Text style={styles.gogleButtonText}>Continue with Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gogleButton: {
    backgroundColor: "#4285f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 2,
  },
  gogleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
