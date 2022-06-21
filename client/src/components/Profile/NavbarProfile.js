import React from "react";
import { Link } from "react-router-dom";

const NavbarProfile = (props) => {
  

  const data = props.user.map((e,i) => {
    return (
      <section className="header-main border-bottom bg-dark">
        <div className="container-fluid" key={i}>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to={`/Profile/${e.idUser}`} style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/MyAds/${e.idUser}`} style={{ color: "white" }}>
                My Ads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/Follow/${e.idUser}`} style={{ color: "white" }}>
                Friends
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  });
  return <div>{data}</div>;
};

export default NavbarProfile;
