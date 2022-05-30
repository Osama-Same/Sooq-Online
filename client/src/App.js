import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// functional component
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Home/:idUser">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
