import React from 'react';
import MessageBubble from './MessageBubble';
import UserInput from './UserInput';

const ChatInterface = () => {
    const [messages, setMessages] = React.useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, sender: 'user' }]);
        // Logic to send message to the bot and receive a response can be added here
    };

    return (
        <div className="chat-interface">
            <div className="message-list">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} message={msg} />
                ))}
            </div>
            <UserInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;