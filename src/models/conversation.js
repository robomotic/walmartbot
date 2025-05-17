class Conversation {
    constructor() {
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }

    clearMessages() {
        this.messages = [];
    }
}

export default Conversation;