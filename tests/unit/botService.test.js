const botService = require('../../src/backend/services/botService');

describe('Bot Service', () => {
    it('should return a valid response for a known user input', () => {
        const userInput = 'Hello';
        const expectedResponse = 'Hi there! How can I assist you today?';
        const response = botService.getResponse(userInput);
        expect(response).toBe(expectedResponse);
    });

    it('should return a default response for unknown user input', () => {
        const userInput = 'Unknown input';
        const expectedResponse = 'I am sorry, I did not understand that.';
        const response = botService.getResponse(userInput);
        expect(response).toBe(expectedResponse);
    });

    // Add more tests as needed to cover different scenarios
});