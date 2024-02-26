import React, { useState, useEffect } from 'react';

interface Chat {
  id: number;
  name: string;
  participants: string[];
  lastMessage: string | null;
  lastMessageTime: number | null; // Assuming timestamp in milliseconds
}

function ChatSection {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate fetching data from the server (replace with actual API call)
  useEffect(() => {
    setIsLoading(true);

    const fakeChats: Chat[] = [
      {
        id: 1,
        name: 'Chat 1',
        participants: ['John Doe', 'Jane Doe'],
        lastMessage: 'Hello!',
        lastMessageTime: Date.now() - 1000 * 60 * 5, // 5 minutes ago
      },
      {
        id: 2,
        name: 'Chat 2',
        participants: ['Alice Smith', 'Bob Smith'],
        lastMessage: 'Just checking in.',
        lastMessageTime: Date.now(), // Just now
      },
      // ... more chats
    ];

    setTimeout(() => {
      setChats(fakeChats);
      setIsLoading(false);
    }, 1000); // Simulate network delay for testing
  }, []);

  useEffect(() => {
    if (error) {
      alert('Error fetching chats: ' + error.message);
      setError(null); // Reset error state after showing alert
    }
  }, [error]);

  return (
    <div>
      <h2>Chat List</h2>
      {isLoading ? (
        <p>Loading chats...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {chats.map((chat) => (
            <li key={chat.id}>
              <a href={`chat/${chat.id}`}>
                <div className="chat-item">
                  <div className="chat-name">{chat.name}</div>
                  <div className="chat-participants">{chat.participants.join(', ')}</div>
                  {/* Display last message and time only if present */}
                  {chat.lastMessage && (
                    <div className="chat-info">
                      <span className="chat-message">{chat.lastMessage}</span>
                      <span className="chat-time">
                        {new Date(chat.lastMessageTime).toLocaleTimeString()}
                      </span>
                    </div>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChatSection;
