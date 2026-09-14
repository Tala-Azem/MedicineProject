import { StyleSheet } from "react-native";
import { DrawerContent } from "../../components";
import {
  PharmacyChat,
  PharmacyHome,
  PharmacyProfile,
  PharmacySocial,
} from "../../screens";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../../constants";
const Drawer = createDrawerNavigator();

export function PharmacyDrawerNavigator({ navigation, route }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerActiveBackgroundColor: Colors.primaryPharmacy100,
        drawerActiveTintColor: "white",
        // headerRight: ({ tintColor }) => (
        //   <IconButton
        //     icon="questioncircle"
        //     size={24}
        //     color={tintColor}
        //     onPress={() => {
        //       navigation.navigate("pharmacyHelpScreen");
        //     }}
        //   />
        // ),
      })}
    >
      <Drawer.Screen name="الصفحة الرئيسية" component={PharmacyHome} />
      <Drawer.Screen name="الصفحة الشخصية" component={PharmacyProfile} />
      <Drawer.Screen name="تواصل معنا" component={PharmacySocial} />
      <Drawer.Screen name="المحادثات" component={PharmacyChat} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  help: {
    width: 50,
    height: 50,
  },
});
