import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAPI, deleteCommentAPI } from "../actions";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { id } = useParams();
  const comments = useSelector(
    (state) => state.posts.filter((post) => post.id === Number(id))[0].comments
  );

  const dispatch = useDispatch();
  const createNewComment = (data) => {
    dispatch(addCommentAPI(id, { ...data, id }));
  };

  const handleDelete = (commentId) => {
    dispatch(deleteCommentAPI(id, commentId));
  };

  return (
    <Box my={3}>
      <hr />
      <Typography variant="h4">Comments</Typography>
      {comments.length ? (
        comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            deleteComment={handleDelete}
          />
        ))
      ) : (
        <Box my={2}>
          <Typography variant="body1"> No comments yet!</Typography>
        </Box>
      )}
      <NewCommentForm createNewComment={createNewComment} />
    </Box>
  );
};

export default Comments;
