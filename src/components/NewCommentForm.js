import React, { useState } from "react";
import { v4 } from "uuid";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const FORM_INITIAL_DATA = {
  body: "",
};
const NewCommentForm = ({ createNewComment, postId }) => {
  const [form, setForm] = useState(FORM_INITIAL_DATA);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewComment(postId, {
      ...form,
      commentId: v4(),
      createdAt: new Date(),
    });
    setForm(FORM_INITIAL_DATA);
    history.push(`/posts/${postId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="commentForm"
        variant="outlined"
        multiline
        fullWidth
        placeholder="New Comment"
        name="body"
        required
        margin="dense"
        value={form.body}
        onChange={handleChange}
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        add
      </Button>
    </form>
  );
};

export default NewCommentForm;
