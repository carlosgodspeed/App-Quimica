import * as SQLite from 'expo-sqlite';

export type ExperimentNote = {
  id: number;
  title: string;
  objective: string;
  observations: string;
  conclusion: string;
  createdAt: string;
};

let databasePromise: Promise<SQLite.SQLiteDatabase> | undefined;

async function database() {
  databasePromise ??= SQLite.openDatabaseAsync('quimica-estudos.db');
  const db = await databasePromise;
  await db.execAsync('CREATE TABLE IF NOT EXISTS experiment_notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, objective TEXT NOT NULL, observations TEXT NOT NULL, conclusion TEXT NOT NULL, createdAt TEXT NOT NULL)');
  return db;
}

export async function getExperimentNotes() {
  const db = await database();
  return db.getAllAsync<ExperimentNote>('SELECT id, title, objective, observations, conclusion, createdAt FROM experiment_notes ORDER BY id DESC');
}

export async function addExperimentNote(note: Omit<ExperimentNote, 'id' | 'createdAt'>) {
  const db = await database();
  await db.runAsync('INSERT INTO experiment_notes (title, objective, observations, conclusion, createdAt) VALUES (?, ?, ?, ?, ?)', note.title, note.objective, note.observations, note.conclusion, new Date().toISOString());
}

export async function removeExperimentNote(id: number) {
  const db = await database();
  await db.runAsync('DELETE FROM experiment_notes WHERE id = ?', id);
}

