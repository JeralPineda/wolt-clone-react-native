import { Pressable } from "@/components/pressable";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text } from "react-native";

export function AppleAuthButton() {
  return (
    <Pressable style={styles.appleButton}>
      <Ionicons name="logo-apple" size={18} color="#fff" />
      <Text style={styles.appleButtonText}>Sign in with Apple</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 2,
  },
  appleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
