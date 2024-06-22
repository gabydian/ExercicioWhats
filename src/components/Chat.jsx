import React from 'react';
 import '../styles.css'; // Importa o CSS específico para este componente
import Message from './Message';

const Chat = () => {
  const messages = [
    { text: 'Hello, how are you?', type: 'received', seen: false },
    { text: 'I\'m fine, thank you!', type: 'sent', seen: true }
  ];

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} type={msg.type} seen={msg.seen} />
      ))}
    </div>
  );
};

export default Chat;
