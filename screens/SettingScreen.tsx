import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";

const SettingScreen = () => {
  const [fontSize, setFontSize] = useState(0);
  const handleChangeText = (value: number) => {
    setFontSize(Math.ceil(value));
  };
  return (
    <View style={[styles.root]}>
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Dark mode</Text>
        <Switch
          trackColor={{ true: "#18FF1D" }}
          ios_backgroundColor="#7d7a7a"
          onValueChange={() => {}}
          value={false}
        />
      </View>
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Font Size</Text>
        <Text style={[styles.title]}>{fontSize}</Text>
      </View>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={48}
        minimumTrackTintColor="black"
        maximumTrackTintColor="grey"
        onValueChange={(value) => {
          handleChangeText(value);
        }}
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
    backgroundColor: "white",
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
