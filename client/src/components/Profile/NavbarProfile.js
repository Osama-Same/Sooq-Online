import React from "react";
import { Link } from "react-router-dom";

const NavbarProfile = () => {
  const idUser = localStorage.getItem("idUser");

  return (
    <section className="header-main border-bottom bg-dark">
      <div className="container-fluid">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to={`/Profile/${idUser}`} style={{ color: "white" }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/MyAds/${idUser}`} style={{ color: "white" }}>
              My Ads
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavbarProfile;
