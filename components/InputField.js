import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export function InputField({
  icon,
  iconColor,
  inputPlaceholder,
  inputValue,
  inputAction,
  inputExtraStyles,
  inputBorderColor,
  ...additionalProps
}) {
  return (
    <View style={styles.inputIconWrapper}>
      <TextInput
        placeholder={inputPlaceholder}
        style={[
          styles.input,
          inputExtraStyles,
          { borderColor: inputBorderColor },
        ]}
        placeholderTextColor="#A8A8A8"
        value={inputValue}
        onChangeText={inputAction}
        {...additionalProps}
      />
      <Feather name={icon} size={24} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputIconWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    textAlign: "right",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
});
