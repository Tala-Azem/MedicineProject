import { FontAwesome5 } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants";
function Client({ title, children, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      {children}
      <Text style={styles.clientTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Welcome({ navigation, route }) {
  return (
    <ImageBackground
      source={require("../assets/Medicine.jpeg")}
      resizeMode="cover"
      style={styles.background}
    >
      {/* <Text style={styles.title}>اختر عضوية حسابك: </Text> */}
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Client
            title={"مستخدم"}
            onPress={() => navigation.navigate("userSignInScreen")}
            color={Colors.primaryUser100}
          >
            <FontAwesome5 name="hospital-user" size={42} color="white" />
          </Client>
          <Client
            title={"صيدلية"}
            onPress={() => navigation.navigate("pharmacySignInScreen")}
            color={Colors.primaryPharmacy100}
          >
            <FontAwesome5 name="clinic-medical" size={42} color="white" />
          </Client>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 100,
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderRadius: 12,
  },
  clientTitle: {
    fontSize: 30,
    marginLeft: 10,
    color: "white",
  },
});
