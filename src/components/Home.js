import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Box,
  Grid,
  makeStyles,
} from "@material-ui/core";
import PostCard from "./PostHomeCard";

const useStyles = makeStyles((theme) => ({
  postsContainer: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  const postsArr = Object.entries(posts);

  return (
    <Container>
      <Typography variant="h6">
        Welcome to{" "}
        <Box component="span" display="inline" fontWeight="fontWeightBold">
          Microblog
        </Box>
        , our innovative site for communicating on the information superhighway.
      </Typography>
      <Grid container spacing={3} className={classes.postsContainer}>
        {postsArr.length ? (
          postsArr.map(([key, post]) => (
            <PostCard post={{ ...post, postId: key }} key={key} />
          ))
        ) : (
          <Box m={3}>
            <Typography variant="body1">Be the first one to post!</Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
