import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/add" exact>
        <NewPost />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
