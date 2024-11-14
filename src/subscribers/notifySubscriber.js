const notifySubscriber = (data) => {
	console.log(`Notification sent: New data received - ${JSON.stringify(data)}`)
}

module.exports = notifySubscriber
