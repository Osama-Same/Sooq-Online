import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AddPost from "./components/Add Post/AddPost";
import ViewProdect from "./components/View Prodect/Prodect";
import Profile from "./components/Profile/Profile"
import MyAds from "./components/My Ads/MyAds"
import Category from "./components/Category/Category"
import ViewCategory from "./components/View Category/ViewCategory";
import FindUsers from "./components/Find Users/FindUsers";
import ProfileUser from "./components/Profile/ProfileUser";
import Follow from "./components/Profile/Follow";

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
        <Route exact path="/AddPost/:idUser">
          <Navbar />
          <AddPost />
        </Route>
        <Route exact path="/ViewProdect/:idPost">
          <Navbar />
          <ViewProdect />
        </Route>
        <Route exact path="/Profile/:idPost">
          <Navbar />
          <Profile />
        </Route>
        <Route exact path="/MyAds/:idUser">
          <Navbar />
          <MyAds />
        </Route>
        <Route exact path="/Category">
          <Navbar />
          <Category />
        </Route>
        <Route exact path="/Category/:Category_Post">
          <Navbar />
          <ViewCategory />
        </Route>
        <Route exact path="/FindUsers/:idUser">
          <Navbar />
          <FindUsers />
        </Route>
        <Route exact path="/ProfileUser/:idUser">
          <Navbar />
          <ProfileUser />
        </Route>
        <Route exact path="/Follow/:idUser">
          <Navbar />
          <Follow />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
