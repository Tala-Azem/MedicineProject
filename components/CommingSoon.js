import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store";

export function ComingSoon({ text }) {
  const { type } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {type === "pharmacy" && (
        <Image
          source={require("../assets/promotionPharmacy.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      )}

      {type === "user" && (
        <Image
          source={require("../assets/promotionUser.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      )}

      <Text style={styles.title}>{"قريباً"}</Text>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginHorizontal: 18,
    textAlign: "center",
  },
});
