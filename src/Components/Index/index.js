import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Authentication } from "../Authentication";
import Header from "../Header";
import Body from "../Body";

const Index = () => (
  <Router>
    <Authentication>
      <Header />
      <Body />
    </Authentication>
  </Router>
);

export default Index;
