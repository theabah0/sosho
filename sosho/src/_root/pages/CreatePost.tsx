import React, { useState } from 'react';

const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handlePostContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFiles = Array.from(event.target.files);
      setImages([...images, ...imageFiles]);
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const videoFiles = Array.from(event.target.files);
      setVideos([...videos, ...videoFiles]);
    }
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tag = event.target.value;
    setTags([...tags, tag]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle posting logic here
    console.log('Submitted post content:', postContent);
    console.log('Uploaded images:', images);
    console.log('Uploaded videos:', videos);
    console.log('Tags:', tags);
    // Optionally, reset state to clear input fields after submission
    setPostContent('');
    setImages([]);
    setVideos([]);
    setTags([]);
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={handlePostContentChange}
          placeholder="What's on your mind?"
          rows={4}
          cols={50}
        />
        <br />
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
        <input type="file" accept="video/*" multiple onChange={handleVideoChange} />
        <br />
        <input type="text" placeholder="Add tags (optional)" onChange={handleTagChange} />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
