import { StyleSheet } from "react-native";
import { initDatabase } from "./sqlite/sqlite";
import { useEffect } from "react";
import { db } from "./sqlite/sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigtor } from "./Navigator";
import { SettingContextProvider } from "./context/SettingContext";

export default function App() {
  useEffect(() => {
    initDatabase(db);
  }, []);
  return (
    <SettingContextProvider>
      <NavigationContainer>
        <StackNavigtor />
      </NavigationContainer>
    </SettingContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
