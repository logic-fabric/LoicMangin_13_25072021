import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Error404 } from "./pages/Error404/Error404.jsx";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { UserProfile } from "./pages/UserProfile/UserProfile";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { styleVar } from "./utils/styleVariables";

import reportWebVitals from "./reportWebVitals";

function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />

      <Router>
        <Header />

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

      <Footer />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    color: ${styleVar.neutral700};
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
  }

  ul {
    margin: 0;
    padding: 0;
  
    list-style-type: none;
  }

  .sr-only {
    position: absolute !important;

    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    border: 0 !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
  }
`;

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
