import React, { useState, useEffect } from 'react';

interface Chat {
  id: number;
  name: string;
  img: string;
  participants: string[];
  lastMessage: string | null;
  lastMessageTime: number | null; // Assuming timestamp in milliseconds
}

const ChatSection = () => {
  // Use separate states for loading and error
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Simulate fetching data from the server (replace with actual API call)
  useEffect(() => {
    setIsLoading(true);

    const fakeChats: Chat[] = [
      {  
        id: 1,
        name: 'family group',
        img:"jjk.co",
        participants: ['John Doe', 'Jane Doe'],
        lastMessage: 'Hello!',
        lastMessageTime: Date.now() - 1000 * 60 * 5, // 5 minutes ago
      },
      {
        id: 2,
        name: 'school group',
        
        img:"jjk.co",
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

  // Only show the error message if it's an actual Error object
  useEffect(() => {
    if (error) {
      // Use a type guard to ensure error is of type Error
      if (error instanceof Error) {
        alert('Error fetching chats: ' + error.message);
      } else {
        console.error('Unexpected error type:', error);
      }
      setError(null); // Reset error state after handling
    }
  }, [error]);

  return (
    <div>
      <h2>Chat List</h2>
      {isLoading ? (
        <p>Loading chats...</p>
      ) : error ? (
        <p>Error: {/* Handle error message here */}</p>
      ) : (
        <ul>
          {chats.map((chat) => (
            <li key={chat.id}>
              <a href={`chat/${chat.id}`}>
                <div className="chat-item">
                <img src={chat.img} />
                  <div className="chat-name">{chat.name}</div>
                  <div className="chat-participants">{chat.participants.join(', ')}</div>
                  {/* Display last message and time only if present */}
                  {chat.lastMessage && (
                    <div className="chat-info">
                       
                      <span className="chat-message">{chat.lastMessage}</span>
                      <span className="chat-time">
                        {/* Safe handling of null values with optional chaining and default */}
                        {new Date(String(chat.lastMessageTime)?.valueOf())?.toLocaleTimeString() || 'Unknown'}
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
};

export default ChatSection;
