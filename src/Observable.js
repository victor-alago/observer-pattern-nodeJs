class Observable {
	constructor() {
		this.subscribers = []
	}

	// Method to add a subscriber
	subscribe(fn) {
		this.subscribers.push(fn)
	}

	// Method to add a subscriber
	unsubscribe(fn) {
		this.subscribers = this.subscribe.filter((item) => item != fn)
	}

	// Method to notify all subscribers
	notify(data) {
		this.subscribers.forEach((fn) => fn(data))
	}
}

module.exports = Observable
