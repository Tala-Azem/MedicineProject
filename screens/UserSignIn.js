import { useContext, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { FloatingForm, InputField } from "../components";
import { Colors } from "../constants";
import { login } from "../services";
import { AuthContext } from "../store";

export function UserSignIn({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSignIn = async () => {
    setError("");
    setIsFetching(true);
    const result = await login(email, password, "users");
    if (result.ok) {
      authCtx.authenticate("token", "user", result.client);
    } else {
      setError(result.error);
    }
    setIsFetching(false);
  };

  return (
    <ImageBackground
      source={require("../assets/Medicine.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <FloatingForm
          title="تسجيل دخول:"
          buttonText="تسجيل دخول"
          titleColor={Colors.primaryUser500}
          buttonColor={Colors.primaryUser300}
          onSubmit={handleSignIn}
          lightweightButtonText="إنشاء حساب"
          lightweightButtonOnPress={() => {
            navigation.replace("userSignupScreen");
          }}
          error={error}
        >
          <View style={styles.inputWrapper}>
            <InputField
              icon="mail"
              iconColor={Colors.primaryUser500}
              inputPlaceholder="البريد الإلكتروني"
              inputValue={email}
              inputAction={setEmail}
              autoCapitalize="none"
              inputBorderColor={Colors.primaryUser500}
            />
            <InputField
              icon="lock"
              iconColor={Colors.primaryUser500}
              inputPlaceholder="كلمة المرور"
              inputValue={password}
              inputAction={setPassword}
              secureTextEntry
              inputBorderColor={Colors.primaryUser500}
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

  inputIcon: {
    marginRight: 10,
  },

  error: {
    color: Colors.error300,
  },
});
