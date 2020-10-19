import React from "react";
import { useParams } from "react-router-dom";
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
const Post = ({ posts }) => {
  const { id } = useParams();
  const [post] = posts.filter((post) => post.postId === id);

  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.titleContainer}>
        <Typography variant="h3" className={classes.title}>
          {post.title}
        </Typography>
        <Box>
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
};

export default Post;
