import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addComment, deleteComment } from "../actions";

import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ postObj }) => {
  const [[key, post]] = Object.entries(postObj);
  const { comments } = post;

  const dispatch = useDispatch();
  const createNewComment = (id, data) => {
    dispatch(addComment(id, data));
  };

  const handleDelete = (postId, commentId) => {
    dispatch(deleteComment(postId, commentId));
  };

  return (
    <Box my={3}>
      <hr />
      <Typography variant="h4">Comments</Typography>
      {comments.length ? (
        comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.commentId}
            deleteComment={handleDelete}
            postId={key}
          />
        ))
      ) : (
        <Box my={2}>
          <Typography variant="body1"> No comments yet!</Typography>
        </Box>
      )}
      <NewCommentForm createNewComment={createNewComment} postId={key} />
    </Box>
  );
};

export default Comments;
