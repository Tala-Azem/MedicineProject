import { useContext } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { MedicineCard } from "../components";
import { useRemoteData } from "../hooks";
import { getUserMedicines, saveMedicines } from "../services";
import { AuthContext } from "../store";

export function UserMedicines({ navigation, rout }) {
  const { client: user, updateMedicines } = useContext(AuthContext);

  const {
    data: medicines,
    isFetching,
    error,
  } = useRemoteData(() => getUserMedicines(user.medicines), [user.medicines]);

  async function handleRemoveMedicine(item) {
    const filteredMedicines = user.medicines.filter((medicine) => {
      return medicine !== item.id;
    });
    const result = await saveMedicines(user.id, filteredMedicines);
    if (result.ok) {
      updateMedicines(result.medicines);
    } else {
      console.log(result.error);
    }
  }

  function renderMedicineItem({ item }) {
    return (
      <MedicineCard
        medicine={item}
        onMedicineClicked={() => {
          navigation.navigate("detailsScreen", { medicine: item });
        }}
        onRemove={() => handleRemoveMedicine(item)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Medicine.jpeg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <FlatList
          style={styles.medicines}
          data={medicines}
          renderItem={renderMedicineItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  medicines: {
    marginTop: 16,
  },
  deleteAction: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
    paddingRight: 16,
  },
});
