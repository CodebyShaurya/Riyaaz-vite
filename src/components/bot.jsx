import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Start the conversation with a welcome message
      setMessages([{ text: 'Hi! How can I help you with music today?', fromUser: false }]);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (messageText) => {
    setMessages([...messages, { text: messageText, fromUser: true }]);
    // Here you would handle sending the message to your backend or chatbot service
    // and receive a response
    // For demo purposes, let's just simulate a response after a short delay
    setTimeout(() => {
      setMessages([...messages, { text: 'I am just a demo bot. I cannot respond to your message right now.', fromUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      {!isOpen && (
        <button
          className="h-20 w-20 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow"
          onClick={toggleChat}
        >
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-music-1767802-1502382.png"/>
        </button>
      )}
      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
            <p className="font-semibold">Music Bot</p>
            <button onClick={handleClose}>
              <svg
                className="h-4 w-4 fill-current text-gray-600 hover:text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 h-40 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.fromUser ? 'text-right' : 'text-left'}`}>
                <p className={`p-2 rounded-lg ${message.fromUser ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
