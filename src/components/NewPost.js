import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { createPostAPI } from "../actions";

const NewPost = () => {
  const dispatch = useDispatch();
  const createNewPost = (data) => dispatch(createPostAPI(data));

  return <Form submitFunc={createNewPost} />;
};

export default NewPost;
