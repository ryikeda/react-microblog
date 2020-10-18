import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  makeStyles,
} from "@material-ui/core";
import PostCard from "./PostCard";

const useStyles = makeStyles((theme) => ({
  postsContainer: {
    marginTop: theme.spacing(3),
  },
}));

const Home = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Typography variant="h6">
          Welcome to{" "}
          <Box component="span" display="inline" fontWeight="fontWeightBold">
            Microblog
          </Box>
          , our innovative site for communicating on the information
          superhighway.
        </Typography>
        <Grid container spacing={3} className={classes.postsContainer}>
          {posts.map((post) => {
            return <PostCard post={post} key={post.postId} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
