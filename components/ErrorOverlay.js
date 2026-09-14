import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";

export function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}> حدث خطأ ما</Text>
      <Text style={styles.text}> {message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    // backgroundColor: GlobalStyles.colors.primary700,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.error500,
  },
  text: {
    color: Colors.error300,
    textAlign: "center",
    marginBottom: 8,
  },
});
