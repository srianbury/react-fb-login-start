import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About, Dashboard, Profile } from "../ExamplePages";

const Body = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/dashboard">
      <Dashboard text="hello there" />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
  </Switch>
);

export default Body;
