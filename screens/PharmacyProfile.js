import { StyleSheet } from "react-native";
import { ComingSoon } from "../components/CommingSoon";
export function PharmacyProfile({ navigation, route }) {
  return <ComingSoon />;
}

const styles = StyleSheet.create({
  profileText: {
    fontSize: 20,
    marginTop: 20,
    marginRight: 30,
  },
  homeButton: {
    alignItems: "center",
    backgroundColor: "#008137",
    width: 180,
    justifyContent: "center",
    height: 55,
    display: "flex",
    marginLeft: 110,
    marginTop: 30,
    borderRadius: 20,
  },
});
