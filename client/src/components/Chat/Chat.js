import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Chat = () => {
  let { idUser } = useParams();
  let id = localStorage.getItem("idUser");
  let Image = localStorage.getItem("Image");
  const [user, setUsers] = useState([]);
  const [selectUser, setSelelctUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getAllUser();
    FindSelectUser();
  }, [search]);
  const getAllUser = () => {
    axios.get(`AllUser/${id}`).then((res) => {
      setUsers(res.data);
    });
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const findSearch = () => {
    if (search === "") {
      setUsers([...user]);
    } else {
      setUsers(
        user.filter((e) => {
          return e.Email.toUpperCase().search(search.toUpperCase()) !== -1;
        })
      );
    }
  };
  const FindSelectUser = (e) => {
    
    axios.get(`getId/${e}`).then((res) => {
      setSelelctUser(res.data);
      console.log(res.data);
    });
  };
  const users = user.map((e, i) => {
    return (
      <div className="container-fluid text-left pt-3" key={i.idUser}>
        <button
          type="submit"
          className="btn btn-dark bg-dark text-white"
          onClick={() => {
            FindSelectUser(e.idUser);
          }}
        >
          <img
            src={e.Image}
            alt={e.Email}
            width="30"
            height="25"
            className="rounded-circle"
          />
          <small style={{ paddingLeft: "5px" }}> {e.Email}</small>
        </button>
      </div>
    );
  });

  const data = selectUser.map((e) => {
    return <div>{e.Email}</div>;
  });
  return (
    <div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row bg-dark text-center text-white">
          <div className="col pt-3 pb-3">
            <div className="row d-flex flex-column pt-3 pb-3">
              <div className="col">
                <div className="container-fluid d-inline-flex">
                  <input
                    type="Search"
                    placeholder="Search..."
                    className="form-control"
                    value={search}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i
                      className="fa fa-search"
                      style={{ color: "white" }}
                      onClick={findSearch}
                    ></i>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="container-fluid">
                {users}
                </div>
                </div>
            </div>
          </div>

          <div className="col">{data}</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
