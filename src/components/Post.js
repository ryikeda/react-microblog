import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flexFlow: 1,
  },
}));
const Post = ({ posts, deletePost }) => {
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [post] = posts.filter((post) => post.postId === id);

  const handleDelete = () => {
    deletePost(id);
    history.push("/");
  };

  return (
    <Container>
      <Box className={classes.titleContainer}>
        <Typography variant="h3" className={classes.title}>
          {post.title}
        </Typography>
        <Box>
          <IconButton onClick={() => history.push(`/posts/${id}/edit`)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
};

export default Post;
