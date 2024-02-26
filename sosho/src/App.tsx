// App.tsx
//import './App.css'
import React from 'react';
import ChatMessages from './sections/chat/ChatMessages';

const App: React.FC = () => {
  // Sample chat data (replace with your actual data)
  const sampleChatData = [
    {
      users: ['John Doe', 'Jane Doe'],
      messages: [
        {
          text: 'Hello!',
          time: '8:30 AM',
          sender: 'John Doe',
        },
        {
          text: 'Hi there, how are you?',
          time: '8:31 AM',
          sender: 'Jane Doe',
        },
      ],
    },
    {
      users: ['Alice', 'Bob'],
      messages: [
        {
          text: 'Hey Bob, whats going on?',
          time: '11:00 AM',
          sender: 'Alice',
        },
        {
          text: 'Not much, just catching up on some work. What about you?',
          time: '11:01 AM',
          sender: 'Bob',
        },
      ],
    },
  ];

  return (
    <div className="app">
      <h1>Chat Application</h1>
      <ChatMessages data={sampleChatData} />
    </div>
  );
};

export default App;
