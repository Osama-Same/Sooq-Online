import React from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
const About = () => {
  const id = localStorage.getItem("idUser");
  return (
    <div>
      <Link to={`/Home/${id}`}>
        <Header />{" "}
      </Link>
      <div className="container" style={{marginTop:"60px"}}>
        <h2 className="text-center text-white">About Us</h2>
        <p
          className=" text-white-50"
          style={{ textAlign: "center", paddingBottom: "50px" }}
        >
          A site specialized in buying and selling that provides you with many
          important services
        </p>

        <div className="row" style={{ paddingBottom: "50px" }}>
          <div className="col-md-6" style={{ paddingBottom: "50px" }}>
            <h1 className="text-white">Who Are We?</h1>
            <p className=" text-white-50">
              The Mobile Store is is the leading distributor and retailer of
              mobile devices in the Middle East, representing some of leading
              brands in the world since its inception in 2006.
            </p>
            <p className=" text-white-50">
              The Mobile Store was established with a singular objective: to
              offer cutting edge mobile technologies to all consumer segments,
              making sure that we fulfill the often-ignored promise of an
              unparalleled customer experience. Today, we serve a growing
              customer base through more than 3,200 points of sale, 13 showrooms
              and 15 service centers across Palestine, Jordan and Iraq. We also
              launched an online store that was conceived to elevate the online
              shopping experience in the region by offering choice, ease-of-use,
              and security.
            </p>
          </div>
          <div className="col">
            <img
              width="100%"
              alt=""
              src="https://cdn4.premiumread.com/?url=https://www.alroeya.com/uploads/images/2020/06/09/839305.jpg&w=w850&q=100&f=jpg"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Department Users</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://image.similarpng.com/very-thumbnail/2020/11/3d-online-shopping-on-social-media-mobile-applications-or-websites-concepts-on-transparent-background-PNG.png"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Department Company</h5>
                <p className="card-text">
                  The company can make its own advertisement , And also Kamal
                  can deal with the user directly
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img
                src="https://inmobiliare.com/himalaya/wp-content/uploads/2020/12/Comercio_electronico.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Department User and Users
                </h5>
                <p className="card-text">
                  He can exchange the commodity through buying and selling from
                  customer to customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
