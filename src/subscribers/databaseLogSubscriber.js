const db = require("../db")

const databaseLogSubscriber = (data) => {
	const { name, createdAt } = data

	db.run(
		`INSERT INTO resources (name, createdAt) VALUES (?, ?)`,
		[name, createdAt],
		function (err) {
			if (err) {
				console.error("Error saving to database:", err.message)
			} else {
				console.log(`Resource saved to database with ID: ${this.lastID}`)
			}
		}
	)
}

module.exports = databaseLogSubscriber
