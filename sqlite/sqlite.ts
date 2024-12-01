import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("todos.db");
export const initDatabase = (db: SQLite.SQLiteDatabase) => {
  db.runAsync(
    "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, note TEXT);",
  );
};
