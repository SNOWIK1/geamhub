import Database from "better-sqlite3";
import "dotenv/config.js"

const db = new Database(process.env.DB_PATH, {
  verbose: (msg) => console.log(msg),
});

db.pragma("journal_mode = WAL");
db.prepare(`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(50)
)
`)

export default db;
