import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { useSetting } from "../context/SettingContext";
const SettingScreen = () => {
  const { mode, fontSize, changeFontSize, switchTheme } = useSetting();
  console.log(mode);
  const handleChangeText = (value: number) => {
    changeFontSize(Math.ceil(value));
  };
  return (
    <View
      style={[
        styles.root,
        { backgroundColor: mode === "DARK" ? "black" : "white" },
      ]}
    >
      <View style={[styles.container]}>
        <Text
          style={[
            styles.title,
            { color: mode === "DARK" ? "white" : "black", fontSize: fontSize },
          ]}
        >
          Dark mode
        </Text>
        <Switch
          trackColor={{ true: "#18FF1D" }}
          ios_backgroundColor="#7d7a7a"
          onValueChange={switchTheme}
          value={mode === "LIGHT" ? false : true}
        />
      </View>
      <View style={[styles.container]}>
        <Text
          style={[
            styles.title,
            { color: mode === "DARK" ? "white" : "black", fontSize: fontSize },
          ]}
        >
          Font Size
        </Text>
        <Text
          style={[styles.title, { color: mode === "DARK" ? "white" : "black" }]}
        >
          {fontSize}
        </Text>
      </View>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={48}
        minimumTrackTintColor={mode === "DARK" ? "white" : "black"}
        maximumTrackTintColor="grey"
        onValueChange={(value) => {
          handleChangeText(value);
        }}
        value={fontSize}
      />
      ;
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
});
