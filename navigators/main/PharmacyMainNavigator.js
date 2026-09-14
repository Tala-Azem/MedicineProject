import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PharmacyDrawerNavigator } from "../drawers";

const Stack = createNativeStackNavigator();

export function PharmacyMainNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PharmacyDrawerNavigator"
        component={PharmacyDrawerNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="pharmacyHelpScreen"
        component={PharmacyHelp}
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: "#008137",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 34 },
          headerTitle: "المساعدة",
        }}
      /> */}
    </Stack.Navigator>
  );
}
