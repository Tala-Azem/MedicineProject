import { useContext, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { FloatingForm, InputField } from "../components";
import { Colors } from "../constants";
import { signup } from "../services";
import { AuthContext } from "../store";

export function UserSignup({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSignup = async () => {
    if (password === confirmPassword) {
      setError("");
      setIsFetching(true);
      const result = await signup(email, password, nationalId);
      if (result.ok) {
        authCtx.authenticate("token", "user", result.client);
      } else {
        setError(result.error);
      }
      setIsFetching(false);
    } else {
      setError("كلمات السر لا تتطابق");
    }
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
          titleColor={Colors.primaryUser500}
          buttonColor={Colors.primaryUser300}
          buttonText="إنشاء حساب"
          onSubmit={handleSignup}
          lightweightButtonText="تسجيل دخول"
          lightweightButtonOnPress={() => {
            navigation.replace("userSignInScreen");
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
              icon="alert-circle"
              iconColor={Colors.primaryUser500}
              inputPlaceholder="رقم الهوية"
              inputValue={nationalId}
              inputAction={setNationalId}
              inputBorderColor={Colors.primaryUser500}
            />
            <InputField
              icon="lock"
              iconColor={Colors.primaryUser500}
              inputPlaceholder="كلمة المرور"
              inputValue={password}
              inputAction={setPassword}
              inputBorderColor={Colors.primaryUser500}
              secureTextEntry
            />
            <InputField
              icon="lock"
              iconColor={Colors.primaryUser500}
              inputPlaceholder="تأكيد كلمة المرور"
              inputValue={confirmPassword}
              inputAction={setConfirmPassword}
              inputBorderColor={Colors.primaryUser500}
              secureTextEntry
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
  error: {
    color: Colors.error300,
  },
});
