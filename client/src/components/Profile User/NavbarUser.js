import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const NavbarUser = () => {
    let { idUser } = useParams();

  console.log(idUser);
  return (
    <section className="header-main border-bottom bg-dark">
      <div className="container-fluid">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to={`/ProfileUser/${idUser}`} style={{ color: "white" }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/MyAdsUser/${idUser}`} style={{ color: "white" }}>
              My Ads
            </Link>
          </li>
       
        </ul>
      </div>
    </section>
  );
};

export default NavbarUser;
