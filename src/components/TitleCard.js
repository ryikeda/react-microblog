import React from "react";
import { Paper, Grid, Typography, makeStyles, Box } from "@material-ui/core";
import VoteCard from "./VoteCard";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50px",
    padding: theme.spacing(3),
    alignContent: "center",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },
  votesContainer: {
    display: "flex",
    alignContent: "center",
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
  },
}));
const TitleCard = ({ title: { id, title, description, votes } }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} style={{ order: -votes }}>
      <Paper className={classes.card} variant="outlined" square>
        <Link to={`/posts/${+id}`} className={classes.link}>
          {" "}
          <Typography variant="h6">{title}</Typography>
        </Link>
        <Typography variant="body1">{description}</Typography>
      </Paper>
      <Paper variant="outlined" square>
        <Box className={classes.votesContainer}>
          <VoteCard postId={id} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default TitleCard;
