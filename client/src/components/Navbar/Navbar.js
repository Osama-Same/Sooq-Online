import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const Navbar = () => {
  const [users, setUser] = useState(null);
  const id = localStorage.getItem("idUser");
  let history = useHistory();
  useEffect(() => {
    getId();
  }, []);
  const getId = () => {
    axios.get(`getId/${id}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  };
  const deleteIdUser = () => {
    axios.delete(`deleteIdUser/${id}`).then(() => {
      localStorage.clear();
      history.push("/");
    });
  };
  const logOut = () => {
    localStorage.clear();
    history.push("/");
    console.log("clear records");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {users && (
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/Home/${users[0].idUser}`}>
            Sooq Online
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link className="nav-link" style={{ color: "white" }} aria-current="page" to={`/Home/${users[0].idUser}`}>
                  <span className="fa fa-fw fa-home" style={{ color: "white" }}></span> Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" style={{ color: "white" }} aria-current="page" to={`/About/${users[0].idUser}`}>
                  <span className="fa fa-address-book" style={{ color: "white" }}></span> About Us
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" style={{ color: "white" }} to={`/Category`}>
                  <span className="	fa fa-list-alt" style={{ color: "white" }}></span> Category
                </Link>
              </li>
              
            </ul>

            <ul className="nav navbar-nav ml-auto" style={{ marginTop: "11px" }}>
              <li>
                <Link className="nav-link" to={`/AddPost/${users[0].idUser}`}>
                  <span className="fa fa-plus-square" style={{ color: "white" }}></span> Add Post
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={"#"}className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={users[0].Image} alt={users[0].Email} width="30" height="25" className="rounded-circle" />
                  <small style={{ paddingLeft: "5px" }}> {users[0].Email}</small>
                </Link>

                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <Link to={`/Profile/${users[0].idUser}`} className="dropdown-item">
                      <span className="fa fa-user" style={{ color: "black" }}></span> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={`/MyAds/${users[0].idUser}`} className="dropdown-item">
                      <span className="fa fa-adjust" style={{ color: "black" }}></span> My Ads
                    </Link>
                  </li>
            
                  <li>
                    <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">
                      <span className="fa fa-solid fa-trash" style={{ color: "black" }}></span> Delete Account
                    </button>
                  </li>
                  <li>
                    <button type="submit" className="dropdown-item" onClick={logOut}>
                      <span className="fas fa-sign-out-alt" style={{ color: "black" }}></span> Log out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content text-white bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete Account
                  </h5>
                </div>
                <div className="modal-body">Do you really want to delete your account</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary" onClick={deleteIdUser}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
