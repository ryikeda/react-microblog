import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  IconButton,
  Paper,
} from "@material-ui/core";
import { deletePostAPI, getPostFromAPI } from "../actions";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Comments from "./Comments";
import VoteCard from "./VoteCard";

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
  actionContainer: {
    display: "flex",
  },
}));
const Post = () => {
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.filter((post) => post.id === Number(id))
  );

  const handleDelete = () => {
    dispatch(deletePostAPI(id));
    history.push("/");
  };

  useEffect(() => {
    if (post.length) return;
    dispatch(getPostFromAPI(id));
  }, [dispatch, post.length, id]);

  return (
    <Container>
      {post.length ? (
        <>
          <Box className={classes.titleContainer}>
            <Typography variant="h4" className={classes.title}>
              {post[0] ? post[0].title : null}
            </Typography>
            <Box className={classes.actionContainer}>
              <Paper variant="outlined" square>
                <VoteCard postId={post[0].id} />
                <IconButton onClick={() => history.push(`/posts/${id}/edit`)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={handleDelete}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </Paper>
            </Box>
          </Box>

          <Typography variant="body1">
            {post[0] ? post[0].body : null}
          </Typography>
          <Comments />
        </>
      ) : (
        <Typography variant="h6">Loading post...</Typography>
      )}
    </Container>
  );
};

export default Post;
