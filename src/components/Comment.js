import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
}));

const Comment = ({ comment, deleteComment }) => {
  const classes = useStyles();
  const handleDelete = () => {
    deleteComment(comment.id);
  };
  return (
    <Box className={classes.root}>
      <IconButton onClick={handleDelete}>
        <DeleteIcon color="secondary" />
      </IconButton>
      <Typography variant="body1" component="p">
        {comment.text}
      </Typography>
    </Box>
  );
};

export default Comment;
