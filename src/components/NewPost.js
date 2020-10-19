import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { createPost } from "../actions";

const NewPost = () => {
  const dispatch = useDispatch();
  const createNewPost = (postId, data) => dispatch(createPost(postId, data));

  return <Form submitFunc={createNewPost} />;
};

export default NewPost;
