import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants";
import { LightweightButton } from "./LightweightButton";

export function FloatingForm({
  title,
  titleColor,
  buttonText,
  buttonColor,
  onSubmit,
  children,
  lightweightButtonText,
  lightweightButtonOnPress,
  error,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        {children}
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={onSubmit}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        {lightweightButtonText && lightweightButtonOnPress && (
          <LightweightButton
            text={lightweightButtonText}
            onPress={lightweightButtonOnPress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  error: {
    fontSize: 14,
    color: Colors.error300,
    alignSelf: "center",
  },
});
