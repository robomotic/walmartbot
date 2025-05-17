const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    intent: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;