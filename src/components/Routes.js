import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";

const Routes = ({ posts, createPost }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home posts={posts} />
      </Route>
      <Route path="/add" exact>
        <NewPost createPost={createPost} />
      </Route>
      <Route path="/posts/:id" exact>
        <Post posts={posts} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
