import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";

import SAMPLE_DATA from "./sampleDataRedux";

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

  const addComment = (postId, comment) => {
    const idx = posts.findIndex((post) => post.postId === postId);
    setPosts((posts) => {
      posts[idx].comments = [...posts[idx].comments, comment];
      return posts;
    });
  };

  const deleteComment = (postId, commentId) => {
    const idx = posts.findIndex((post) => post.postId === postId);
    setPosts((posts) => {
      posts[idx].comments = [...posts[idx].comments].filter(
        (comment) => comment.id !== commentId
      );
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
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </>
  );
}

export default App;
