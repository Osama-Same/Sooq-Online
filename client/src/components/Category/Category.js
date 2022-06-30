import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategpry] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    axios.get("Category").then((res) => {
      setCategpry(res.data);


    });
  };

  let data = category.map((e, i) => {
    return (
      <div className="col-md-4" style={{ paddingBottom: "30px" }} key={i}>
        <figure className="card card-product-grid card-lg">
          <img src={e.Images_Category} className="img-wrap" alt="..." style={{ width: "200", height: "168px" }} />
          <div className="card-body text-center">
            <h5 className="card-title text-center">{e.name_Category}</h5>
            <Link to={`/Category/${e.name_Category}`} className="btn btn-primary btn-sm ">View</Link>
          </div>
        </figure>
      </div>

    );
  });
  return (
    <div className="container">
      <div className="row "> {data}</div>

    </div>
  );
};
export default Category;
