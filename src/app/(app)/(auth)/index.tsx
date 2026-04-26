import useUserStore from "@/hooks/use-userstore";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const { setIsGuest } = useUserStore();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go login" onPress={() => setIsGuest(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
