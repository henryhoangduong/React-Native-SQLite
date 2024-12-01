import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { Note } from "../types/note";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const create = async (
    db: SQLite.SQLiteDatabase,
    title: string,
    note: string,
  ) => {
    await db.runAsync(
      `INSERT INTO notes (title, note) VALUES (?,?);`,
      title,
      note,
    );
    await read(db);
  };
  const read = async (db: SQLite.SQLiteDatabase) => {
    const res: Note[] = await db.getAllAsync("SELECT * FROM notes;");
    setNotes(res);
  };
  const update = async (
    db: SQLite.SQLiteDatabase,
    id: number,
    newTitle: string,
    newNote: string,
  ) => {};
  const delete_ = async (db: SQLite.SQLiteDatabase, id: number) => {
    await db.runAsync(`DELETE FROM notes where id=$id;`, id);
    await read(db);
  };
  return {
    notes,
    create,
    read,
    update,
    delete_,
  };
};
