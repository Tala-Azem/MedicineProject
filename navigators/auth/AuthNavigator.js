import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PharmacySignIn, UserSignIn, UserSignup, Welcome } from "../../screens";

const Stack = createNativeStackNavigator();

export function AuthNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcomeScreen"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="userSignInScreen"
        component={UserSignIn}
        options={{
          title: "تسجبل الدخول",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="userSignupScreen"
        component={UserSignup}
        options={{
          title: "إنشاء حساب",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="pharmacySignInScreen"
        component={PharmacySignIn}
        options={{
          title: "تسجبل الدخول",
          animation: "fade",
        }}
      />
    </Stack.Navigator>
  );
}
