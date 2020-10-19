import React, { useState } from "react";
import { uuid } from "uuidv4";
import { useHistory } from "react-router-dom";
import {
  Container,
  InputLabel,
  TextField,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";

const FORM_INITIAL_DATA = {
  title: "",
  description: "",
  body: "",
};
const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  inputGroup: {
    marginBottom: theme.spacing(2),
  },
  btn: {
    marginRight: theme.spacing(1),
  },
}));
const NewPost = ({ createPost }) => {
  const [form, setForm] = useState(FORM_INITIAL_DATA);
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((data) => ({ ...data, [name]: value }));
  };

  const clearForm = (e) => {
    setForm(FORM_INITIAL_DATA);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ ...form, postId: uuid() });
    setForm(FORM_INITIAL_DATA);
    history.push("/");
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <form onSubmit={handleSubmit}>
        <Box className={classes.inputGroup}>
          <InputLabel htmlFor="title">
            <Typography variant="h5">Title:</Typography>
          </InputLabel>
          <TextField
            id="title"
            fullWidth
            variant="outlined"
            name="title"
            value={form.title}
            onChange={handleChange}
          ></TextField>
        </Box>
        <Box className={classes.inputGroup}>
          <InputLabel htmlFor="description">
            <Typography variant="h5">Description:</Typography>
          </InputLabel>
          <TextField
            id="description"
            fullWidth
            variant="outlined"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></TextField>
        </Box>
        <Box className={classes.inputGroup}>
          <InputLabel htmlFor="body">
            <Typography variant="h5">Body:</Typography>
          </InputLabel>
          <TextField
            id="body"
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            name="body"
            value={form.body}
            onChange={handleChange}
          ></TextField>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          Save
        </Button>
        <Button variant="contained" className={classes.btn} onClick={clearForm}>
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default NewPost;
