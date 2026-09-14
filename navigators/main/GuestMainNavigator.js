import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserHelp } from "../../screens";
import { GuestDrawerNavigator } from "../drawers";

const Stack = createNativeStackNavigator();

export function UserMainNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userDrawerNavigator"
        component={GuestDrawerNavigator}
      />
      <Stack.Screen
        name="userHelpScreen"
        component={UserHelp}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("userHomeScreen")}>
              <Image
                source={require("../../assets/backuser.png")}
                style={styles.returnimage1}
              />
            </Pressable>
          ),

          headerStyle: {
            backgroundColor: "#004AAD",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 34 },
          tabBarStyle: { display: "none" },
        })}
      />
    </Stack.Navigator>
  );
}
