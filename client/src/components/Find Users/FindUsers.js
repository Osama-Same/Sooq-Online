import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";

const FindUsers = () => {
  const [follow, setFollow] = useState([]);
  const [search, setSearch] = useState("");
  let history = useHistory();
  useEffect(() => {
    getfindUser();
  }, [search, follow]);
  const id = localStorage.getItem("idUser");
  const getfindUser = () => {
    axios.get(`GetAllFollow/${id}`).then((res) => {
      setFollow(res.data);
     // console.log(res.data)
    });
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const searchName = () => {
    setFollow(
      follow.filter((e) => {
        return e.Name.toUpperCase().search(search.toUpperCase()) !== -1;
      })
    );
  };
  const updateFollow = (e) => {
    let data = {
      follow: "unFollow",
      idUser2: e.idUser,
    };
    axios.post(`UpdateFollow/${id}`, data).then((res) => {
      console.log(data);
      console.log(res.data);
    });
  };
  

  const data = follow.map((e,i) => {
    return (
      <div className="col-md-4" key={i}>
        <figure className="card card-product-grid card-lg">
          <img src={e.Image} alt="" className="card-img-top" height="200" />
          <div className="card text-center">
            <div className="card-body">
              <Link to={`/ProfileUser/${e.idUser}`}>
                <h5 class="card-title">{e.Name}</h5>
              </Link>
              <p className="card-text">{e.Email}</p>
              <p className="card-text">{e.follow}</p>
                <button className="btn btn-primary" onClick={() => updateFollow(e)}>
                 Follow
                </button>
            </div>
          </div>
        </figure>
      </div>
    );
  });

  return (
    <div>
      <Search handleSearchChange={handleSearchChange} searchName={searchName} search={search} />
      <div className="container">
        <div className="row">{data}</div>
      </div>
    </div>
  );
};

export default FindUsers;
