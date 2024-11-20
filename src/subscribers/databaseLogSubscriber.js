const db = require("../db");

const databaseLogSubscriber = (data) => {
    const { name, createdAt } = data;

    console.log("Attempting to insert into database:", data);

    db.run(
        `INSERT INTO resources (name, createdAt) VALUES (?, ?)`,
        [name, createdAt],
        (err) => {
            if (err) {
                console.error("Database error during INSERT:", err.message);
            } else {
                console.log("Data successfully inserted into database:", data);
            }
        }
    );
};

module.exports = databaseLogSubscriber;