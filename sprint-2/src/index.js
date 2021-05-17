import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload/Upload";
import Header from "./components/Header/Header";
import Home from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/upload' component={Upload} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
