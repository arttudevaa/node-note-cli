import fs from "node:fs/promises";
let DB_PATH = new URL("../db.json", import.meta.url).pathname;
if (process.platform === "win32") {
  DB_PATH = DB_PATH.slice(1); // removes the initial backslash on windows
}

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 4));
  return db;
};

export const insert = async (note) => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
