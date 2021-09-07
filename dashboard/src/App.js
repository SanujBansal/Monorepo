import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import "./App.css";
import Home from "./components/Home";

const { REACT_APP_TODO_HOST } = process.env;

function Todo() {
  return <MicroFrontend host={REACT_APP_TODO_HOST} name="Todo" />;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
