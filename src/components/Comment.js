import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
}));

const Comment = ({ comment, deleteComment, postId }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleDelete = () => {
    deleteComment(postId, comment.id);
    history.push(`/posts/${postId}`);
  };
  return (
    <Box className={classes.root}>
      <IconButton onClick={handleDelete}>
        <DeleteIcon color="secondary" />
      </IconButton>
      <Typography variant="body1" component="p">
        {comment.body}
      </Typography>
    </Box>
  );
};

export default Comment;
