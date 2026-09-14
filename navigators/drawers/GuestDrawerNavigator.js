import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, Pressable, StyleSheet } from "react-native";
import { DrawerContent } from "../../components";
import { Colors } from "../../constants";
import { UserHome, UserSearch } from "../../screens";
const Drawer = createDrawerNavigator();

export function GuestDrawerNavigator({ navigation, route }) {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: Colors.primaryUser100,
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="userHomeScreen"
        component={UserHome}
        options={{
          headerStyle: {
            backgroundColor: "#004AAD",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("تعليمات")}>
              <Image
                source={require("../../assets/help1.png")}
                style={styles.help}
              />
            </Pressable>
          ),
        }}
      />

      <Drawer.Screen
        name="البحث "
        component={UserSearch}
        options={{
          headerStyle: {
            backgroundColor: "#004AAD",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("تعليمات")}>
              <Image
                source={require("../../assets/help1.png")}
                style={styles.help}
              />
            </Pressable>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  help: {
    width: 50,
    height: 50,
  },
});
