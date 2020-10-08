import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

// https://dosmos-backend.herokuapp.com/

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
