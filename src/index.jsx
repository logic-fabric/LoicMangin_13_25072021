import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Error404 } from "./pages/Error404/Error404.jsx";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { UserProfile } from "./pages/UserProfile/UserProfile";

import reportWebVitals from "./reportWebVitals";

function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    scroll-behavior: smooth;
  }
`;

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
