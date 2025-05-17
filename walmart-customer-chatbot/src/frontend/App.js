import React from 'react';
import ChatInterface from './components/ChatInterface';
import './styles/main.css';

function App() {
    return (
        <div className="App">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                alt="Walmart Logo"
                style={{ width: '180px', marginBottom: '16px' }}
            />
            <h1>Walmart Customer Chatbot</h1>
            <ChatInterface />
        </div>
    );
}

export default App;