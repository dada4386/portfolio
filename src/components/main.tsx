import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./home";
import Header from "./header";

export default function main() {
  return (
    <Router>
    <Header/>
      <div className={"body"}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

