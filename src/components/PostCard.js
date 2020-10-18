import React from "react";
import { Paper, Grid, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50px",
    padding: theme.spacing(3),
    alignContent: "center",
    justifyContent: "space-between",
  },
}));
const PostCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.card} variant="outlined">
          <Link> Post title</Link>
          <Typography variant="body2">Post description</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default PostCard;
