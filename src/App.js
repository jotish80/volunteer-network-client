import React, { createContext, useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.js";
import Header from "./Components/Header/Header";

export const UserContext = createContext();
export const TitleContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [title, setTitle] = useState({});
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <TitleContext.Provider value={[title, setTitle]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/register">
              <Register />
            </PrivateRoute>
            {/* <Route path="/event">
              <Event />
            </Route> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </TitleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
