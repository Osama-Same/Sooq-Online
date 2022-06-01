import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="col-md-3">
        <figure className="card card-product-grid card-lg" style={{ width: "100%" }}>
          <div class="card-header">
            <img src={e.Image} width="35" height="25" className="rounded-circle" />
            <small style={{ paddingLeft: "5px" }}> {e.Name}</small>
            <small className="float-right">{e.Date_Post}</small>
          </div>
          <img className="card-img-top" src={e.Images_Post} alt="Card image cap" height="150" />
          <div class="card">
            <ul class="list-inline">
              <li class="list-inline-item">
                {e.Category_Post}
              </li>
              <li class="list-inline-item" style={{ border: "none" }}>
                Dapibus ac facilisis in
              </li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
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
