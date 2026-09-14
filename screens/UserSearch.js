import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { ErrorOverlay, LoadingOverlay, MedicineCard } from "../components";
import { useRemoteData, useSearch } from "../hooks";
import { getAllMedicines, saveMedicines } from "../services";
import { AuthContext, MedicinesContext } from "../store";

export function UserSearch({ navigation }) {
  const { medicines, setMedicines } = useContext(MedicinesContext);
  const { client: user, updateMedicines } = useContext(AuthContext);

  const {
    data: medicinesData,
    isFetching,
    error,
    refreshData,
    shouldRefresh,
  } = useRemoteData(getAllMedicines);

  useEffect(() => {
    setMedicines(medicinesData);
  }, [medicinesData, setMedicines]);

  const searchFields = ["name", "scientific_name", "use_for"];
  const {
    searchTerm,
    filteredData: filteredMedicines,
    handleSearchTextChange,
  } = useSearch(medicines, searchFields);

  async function handleSaveMedicine(item) {
    if (!user.medicines.includes(item.id)) {
      const result = await saveMedicines(user.id, [...user.medicines, item.id]);
      if (result.ok) {
        updateMedicines(result.medicines);
      } else {
        console.log(result.error);
      }
    }
  }

  async function handleRemoveMedicine(item) {
    if (user.medicines.includes(item.id)) {
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
  }

  async function handleRefresh() {
    refreshData();
  }

  function renderMedicineItem({ item }) {
    return (
      <MedicineCard
        medicine={item}
        onMedicineClicked={() => {
          navigation.navigate("detailsScreen", { medicine: item });
        }}
        onSave={() => {
          handleSaveMedicine(item);
        }}
        onRemove={() => {
          handleRemoveMedicine(item);
        }}
      />
    );
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching && !shouldRefresh) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Medicine.jpeg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999999"
            value={searchTerm}
            onChangeText={handleSearchTextChange}
          />
          <Ionicons
            name="search"
            size={24}
            color="#999999"
            style={styles.searchIcon}
          />
        </View>
        <FlatList
          data={filteredMedicines}
          renderItem={renderMedicineItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={handleRefresh} />
          }
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#333333",
  },
  searchIcon: {
    marginLeft: 8,
  },
});
