import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { Lots } from "./components/Lots/Lots";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/lots" exact component={Lots} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
