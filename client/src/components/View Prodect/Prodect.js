import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Prodect = () => {
  const [ViewProdect, setViewProdect] = useState([]);
  useEffect(() => {
    getidPost();
  }, []);
  let { idPost } = useParams();
  const getidPost = () => {
    axios.get(`ViewProdect/${idPost}`).then((res) => {
      setViewProdect(res.data);
      console.log(res.data[0].result);
    });
  };
  return ViewProdect.map((e, i) => {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 mx-auto" key={i}>
            <section className="p-3 mb-2 bg-dark text-white">
              <h2 className="text-center">Product Details</h2>
              <Link >
                <img src={e.Image} alt="osama" width="40" height="35" className="rounded-circle" />
                <small className="text-white"> {e.Name}</small>
              </Link>
              <div className="row justify-content-md-center">
                <div className="col-md-5">
                  <img src={e.Images_Post} className="rounded"  style={{width:"100%" ,height:"300px"}}  alt=""/>
                </div>
                <div className="col-md-7 text-white">
                  <dl className="row text-white" style={{ margin: "10px 0px 0px ", width: "105%" }}>
                    <dt className="col-sm-3">
                      <i className="fa fa-shopping-cart"></i> Name :
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Name_Post}</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-flag"></i> Country
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Country_Post}</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-dollar"></i> Price
                    </dt>
                    <dd className="col-sm-9">
                      <p className="font-weight-bold">{e.Price_Post} &#8377;</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-clock-o"></i> Date
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Date_Post}</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-clock-o"></i> Category
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Category_Post}</p>
                    </dd>
                  </dl>
                  <div className="d-flex flex-row fs-12">
                    <div class="like p-2 cursor">
                      <button class="btn btn-primary" id="like">
                        <i className="fa fa-thumbs-o-up"></i>
                        Like
                      </button>
                    </div>

                    <div className="like p-2 cursor action-collapse" data-toggle="collapse" aria-expanded="true" aria-controls="collapse-1" href="#collapse-1">
                      <span className="ml-1">
                        <button className="btn btn-primary" id="Comment">
                          <i className="fa fa-commenting-o"></i>
                        </button>
                      </span>
                    </div>
                    <div className="like p-2 cursor action-collapse" data-toggle="collapse" aria-expanded="true" aria-controls="collapse-2" href="#collapse-2">
                      <span className="ml-1">
                        <button className="btn btn-primary">Add Cart</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  });
};

export default Prodect;
