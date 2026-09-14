import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { AuthContext } from "../store";

export function DrawerContent(props) {
  const authCtx = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="تسجيل خروج" onPress={() => authCtx.logout()} />
    </DrawerContentScrollView>
  );
}
