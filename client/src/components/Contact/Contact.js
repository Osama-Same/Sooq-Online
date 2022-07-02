import React from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
const Contact = () => {
  const id = localStorage.getItem("idUser");
  return (
    <div>
      <Link to={`/Home/${id}`}>
        <Header />{" "}
      </Link>
      <div className="container p-4" style={{marginTop:"50px"}} >
        <h2 className="text-center text-white">Contact Us</h2>
        <p
          className=" text-white-50"
          style={{ textAlign: "center", paddingBottom: "50px" }}
        >
          Use the form below to share your questions, ideas, comments and
          feedback
        </p>
        <div className="row">
          <div className="col-md-6 text-white pt-3 pb-3">
            <div>
              <p className=" text-white-50">
                Fill up the form and our Team will get back to you within in 24
                hours
              </p>
            </div>
            <div className="links">
              <Link to={"#"} className="btn rounded text-white p-3">
                <i className="fa fa-phone icon text-primary pr-3"></i> (+962)
                79895632
              </Link><br></br>
              <Link to={"#"} className="btn rounded text-white p-3">
                <i className="fa fa-envelope icon text-primary pr-3"></i>
                osama.moh.salem@gmail.com
              </Link><br></br>
              <Link to="#" className="btn rounded text-white p-3">
                <i className="fa fa-map-marker icon text-primary pr-3"></i>
                Amman - Jordan
              </Link>
            </div>
            <div className="col-md-7 pt-3 pb-3">
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
          </div>
          <div className="col-md-5 text-white" id="contact">
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="text-center pt-3 pb-3">
              <h4>
                <strong>Contact Us</strong>
              </h4>
            </div>
                  <div className="pt-3 pb-3">
                    <label> Email </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Email"
                      placeholder="Email ..."
                    />
                  </div>
                  <div className="pt-3 pb-3">
                    <label> Massage </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="Massage"
                      placeholder="Massage ..."
                    >
                      </textarea>
                  </div>
                  <div className="text-center pt-3 pb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: "100%" }}
                      
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
