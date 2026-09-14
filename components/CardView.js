import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export function CardView({ children, extraStyles, onCardClicked }) {
  const [isPressed, setIsPressed] = useState(false);

  function handlePressIn() {
    if (onCardClicked) setIsPressed(true);
  }

  function handlePressOut() {
    if (onCardClicked) setIsPressed(false);
  }

  function handlePress() {
    if (onCardClicked) onCardClicked();
  }
  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onCardClicked}
    >
      <View style={[styles.card, extraStyles, isPressed && styles.cardPressed]}>
        {children}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.8,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardPressed: {
    opacity: 1,
    backgroundColor: "#DDDDDD",
  },
});
