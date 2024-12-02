import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Entypo from "@expo/vector-icons/Entypo";
import { useNotes } from "../services/useNote";
import { db } from "../sqlite/sqlite";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useSetting } from "../context/SettingContext";

const AddNoteScreen = () => {
  const { mode, fontSize, changeFontSize, switchTheme } = useSetting();
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
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ],
        { cancelable: false },
      );
      return;
    }
    create(db, note.title, note.note);
    nav.navigate("Home" as never);
  };
  return (
    <View
      style={[
        styles.root,
        { backgroundColor: mode === "DARK" ? "black" : "white" },
      ]}
    >
      <TextInput
        onChangeText={(value) => {
          handleChangeText("title", value);
        }}
        style={[
          styles.input,
          {
            color: mode === "DARK" ? "white" : "black",
            borderColor: mode === "DARK" ? "white" : "black",
          },
        ]}
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[
          styles.input,
          {
            height: 100,
            color: mode === "DARK" ? "white" : "black",
            borderColor: mode === "DARK" ? "white" : "black",
          },
        ]}
        onChangeText={(value) => {
          handleChangeText("note", value);
        }}
      />
      <View style={[styles.btnContainer]}>
        <TouchableOpacity
          onPress={handleSave}
          style={[
            styles.btn,
            { backgroundColor: mode === "DARK" ? "white" : "black" },
          ]}
        >
          <Entypo
            name="check"
            size={24}
            color={mode === "DARK" ? "black" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Home" as never);
          }}
          style={[
            styles.btn,
            { backgroundColor: mode === "DARK" ? "white" : "black" },
          ]}
        >
          <Entypo
            name="cross"
            size={24}
            color={mode === "DARK" ? "black" : "white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  root: {
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
