import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Note } from "../types/note";
import { useNotes } from "../services/useNote";
import { db } from "../sqlite/sqlite";
import { NavigationProp } from "@react-navigation/native";
import { useSetting } from "../context/SettingContext";
type NoteItemProps = {
  note: Note;
};

const NoteItem = ({ note }: NoteItemProps) => {
  const nav = useNavigation<NavigationProp<any>>();
  const { mode, fontSize, changeFontSize, switchTheme } = useSetting();

  const { delete_ } = useNotes();
  const handleDelete = async () => {
    await delete_(db, note.id);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("EditNote", {
          title: note.title,
          id: note.id,
          note: note.note,
        });
      }}
      style={[
        styles.root,
        { borderColor: mode === "DARK" ? "white" : "black" },
      ]}
    >
      <View style={[styles.noteContainer]}>
        <Text
          style={[styles.title, { color: mode === "DARK" ? "white" : "black" }]}
        >
          {note.title}
        </Text>
        <Text
          style={[styles.note, { color: mode === "DARK" ? "white" : "black" }]}
        >
          {note.note}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <FontAwesome
          name="trash-o"
          size={24}
          color={mode === "DARK" ? "white" : "black"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  noteContainer: {
    display: "flex",
    alignItems: "flex-start",
    width: "50%",
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  note: {
    fontSize: 16,
  },
});
