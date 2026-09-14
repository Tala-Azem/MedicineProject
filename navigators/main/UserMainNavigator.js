import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { UserHelp } from "../../screens";
import { UserDrawerNavigator } from "../drawers";
const Stack = createNativeStackNavigator();

export function UserMainNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userDrawerNavigator"
        component={UserDrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="userHelpScreen"
        component={UserHelp}
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: "#004AAD",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 34 },
          headerTitle: "المساعدة",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  help: {
    width: 50,
    height: 50,
  },
});
