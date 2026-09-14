import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
function SocialItem({ text, children }) {
  return (
    <View style={styles.socialItem}>
      {children}
      <Text style={styles.socialText}>{text}</Text>
    </View>
  );
}

export function PharmacySocial({ navigation, route }) {
  return (
    <View style={styles.social}>
      <View style={styles.socialLeft}>
        <SocialItem text={"e_coders3"}>
          <AntDesign name="instagram" size={42} color="#f96981" />
        </SocialItem>

        <SocialItem text={"056 818 9539"}>
          <FontAwesome name="whatsapp" size={42} color="#05a805" />
        </SocialItem>

        <SocialItem text={"e_coders3"}>
          <FontAwesome5 name="facebook" size={42} color="#1d5ed6" />
        </SocialItem>
        <SocialItem text={"e3.coders@gmail.com"}>
          <MaterialCommunityIcons name="gmail" size={42} color="red" />
        </SocialItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  social: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  socialItem: {
    marginVertical: 12,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  socialText: {
    fontSize: 14,
    marginLeft: 8,
  },
});
