import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initDatabase } from "./sqlite/sqlite";
import { useEffect } from "react";
import { db } from "./sqlite/sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigtor } from "./Navigator";

export default function App() {
  useEffect(() => {
    initDatabase(db);
  }, []);
  return (
    <NavigationContainer>
      <StackNavigtor />
    </NavigationContainer>
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
