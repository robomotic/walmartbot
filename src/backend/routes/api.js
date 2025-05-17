const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Endpoint for sending a message to the chatbot
router.post('/message', chatController.sendMessage);

// Endpoint for getting the conversation history
router.get('/history', chatController.getConversationHistory);

module.exports = router;