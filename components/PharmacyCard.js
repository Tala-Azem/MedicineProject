import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";
import { CardView } from "./CardView";
export function PharmacyCard({ pharmacy }) {
  return (
    <CardView extraStyles={styles.card}>
      <View style={styles.pharmacyItem}>
        <View style={styles.nameAndCity}>
          <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
          <View style={styles.cityContainer}>
            <Entypo name="location" size={20} color={Colors.primaryUser100} />
            <Text style={styles.pharmacyCity}>{pharmacy.city}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons
            name="mark-email-read"
            size={16}
            color={Colors.primaryPharmacy100}
          />
          <Text style={styles.pharmacyInfo}>{pharmacy.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Entypo
            name="old-phone"
            size={16}
            color={Colors.primaryPharmacy100}
          />
          <Text style={styles.pharmacyInfo}>{pharmacy.num}</Text>
        </View>
      </View>
    </CardView>
  );
}

const styles = StyleSheet.create({
  card: {},
  pharmacyItem: {
    width: "100%",
    height: "100%",
  },
  nameAndCity: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  pharmacyName: {
    flex: 1,
    fontSize: 20,
    marginBottom: 6,
    fontWeight: "bold",
  },
  cityContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pharmacyCity: {
    fontSize: 16,
    marginHorizontal: 10,
    color: "#999999",
  },
  infoContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 4,
    marginLeft: 8,
  },
  pharmacyInfo: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 10,
  },
});
