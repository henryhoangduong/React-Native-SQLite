import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

export const db = SQLite.openDatabaseSync("todos.db");

const deleteDatabase = async () => {
  const dbPath = FileSystem.documentDirectory + "SQLite/todos.db";

  try {
    // Check if the file exists before attempting to delete
    const fileInfo = await FileSystem.getInfoAsync(dbPath);

    if (fileInfo.exists) {
      // If the database exists, delete it
      await FileSystem.deleteAsync(dbPath);
      console.log("Database 'todos.db' has been deleted.");
    } else {
      console.log("Database 'todos.db' does not exist.");
    }
  } catch (error) {
    console.error("Error deleting the database:", error);
  }
};

export const initDatabase = async (db: SQLite.SQLiteDatabase) => {
  // deleteDatabase();
  await db.runAsync(
    "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, note TEXT);",
  );
  await db.runAsync(
    "CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, font_size INTEGER, mode TEXT);",
  );
  // await db.runAsync(
  //   `INSERT INTO settings (font_size, mode) VALUES (?,?);`,
  //   16,
  //   "LIGHT",
  // );
};
