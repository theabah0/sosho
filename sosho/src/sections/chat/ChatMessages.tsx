import React from 'react';

interface Message {
  text: string;
  time: string;
  sender: string;
}

interface ChatData {
  users: string[];
  messages: Message[];
}

interface ChatMessagesProps {
  data: ChatData[]; // Define the prop type
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ data }) => {
  return (
    <div className="chat-messages">
      {/* Top header with a link to chat details */}
      <div className="chat-header">
        <a href="/chat/detail/{id}">Chat Details</a>
      </div>

      {/* Render messages for each chat */}
      {data.map((chat, index) => (
        <div key={index} className="chat-group">
          {/* Display user names */}
          <div className="chat-users">
            {chat.users.join(' and ')}
          </div>

          {/* Render individual messages */}
          <ul className="message-list">
            {chat.messages.map((message, messageIndex) => (
              <li key={messageIndex} className={`message ${message.sender}`}>
                <span className="message-text">{message.text}</span>
                <span className="message-time">{message.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
