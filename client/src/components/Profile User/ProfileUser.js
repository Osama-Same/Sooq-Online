import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarUser from "./NavbarUser";

const ProfileUser = () => {
  let { idUser } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getFindUser();
  }, [user]);
  const getFindUser = async () => {
    await axios.get(`getId/${idUser}`).then((res) => {
      setUser(res.data);
    });
  };
  const data = user.map((e, i) => {
    return<div className="row gx-5 p-3 mb-2 bg-dark text-white" key={i}>
      <div className="col-md-4 ">
        <div className="text-center">
          <img src={e.Image} className="img-circle" alt="" />
          <br />
          <div className="card-body">
            <h5 className="card-title">{e.Name}</h5>
            <h5 className="card-title">{e.Email}</h5>
           
          </div>
        </div>
      </div>
      <div className="col">
        <div className="text-center">
          <div className="card-header">Information</div>
          <br></br>
          <table className="table table-dark table-striped">
            <tr>
              <th scope="col">Name :</th>
              <th scope="col">{e.Name}</th>
            </tr>
            <tr>
              <th scope="col">Email :</th>
              <th scope="col">{e.Email}</th>
            </tr>
            <tr>
              <th scope="col">Password :</th>
              <th scope="col">{e.Passowrd}</th>
            </tr>
            <tr>
              <th scope="col">Phone :</th>
              <th scope="col">{e.Phone}</th>
            </tr>
            <tr>
              <th scope="col">Country :</th>
              <th scope="col">{e.Country}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>;
  });
  return (
    <div>
      <NavbarUser user={idUser} />
      <div className="container px-4">{data}</div>
    </div>
  );
};
export default ProfileUser;
