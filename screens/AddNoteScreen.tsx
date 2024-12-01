import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Entypo from "@expo/vector-icons/Entypo";
import { useNotes } from "../services/useNote";
import { db } from "../sqlite/sqlite";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const AddNoteScreen = () => {
  const [note, setNote] = useState({ title: "", note: "" });
  const nav = useNavigation();

  const { create } = useNotes();
  const handleChangeText = (name: string, value: string) => {
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSave = () => {
    if (note.title.trim().length === 0) {
      Alert.alert(
        "Title Missing",
        "Please enter a title for your note.",
        [
          {
            text: "OK", // Button text
            onPress: () => console.log("OK Pressed"), // Action when "OK" is pressed
          },
        ],
        { cancelable: false }, // Disallow dismissing the alert by tapping outside
      );
      return; // Don't continue if the title is missing
    }
    create(db, note.title, note.note);
    nav.navigate("Home" as never);
  };
  return (
    <View style={[styles.root]}>
      <TextInput
        onChangeText={(value) => {
          handleChangeText("title", value);
        }}
        style={[styles.input]}
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, { height: 100 }]}
        onChangeText={(value) => {
          handleChangeText("note", value);
        }}
      />
      <View style={[styles.btnContainer]}>
        <TouchableOpacity onPress={handleSave} style={[styles.btn]}>
          <Entypo name="check" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Home" as never);
          }}
          style={[styles.btn]}
        >
          <Entypo name="cross" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 25,
  },
});