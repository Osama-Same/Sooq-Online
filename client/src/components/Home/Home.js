import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = () => {
    axios.get("AllPost").then((res) => {
      setPost(res.data);
    });
  };
  const data = post.map((e, i) => {
    return (
      <div className="col-md-4">
        <figure className="card card-product-grid card-lg">
          <span>
            <img src={e.Image} width="40" height="35" className="rounded-circle"  />
            <Link className="badge bg-primary text-white" style={{padding:"5px"}} >{e.Name}</Link>
          </span>
          <Link to="#" className="img-wrap" data-abc="true">
            <img src={e.Images_Post} />
          </Link>
          <div className="bottom-wrap">
            <ul className="float-right" style={{ listStyleType: "none" }}>
              <li>
                {" "}
                Date : <small className="badge bg-warning text-black">{e.Date_Post}</small>
              </li>
              <li>
                Category : <Link className="badge bg-primary text-white"> {e.Category_Post}</Link>
              </li>
            </ul>
            <ul className="float-left" style={{ listStyleType: "none", padding: "0px" }}>
              <li>
                Name : <small className="badge bg-secondary text-white">{e.Name_Post}</small>
              </li>
              <li>
                Country : <small className="badge bg-success text-white">{e.Country_Post}</small>
              </li>
            </ul>
          </div>

          <div class="bottom-wrap">
            <a href="#" class="btn  btn-primary float-right" data-abc="true">
              View Prodect
            </a>
            <div class="price-wrap">
              <span class="price h5">${e.Price_Post}</span> <br /> <small class="text-success">Free shipping</small>
            </div>
          </div>
        </figure>
      </div>
    );
  });

  return (
    <div className="container">
      <div>
        <p>Shop</p>
      </div>
      <div className="row">{data}</div>
    </div>
  );
};
export default Home;
