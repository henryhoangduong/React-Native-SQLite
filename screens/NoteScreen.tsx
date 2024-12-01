import { ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NoteItem from "../components/NoteItem";
import { FlatList } from "react-native";
import { db } from "../sqlite/sqlite";
import { useNotes } from "../services/useNote";
import { Note } from "../types/note";
const NoteScreen = () => {
  const nav = useNavigation();
  const { notes, read } = useNotes();
  useEffect(() => {
    read(db);
  }, [notes]);
  const renderItem: ListRenderItem<Note> = ({ item: note }) => {
    return <NoteItem note={note} />;
  };
  return (
    <View style={[styles.root]}>
      <Text style={[styles.title]}>Note app</Text>
      <View style={[styles.addNoteContainer]}>
        <Text style={[{ fontWeight: "bold", color: "gray", fontSize: 18 }]}>
          All notes
        </Text>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Addnote" as never);
          }}
        >
          <AntDesign name="pluscircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(todo) => todo.id.toString()}
        ListEmptyComponent={<Text>No notes...</Text>}
      />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingTop: 60,
    gap: 20,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
  },
  addNoteContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
