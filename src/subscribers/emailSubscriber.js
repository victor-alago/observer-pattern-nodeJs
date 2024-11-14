const emailSubscriber = (data) => {
	console.log(
		`Email sent: A new resource was created with details - ${JSON.stringify(
			data
		)}`
	)
}

module.exports = emailSubscriber
