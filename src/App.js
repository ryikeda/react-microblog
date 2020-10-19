import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";

import SAMPLE_DATA from "./sampleData";

function App() {
  const [posts, setPosts] = useState(SAMPLE_DATA);

  const createPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  const editPost = (editData) => {
    const idx = posts.findIndex((post) => post.postId === editData.postId);
    setPosts((posts) => {
      posts[idx] = editData;
      return posts;
    });
  };

  const deletePost = (id) => {
    const idx = posts.findIndex((post) => post.postId === id);
    setPosts((posts) => {
      posts.splice(idx, 1);
      return posts;
    });
  };

  return (
    <>
      <Header />
      <Routes
        posts={posts}
        createPost={createPost}
        editPost={editPost}
        deletePost={deletePost}
      />
    </>
  );
}

export default App;
