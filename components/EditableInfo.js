import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function EditableInfo({ title, value, icon, editable, onSave }) {
  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleSave = () => {
    onSave(editedValue);
    setEditing(false);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.infoTopContainer}>
        <View style={styles.infoIconContainer}>
          <Feather name={icon} size={20} color="#888" />
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>{title}</Text>
        </View>
        {editable && (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setEditing(!editing)}
          >
            <Feather
              name={editing ? "check" : "edit"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        )}
        {editing && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>حفظ</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.infoBottomContainer}>
        {editing ? (
          <TextInput
            style={styles.infoInput}
            value={editedValue}
            onChangeText={setEditedValue}
          />
        ) : (
          <Text style={styles.infoValue}>{value}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    alignItems: "center",
  },
  infoTopContainer: {
    flexDirection: "row-reverse", // Reversed direction
    alignItems: "center",
    marginBottom: 4,
    marginHorizontal: 12,
    width: "80%",
  },
  infoBottomContainer: {
    width: "80%",
    marginBottom: 10,
    marginHorizontal: 12,
    paddingRight: 30,
  },
  infoIconContainer: {
    marginLeft: 10, // Updated to left margin
  },
  infoTextContainer: {
    flex: 1,
    alignItems: "flex-end", // Align text to the right
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "right", // Right-aligned text
  },
  infoValue: {
    fontSize: 16,
    textAlign: "right", // Right-aligned text
  },
  infoInput: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginBottom: 5,
    textAlign: "right", // Right-aligned text
  },
  editButton: {
    marginRight: 10, // Updated to right margin
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#004AAD",
  },
  saveButton: {
    marginRight: 10, // Updated to right margin
    padding: 5,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#004AAD",
  },
  saveButtonText: {
    color: "white",
  },
});
