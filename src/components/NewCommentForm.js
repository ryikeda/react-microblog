import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

const FORM_INITIAL_DATA = {
  text: "",
};
const NewCommentForm = ({ createNewComment, postId }) => {
  const [form, setForm] = useState(FORM_INITIAL_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewComment(form);
    setForm(FORM_INITIAL_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="commentForm"
        variant="outlined"
        multiline
        fullWidth
        placeholder="New Comment"
        name="text"
        required
        margin="dense"
        value={form.text}
        onChange={handleChange}
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        add
      </Button>
    </form>
  );
};

export default NewCommentForm;
