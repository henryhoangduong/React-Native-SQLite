import { StyleSheet, View } from "react-native";
import React from "react";
import { Note } from "../types/note";
import { useState } from "react";
import { TextInput } from "react-native";

const EditNoteScreen = ({ route }: any) => {
  const [note, setNote] = useState({
    title: route.params.title,
    note: route.params.note,
    id: route.params.id,
  });
  const handleChangeText = (name: string, value: string) => {
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <View style={[styles.root]}>
      <TextInput
        onChangeText={(value) => {
          handleChangeText("title", value);
        }}
        style={[styles.input]}
        value={note.title}
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, { height: 100 }]}
        onChangeText={(value) => {
          handleChangeText("note", value);
        }}
        value={note.note}
      />
    </View>
  );
};

export default EditNoteScreen;

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
});
