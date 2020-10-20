import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { deletePostAPI, getPostFromAPI } from "../actions";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Comments from "./Comments";

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
  }, [dispatch, id]);

  return (
    <Container>
      {post.length ? (
        <>
          <Box className={classes.titleContainer}>
            <Typography variant="h3" className={classes.title}>
              {post[0] ? post[0].title : null}
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
