import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileSection = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on userId
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://your-api-url.com/users/${userId}`);
        setUser(response.data);
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
