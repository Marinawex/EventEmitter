class EventEmmiter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, handler) {
        if (this.events[eventName]) {
            this.events[eventName].push;
            handler;
        }
        else {
            this.events[eventName] = [handler];
        }
    }
    emit(eventName, ...rest) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(ev => {
                ev.apply(null, rest);
            });
        }
    }
    unsubscribe(eventName, handlerToRemove) {
        return this.events[eventName] = this.events[eventName].filter(handler => handler !== handlerToRemove);
    }
}
const EventEmitter = new EventEmmiter;
function logKeydown(event) {
    console.log('keyboard pressed: ', event.key);
}
function alertKeydown(event) {
    alert('keyboard pressed: ' + event.key);
}
const logKeydownSubscription = EventEmitter.subscribe('keydown', logKeydown);
const alertKeydownSubscription = EventEmitter.subscribe('keydown', logKeydown);
EventEmitter.emit('keydown', { key: 'Enter' });
