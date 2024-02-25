import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileSection = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on userId
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://your-api-url.com/users/${userId}`);
       // setUser(response.data); 
       //maybe next time
          setUser({
    userId: userId,
    profilePicture: 'https://example.com/profile-picture.jpg',
    username: `user_${userId}`,
    name: `User ${userId}`,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    birthday: '1990-01-01',
    dateJoined: '2022-01-01',
    email: `user${userId}@example.com`,
    phone: '123-456-7890',
    lastSeen: '2024-02-26T12:30:00Z', // Use the current timestamp for realism
  });
        
      } catch (error) {
        console.error('Error fetching user data:', error);
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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
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

      <div>
        <button onClick={handleBlock}>Block</button>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleReport}>Report</button>
      </div>
    </div>
  );
};

export default ProfileSection;
