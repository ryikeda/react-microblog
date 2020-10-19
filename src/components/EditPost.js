import React from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

const EditForm = ({ posts, editPost }) => {
  const { id } = useParams();
  const [post] = posts.filter((post) => post.postId === id);

  return <Form post={post} submitFunc={editPost} />;
};

export default EditForm;
