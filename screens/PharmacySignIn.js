import { useContext, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { FloatingForm, InputField } from "../components";
import { Colors } from "../constants";
import { login } from "../services";
import { AuthContext } from "../store";

export function PharmacySignIn({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSignIn = async () => {
    // error = "";
    // setIsFetching(true);
    const result = await login(email, password, "pharmacies");
    if (result.ok) {
      authCtx.authenticate("token", "pharmacy", result.client);
    } else {
      // setError(result.error);
    }
    // setIsFetching(false);
  };

  return (
    <ImageBackground
      source={require("../assets/Medicine.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <FloatingForm
          title="ادخل المعلومات التالية:"
          buttonText="تسجيل دخول"
          onSubmit={handleSignIn}
          titleColor={Colors.primaryPharmacy500}
          buttonColor={Colors.primaryPharmacy300}
        >
          <View style={styles.inputWrapper}>
            <InputField
              icon="mail"
              iconColor={Colors.primaryPharmacy500}
              inputPlaceholder="البريد الإلكتروني"
              inputValue={email}
              inputAction={setEmail}
              autoCapitalize="none"
              inputBorderColor={Colors.primaryPharmacy500}
            />
            <InputField
              icon="lock"
              iconColor={Colors.primaryPharmacy500}
              inputPlaceholder="كلمة المرور"
              inputValue={password}
              inputAction={setPassword}
              secureTextEntry
              inputBorderColor={Colors.primaryPharmacy500}
            />
          </View>
        </FloatingForm>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputWrapper: {
    marginTop: 20,
  },
});
