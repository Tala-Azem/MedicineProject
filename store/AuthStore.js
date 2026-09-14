import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  type: "",
  client: null,
  isUserAuthenticated: false,
  isPharmacyAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
  updateMedicines: () => {},
  updateName: () => {},
  updateEmail: () => {},
  updatePhone: () => {},
});

export function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [authClient, setAuthClient] = useState();
  const [clientType, setClientType] = useState();

  function authenticate(token, type, client) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
    setClientType(type);
    AsyncStorage.setItem("type", type);
    setAuthClient(client);
    AsyncStorage.setItem("client", JSON.stringify(client));
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
    setClientType(null);
    AsyncStorage.removeItem("type");
    setAuthClient(null);
    AsyncStorage.removeItem("client");
  }

  function updateMedicines(medicines) {
    const updatedClient = { ...authClient, medicines };
    setAuthClient(updatedClient);
    AsyncStorage.setItem("client", JSON.stringify(updatedClient));
  }

  function updateName(name) {
    const updatedClient = { ...authClient, name };
    setAuthClient(updatedClient);
    AsyncStorage.setItem("client", JSON.stringify(updatedClient));
  }

  function updateEmail(email) {
    const updatedClient = { ...authClient, email };
    setAuthClient(updatedClient);
    AsyncStorage.setItem("client", JSON.stringify(updatedClient));
  }

  function updatePhone(phone_number) {
    const updatedClient = { ...authClient, phone_number };
    setAuthClient(updatedClient);
    AsyncStorage.setItem("client", JSON.stringify(updatedClient));
  }

  const value = {
    token: authToken,
    type: clientType,
    client: authClient,
    isUserAuthenticated: !!authClient && !!authToken && clientType === "user",
    isPharmacyAuthenticated:
      !!authClient && !!authToken && clientType === "pharmacy",
    authenticate: authenticate,
    updateName: updateName,
    updateEmail: updateEmail,
    updatePhone: updatePhone,
    logout: logout,
    updateMedicines: updateMedicines,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
