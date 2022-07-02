import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const id = localStorage.getItem("idUser");
  return (
    <footer
      className="bg-dark text-center text-white"
      style={{ width: "100%" }}
    >
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-4">
            <h2>Sooq Online</h2>
            <p className=" text-white-50 ">
              A site specialized in buying and selling that provides you with
              many important services
            </p>
          </div>
          <div className="col-md-2 text-center">
            <ul className="list-unstyled mb-0 ">
              <li>
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  aria-current="page"
                  to={`/Home/${id}`}
                >
                  <span
                    className="fa fa-fw fa-home"
                    style={{ color: "white" }}
                  ></span>{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  aria-current="page"
                  to={`/About/${id}`}
                >
                  <span
                    className="fa fa-address-book"
                    style={{ color: "white" }}
                  ></span>{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  style={{ color: "white" }}
                  aria-current="page"
                  to={`/Contact/${id}`}
                >
                  <span
                    className="fa fa-address-book"
                    style={{ color: "white" }}
                  ></span>{" "}
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "white" }}
                  to={`/Category`}
                >
                  <span
                    className="	fa fa-list-alt"
                    style={{ color: "white" }}
                  ></span>{" "}
                  Category
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <Link
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}

              role="button"
            >
              <i className="fab fa-facebook-f" style={{ color: "white" }}></i>
            </Link>

            <Link
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
         
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
             
              role="button"
            >
              <i className="fab fa-google"></i>
            </Link>

            <Link
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: " #0082ca" }}
   
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>

            <Link
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
             
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link>
          </div>
          <div className="col">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>

            <div className="col">
              <div class="form-outline form-white mb-4">
                <input type="email"  placeholder="Enter Email" class="form-control" />
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.2);" }}
      >
        © 2022 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
