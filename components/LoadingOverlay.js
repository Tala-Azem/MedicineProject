import { ActivityIndicator, StyleSheet, View } from "react-native";

export function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
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
});
