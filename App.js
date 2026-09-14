import { StatusBar } from "expo-status-bar";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppNavigator } from "./navigators";
import { AuthContext, AuthContextProvider } from "./store";

import { useContext, useEffect } from "react";

function RootNavigator() {
  // const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedType = await AsyncStorage.getItem("type");
      const storedClient = await AsyncStorage.getItem("client");
      if (storedToken && storedType && storedClient) {
        authCtx.authenticate(storedToken, storedType, JSON.parse(storedClient));
      }
    }
    fetchToken();
  }, []);

  return <AppNavigator />;
}

function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
    </>
  );
}
export default App;
