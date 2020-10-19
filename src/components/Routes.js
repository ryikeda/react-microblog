import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EditPost from "./EditPost";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/add" exact>
        <NewPost />
      </Route>
      <Route path="/posts/:id" exact>
        <Post />
      </Route>
      <Route path="/posts/:id/edit" exact>
        <EditPost />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
