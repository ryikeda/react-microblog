import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(7),
    // margin: theme.spacing(2),
    backgroundColor: "#f4f4f4",
    marginBottom: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  link: {
    marginRight: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root} variant="outlined" square>
        <Typography className={classes.header} variant="h1">
          Microblog
        </Typography>
        <Typography className={classes.header} variant="h5">
          Get in the Rythmn of blogging!
        </Typography>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/add">Add a new post</Link>
      </Paper>
    </>
  );
};

export default Header;
