import React from "react";
import Form from "./Form";

const NewPost = ({ createPost }) => {
  return <Form submitFunc={createPost} />;
};

export default NewPost;
