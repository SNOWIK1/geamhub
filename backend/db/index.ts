import Database from "better-sqlite3";
import "dotenv/config.js"

const db = new Database(process.env.DB_PATH, {
  verbose: (msg) => console.log(msg),
});

db.pragma("journal_mode = WAL");

db.prepare("DROP TABLE IF EXISTS products").run()
db.prepare("DROP TABLE IF EXISTS users").run();

db.prepare(`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    isPrivate INTEGER NOT NULL,
    isDiscussion INTEGER NOT NULL,
    mainChannel INTEGER,
    targetAudience INTEGER NOT NULL,
    lang VARCHAR(50) NOT NULL,
    numberOfUsers INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    contentType VARCHAR (50),
    createdAt INTEGER NOT NULL
);
`).run()

db.prepare(
  `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(250) NOT NULL,
    balance REAL NOT NULL
);
`
).run();

export default db;
