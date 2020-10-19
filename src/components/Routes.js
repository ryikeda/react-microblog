import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EditForm from "./EditPost";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";

const Routes = ({
  posts,
  createPost,
  editPost,
  deletePost,
  addComment,
  deleteComment,
}) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home posts={posts} />
      </Route>
      <Route path="/add" exact>
        <NewPost createPost={createPost} />
      </Route>
      <Route path="/posts/:id" exact>
        <Post
          posts={posts}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      </Route>
      <Route path="/posts/:id/edit" exact>
        <EditForm posts={posts} editPost={editPost} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
