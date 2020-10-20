import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPostAPI } from "../actions";
import Form from "./Form";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  /*
  Get posts from redux state,
  filter posts by id,
  map the necessary info to pass to form
  */
  const post = useSelector((state) =>
    state.posts
      .filter((post) => post.id === Number(id))
      .map((p) => {
        return {
          title: p.title,
          description: p.description,
          body: p.body,
        };
      })
  );

  const getFormData = (data) => {
    dispatch(editPostAPI(id, data));
    history.push(`/posts/${id}`);
  };

  return <Form post={post[0]} submitFunc={getFormData} />;
};

export default EditForm;
