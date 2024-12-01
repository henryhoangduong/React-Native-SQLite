import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SettingScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
