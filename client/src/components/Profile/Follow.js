import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Follow = () => {
  const [unfollow, setUnFollow] = useState([]);
  const id = localStorage.getItem("idUser");
  useEffect(() => {
    getUnFollow();
  }, [unfollow]);


  const getUnFollow = () => {
    axios.get(`getAllUnfollow/${id}`).then((res) => {
      setUnFollow(res.data);
    });
  };

  const updateFollow = (e) => {
    let data = {
      follow: "Follow",
      idUser2: unfollow[0].idUser2,
    };
    axios.post(`UpdateFollow/${id}`, data).then((res) => {
      console.log(res.data);
      console.log(data);
    });
  };
  const data = unfollow.map((e) => {
    return (
      <div className="col-md-4">
        <figure className="card card-product-grid card-lg">
          <img src={e.Image} alt="" className="card-img-top" height="200" />
          <div className="card text-center">
            <div className="card-body">
              <Link to={`/ProfileUser/${e.idUser}`}>
                <h5 class="card-title">{e.Name}</h5>
              </Link>
              <p className="card-text">{e.Email}</p>
              <button id="B4" className="btn btn-primary" onClick={() => updateFollow(e)}>
                {e.follow}
              </button>
            </div>
          </div>
        </figure>
      </div>
    );
  });
  return <div className="container">
  <div className="row">{data}</div>
</div>;
};

export default Follow;
