import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  profilePicture: string;
  username: string;
  name: string;
  bio: string;
  birthday: string;
  dateJoined: string;
  email: string;
  phone: string;
  lastSeen: string;
}

const ProfileSection = ({ userId }: { userId: string }) => {
  // Define the initial state with a default User object
  const [user, setUser] = useState<User>({
    profilePicture: 'https://example.com/profile-picture.jpg',
    username: 'user_1',
    name: 'User 1',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    birthday: '1990-01-01',
    dateJoined: '2022-01-01',
    email: 'use1@example.com',
    phone: '123-456-7890',
    lastSeen: '2024-02-26T12:30:00Z', // Use the current timestamp for realism
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://your-api-url.com/users/${userId}`);
        setUser(response.data); // Set user state with actual data
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Consider additional error handling or fallback behavior here
      }
    };

    fetchUserData();
  }, [userId]);

  const handleBlock = () => {
    // Implement block functionality
    console.log('User blocked');
  };

  const handleLike = () => {
    // Implement like functionality
    console.log('User liked');
  };

  const handleReport = () => {
    // Implement report functionality
    console.log('User reported');
  };

  return (
    <div>
      {/* Conditionally render loading message or user information */}
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={user.profilePicture} alt="Profile" />
          <h1>{user.username}</h1>
          <p>Name: {user.name}</p>
          <p>Bio: {user.bio}</p>
          <p>Birthday: {user.birthday}</p>
          <p>Date Joined: {user.dateJoined}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Last Seen: {user.lastSeen}</p>
        </div>
      )}
      <button onClick={handleBlock}>Block User</button>
      <button onClick={handleLike}>Like User</button>
      <button onClick={handleReport}>Report User</button>
    </div>
  );
};

export default ProfileSection;
