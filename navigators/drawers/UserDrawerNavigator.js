import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { DrawerContent, IconButton } from "../../components";
import { Colors } from "../../constants";
import {
  UserChat,
  UserHome,
  UserMedicineDetails,
  UserMedicines,
  UserProfile,
  UserSearch,
} from "../../screens";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function UserDrawer({ navigation, route }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerActiveBackgroundColor: Colors.primaryUser100,
        drawerActiveTintColor: "white",
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="questioncircle"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("userHelpScreen");
            }}
          />
        ),
      })}
    >
      <Drawer.Screen name="الصفحة الرئيسية" component={UserHome} />
      <Drawer.Screen name="الصفحة الشخصية" component={UserProfile} />
      <Drawer.Screen name="أدويتي" component={UserMedicines} />
      <Stack.Screen name="البحث" component={UserSearch} />
      <Drawer.Screen name="المحادثات" component={UserChat} />
    </Drawer.Navigator>
  );
}

export function UserDrawerNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userDrawer"
        component={UserDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detailsScreen"
        component={UserMedicineDetails}
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: Colors.primaryUser100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 34 },
          headerTitle: "تفاصيل الدواء",
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
