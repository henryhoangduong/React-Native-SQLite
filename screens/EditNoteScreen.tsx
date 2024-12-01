import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EditNoteScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>EditNoteScreen</Text>
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
