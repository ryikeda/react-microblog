import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../actions";
import Form from "./Form";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts[id]);

  const getFormData = (data) => dispatch(editPost(id, data));

  return <Form post={post} submitFunc={getFormData} />;
};

export default EditForm;
