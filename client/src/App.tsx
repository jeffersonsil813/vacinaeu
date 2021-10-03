import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
