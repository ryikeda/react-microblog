import React from "react";
import { Box, Typography } from "@material-ui/core";

import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ post, addComment, deleteComment }) => {
  return (
    <Box my={3}>
      <hr />
      <Typography variant="h4">Comments</Typography>
      {post.comments.map((comment) => (
        <Comment
          comment={comment}
          key={comment.id}
          deleteComment={deleteComment}
          postId={post.postId}
        />
      ))}
      <NewCommentForm addComment={addComment} postId={post.postId} />
    </Box>
  );
};

export default Comments;
