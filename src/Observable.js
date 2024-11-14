class Observable {
	constructor() {
		this.subscribers = []
	}

	// Method to add a subscriber
	subscribe(fn) {}

	// Method to add a subscriber
	unsubscribe(fn) {}

	// Method to notify all subscribers
	notify(data) {}
}

module.exports = Observable
