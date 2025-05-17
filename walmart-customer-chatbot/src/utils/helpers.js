const helpers = {
    formatMessage: (message) => {
        return message.trim().replace(/\s+/g, ' ');
    },

    isValidMessage: (message) => {
        return typeof message === 'string' && message.length > 0;
    },

    generateResponseId: () => {
        return `response_${Date.now()}`;
    },

    // Add more helper functions as needed
};

export default helpers;