import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {
  CardView,
  ErrorOverlay,
  LoadingOverlay,
  PharmacyCard,
} from "../components";
import { BACKEND_URL, Colors } from "../constants";
import { useRemoteData } from "../hooks";
import { getMedicinePharmacies } from "../services";

export function UserMedicineDetails({ navigation, route }) {
  const medicine = route.params.medicine;
  const imagePath = `${BACKEND_URL}/images/${medicine.photo.trim()}.png`;
  const {
    data: pharmacies,
    isFetching,
    error,
  } = useRemoteData(() => getMedicinePharmacies(medicine.available_in));

  function renderPharmacyItem({ item }) {
    return <PharmacyCard pharmacy={item} />;
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CardView extraStyles={styles.card}>
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: imagePath }}
              style={styles.medicinePhoto}
              resizeMode="cover"
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.leftDetails}>
              <Text style={styles.name}>{medicine.name}</Text>
              <Text style={styles.scientificName}>
                {medicine.scientific_name}
              </Text>
              <Text style={styles.useFor}>{medicine.use_for}</Text>
            </View>
            <View style={styles.rightDetails}>
              <Text style={styles.priceTitle}>السعر</Text>
              <Text style={styles.price}>{medicine.price}</Text>
            </View>
          </View>
        </CardView>
        {pharmacies.length > 0 && (
          <Text style={styles.availableTitle}>
            متوفر في {pharmacies.length} صيدلية
          </Text>
        )}
      </View>

      {!isFetching && !error && pharmacies.length === 0 && (
        <View style={styles.bottomContainer}>
          <Text style={styles.medicineNotAvailable}>
            الدواء غير متوفر في أي صيدلية
          </Text>
        </View>
      )}

      {pharmacies.length > 0 && (
        <FlatList
          data={pharmacies}
          style={styles.bottomContainer}
          renderItem={renderPharmacyItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#E6ECF5", // Light blue-gray background color
    shadowColor: "#000000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 2, // Elevation for Android shadow
  },
  bottomContainer: {
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    borderColor: Colors.primaryUser100,
    shadowColor: Colors.primaryUser500,
    borderWidth: 1,
    marginTop: 12,
  },
  photoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  medicinePhoto: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  leftDetails: {
    display: "flex",
    flexDirection: "column",
    flex: 4,
    alignItems: "flex-start",
  },
  rightDetails: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-end",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaryUser500,
  },
  scientificName: {
    fontSize: 14,
    marginBottom: 8,
  },
  priceTitle: {
    fontSize: 20,
    color: "green",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
  },
  useFor: {
    fontSize: 16,
  },

  availableTitle: {
    textAlign: "right",
    fontSize: 24,
    fontWeight: "bold",
    paddingRight: 14,
    marginVertical: 12,
    color: Colors.primaryUser500,
  },

  medicineNotAvailable: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 100,
    color: Colors.error300,
  },
});
