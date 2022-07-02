import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AddPost from "./components/Add Post/AddPost";
import ViewProdect from "./components/View Prodect/Prodect";
import Profile from "./components/Profile/Profile";
import MyAds from "./components/Profile/MyAds";
import Category from "./components/Category/Category";
import ViewCategory from "./components/View Category/ViewCategory";
import ProfileUser from "./components/Profile User/ProfileUser";
import UserMyAds from "./components/Profile User/UserMyAds";
import Chat from "./components/Chat/Chat";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

// functional component
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Register">
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
          <Footer />
        </Route>
        <Route exact path="/About/:idUser">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route exact path="/Contact/:idUser">
          <Navbar />
          <Contact />
          <Footer/>
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

        <Route exact path="/ProfileUser/:idUser">
          <Navbar />
          <ProfileUser />
        </Route>
        <Route exact path="/MyAdsUser/:idUser">
          <Navbar />
          <UserMyAds />
        </Route>
        <Route exact path="/Chat/:idUser">
          <Navbar />
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
