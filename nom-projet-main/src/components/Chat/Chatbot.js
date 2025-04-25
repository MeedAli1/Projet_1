import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const ChatBubble = ({ sender, message, onClick }) => {
  return (
    <div className={`chat-bubble ${sender}`} onClick={onClick}>
      {message}
    </div>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', message: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      const newMessage = { sender: 'user', message: userMessage };
      setMessages(prev => [...prev, newMessage]);
      const userInput = userMessage;
      setUserMessage('');

      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', message: `Vous avez dit : ${userInput}` }]);
      }, 1000);
    }
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleBubbleClick = (index) => {
    if (lastClickedIndex === index) {
      // حذف الرسالة إذا تم الضغط عليها مرتين
      setMessages(prev => prev.filter((_, i) => i !== index));
      setLastClickedIndex(null);
    } else {
      // إدخال محتوى الرسالة في input
      setUserMessage(messages[index].message);
      setLastClickedIndex(index);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false); // إغلاق الشات
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <button className={`chat-button ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isOpen ? '×' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <ChatBubble
                key={index}
                sender={msg.sender}
                message={msg.message}
                onClick={() => handleBubbleClick(index)}
              />
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Écrivez votre message..."
            />
            <button onClick={handleSendMessage}>Envoyer</button>
          </div>
          {/* زر "Fermer" بلون أحمر وبنفس الشكل */}
          <button className="close-chat-button" onClick={handleCloseChat}>
            Fermer
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
