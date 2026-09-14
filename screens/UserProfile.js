import { useContext } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { EditableInfo } from "../components";
import { saveEmail, saveName, savePhone } from "../services/api";
import { AuthContext } from "../store";

export function UserProfile({ navigation, route }) {
  const {
    client: user,
    updateName,
    updateEmail,
    updatePhone,
  } = useContext(AuthContext);

  async function handleUpdateName(value) {
    let name = value;
    const result = await saveName(user.id, name);
    if (result.ok) {
      updateName(name);
    } else {
      console.log(result.error);
    }
  }

  async function handleUpdateEmail(value) {
    let email = value;
    const result = await saveEmail(user.id, email);
    if (result.ok) {
      updateEmail(email);
    } else {
      console.log(result.error);
    }
  }

  async function handleUpdatePhone(value) {
    let phone_number = value;
    const result = await savePhone(user.id, phone_number);
    if (result.ok) {
      updatePhone(phone_number);
    } else {
      console.log(result.error);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/Medicine.jpeg")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>{user.name}</Text>
          </View>

          <EditableInfo
            title="اسم المستخدم"
            value={user.name}
            icon="alert-circle"
            editable={true}
            onSave={(editedValue) => {
              handleUpdateName(editedValue);
            }}
          />
          <EditableInfo
            title="البريد الالكتروني"
            value={user.email}
            icon="alert-circle"
            editable={true}
            onSave={(editedValue) => {
              handleUpdateEmail(editedValue);
            }}
          />
          <EditableInfo
            title="رقم الهاتف"
            value={user.phone_number}
            icon="alert-circle"
            editable={true}
            onSave={(editedValue) => {
              handleUpdatePhone(editedValue);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    width: "100%",
  },
  profileImageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 700,
    marginBottom: 20,
  },
  profileText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
