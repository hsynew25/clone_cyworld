import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Gallery from "../Pages/gallery";
import GuestBook from "../Pages/guestBook";
import Home from "../Pages/home";
import DefaultContainer from "./defaultContainer";

export default () => (
  <Router>
    <DefaultContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/guestbook" exact component={GuestBook} />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultContainer>
  </Router>
);
