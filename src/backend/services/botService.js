const responses = require('../../data/responses.json');

class BotService {
    constructor() {
        this.defaultResponses = responses.default;
    }

    getResponse(userInput) {
        // Simple keyword-based response generation
        const response = this.defaultResponses.find(resp => 
            userInput.toLowerCase().includes(resp.keyword.toLowerCase())
        );

        return response ? response.reply : "I'm sorry, I didn't understand that.";
    }
}

module.exports = new BotService();