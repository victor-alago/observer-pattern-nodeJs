class Observable {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
    }

    notify(data) {
		console.log("Notifying subscribers:", this.subscribers);
		this.subscribers.forEach((subscriber) => {
			try {
				subscriber(data);
			} catch (error) {
				console.error("Error in subscriber:", error.message);
			}
		});
	}

	
}

module.exports = Observable;