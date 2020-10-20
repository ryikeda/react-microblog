import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Typography,
  Box,
  Grid,
  makeStyles,
} from "@material-ui/core";
import TitleCard from "./TitleCard";
import { getTitlesFromAPI } from "../actions";

const useStyles = makeStyles((theme) => ({
  titlesContainer: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const titles = useSelector((state) => state.titles);

  useEffect(() => {
    dispatch(getTitlesFromAPI());
  }, [dispatch, titles.length]);

  return (
    <Container>
      <Typography variant="h6">
        Welcome to{" "}
        <Box component="span" display="inline" fontWeight="fontWeightBold">
          Microblog
        </Box>
        , our innovative site for communicating on the information superhighway.
      </Typography>
      <Grid container spacing={3} className={classes.titlesContainer}>
        {titles ? (
          titles.map((title) => <TitleCard title={title} key={title.id} />)
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
