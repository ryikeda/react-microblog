import React from "react";
import { Paper, Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
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
  link: {
    textDecoration: "none",
  },
}));
const TitleCard = ({ title: { id, title, description } }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.card} variant="outlined">
        <Link to={`/posts/${+id}`} className={classes.link}>
          {" "}
          {title}
        </Link>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </Grid>
  );
};

export default TitleCard;
