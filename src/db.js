const sqlite3 = require("sqlite3").verbose();

// Create or open the database
const db = new sqlite3.Database("database.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");

        // Create the resources table if it doesn't exist
        db.run(
            `CREATE TABLE IF NOT EXISTS resources (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                createdAt TEXT
            )`,
            (err) => {
                if (err) {
                    console.error("Error creating table:", err.message);
                } else {
                    console.log("Table 'resources' is ready.");
                }
            }
        );
    }
});

module.exports = db;