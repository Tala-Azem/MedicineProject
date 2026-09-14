import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function LightweightButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#004AAD",
    fontSize: 16,
    fontWeight: "bold",
  },
});
