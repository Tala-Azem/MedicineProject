import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext, MedicinesContextProvider } from "../store";
import { AuthNavigator } from "./auth";
import { PharmacyMainNavigator, UserMainNavigator } from "./main";
export function AppNavigator() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isPharmacyAuthenticated && !authCtx.isUserAuthenticated && (
        <AuthNavigator />
      )}
      {authCtx.isPharmacyAuthenticated && !authCtx.isUserAuthenticated && (
        <PharmacyMainNavigator />
      )}
      {authCtx.isUserAuthenticated && !authCtx.PharmacyMainNavigator && (
        <MedicinesContextProvider>
          <UserMainNavigator />
        </MedicinesContextProvider>
      )}
    </NavigationContainer>
  );
}
