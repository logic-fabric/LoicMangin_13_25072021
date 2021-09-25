import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import { Error404 } from "./pages/Error404/Error404.jsx";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { UserProfile } from "./pages/UserProfile/UserProfile";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { GlobalStyle } from "./utils/style/globalStyle.js";

import reportWebVitals from "./reportWebVitals";

function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
