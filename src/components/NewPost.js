import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { createPostAPI } from "../actions";
import { useHistory } from "react-router-dom";

const NewPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const createNewPost = (data) => {
    dispatch(createPostAPI(data));
    history.push("/");
  };

  return <Form submitFunc={createNewPost} />;
};

export default NewPost;
