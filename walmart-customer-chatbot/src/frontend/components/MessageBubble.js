import React from 'react';
import PropTypes from 'prop-types';
import './MessageBubble.css';

const MessageBubble = ({ message, isUser }) => {
    return (
        <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
            <p>{message}</p>
        </div>
    );
};

MessageBubble.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
};

export default MessageBubble;