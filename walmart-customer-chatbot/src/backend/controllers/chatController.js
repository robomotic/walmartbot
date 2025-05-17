class ChatController {
    constructor(botService) {
        this.botService = botService;
    }

    async handleUserMessage(req, res) {
        const userMessage = req.body.message;

        try {
            const botResponse = await this.botService.getResponse(userMessage);
            res.status(200).json({ response: botResponse });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while processing your message.' });
        }
    }
}

export default ChatController;