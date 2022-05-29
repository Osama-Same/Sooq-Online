import React, { useEffect, useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);
  let history = useHistory();
  useEffect(() => {
    getId();
  }, []);
  const getId = () => {
    const id = localStorage.getItem("idUser");
    axios.get(`getId/${id}`).then((res) => {
      setUser(res.data);
    });
  };
  const profile = () =>{
    return history.push(`/Profile/${user[0].idUser}`)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {user && (
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link className="nav-link active" aria-current="page" to={`/Home/${user[0].idUser}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link active" aria-current="page" to={`/GetUsers`}>
                  Get Users
                </Link>
              </li>
            </ul>
            <ul class="nav navbar-nav ml-auto">
              <li className="nav-item dropdown">
              {/*   <Link className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={require(`../../../../backend/images/${user[0].Image}`).default} alt={user[0].Email} width="30" height="25" className="rounded-circle" />
                  <small style={{ paddingLeft: "5px" }}> {user[0].FirstName}</small>
                </Link>  */}

                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <button className="dropdown-item" onClick={profile}>
                      Profile
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
