import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BACKEND_URL, Colors } from "../constants";
import { AuthContext } from "../store";
import { CardView } from "./CardView";
export function MedicineCard({
  medicine,
  onMedicineClicked,
  onSave,
  onRemove,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContext(AuthContext);

  const imagePath = `${BACKEND_URL}/images/${medicine.photo.trim()}.png`;
  const placeholderImage = require("../assets/placeholder.png");

  return (
    <CardView extraStyles={styles.card} onCardClicked={onMedicineClicked}>
      <View style={styles.photo}>
        <Image
          // source={isLoading ? placeholderImage : { uri: imagePath }}
          source={{ uri: imagePath }}
          style={styles.medicinePhoto}
          resizeMode="cover"
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{medicine.name}</Text>
        <Text style={styles.scientificName}>{medicine.scientific_name}</Text>
        <Text style={styles.price}>Price: {medicine.price}</Text>
        <Text style={styles.useFor}>Use For: {medicine.use_for}</Text>
      </View>
      {onSave && onRemove && (
        <View style={styles.saveButton}>
          {!client.medicines.includes(medicine.id) && (
            <Pressable
              onPress={onSave}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <MaterialIcons
                name="bookmark-border"
                size={24}
                color={Colors.primaryUser300}
              />
            </Pressable>
          )}
          {client.medicines.includes(medicine.id) && (
            <Pressable
              onPress={onRemove}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <MaterialIcons
                name="bookmark"
                size={24}
                color={Colors.primaryPharmacy100}
              />
            </Pressable>
          )}
        </View>
      )}
      {onRemove && !onSave && (
        <View style={styles.saveButton}>
          <Pressable
            onPress={onRemove}
            style={({ pressed }) => pressed && styles.pressed}
          >
            <Entypo name="trash" size={24} color={Colors.error300} />
          </Pressable>
        </View>
      )}
    </CardView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: Colors.primaryUser100,
    shadowColor: Colors.primaryUser500,
    borderWidth: 1,
  },

  photo: {
    marginRight: 16,
  },
  medicinePhoto: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primaryUser500,
  },
  scientificName: {
    fontSize: 14,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: "green",
  },
  useFor: {
    fontSize: 16,
  },
  saveButton: {
    alignSelf: "flex-start",
  },
});
