import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Passowrd, setPassowrd] = useState("");
  const [error, setError] = useState({});
  let history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassowrd = (e) => {
    console.log(e.target.value);
    setPassowrd(e.target.value);
  };
  const save = (e) => {
    e.preventDefault();
    axios
      .post("login", { Email: Email, Passowrd: Passowrd })
      .then((res) => {
        if (res.data.Email || res.data.Passowrd) {
          console.log(res.data.Email || res.data.Passowrd);
          setError(res.data);
        } else if (res.data.result) {
          const idUser = res.data.idUser;
          const Image = res.data.Image;
          const token = res.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("Image", Image);
          localStorage.setItem("idUser", idUser);
          history.push(`/Home/${idUser}`);
          setError(res.data);
          console.log(res.data.result);
        } else if (res.data.err) {
          setError(res.data);
          console.log(res.data.err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="pt-3 pb-3">
      <div className="text-center text-white pt-3 pb-3">
        <h5 className="text-capitalize fst-italic" style={{ paddingTop: "10px" }}>
          Sooq Online
        </h5>
      </div>
      <div className="container">
        <div className="row  justify-content-md-center ">
          <div className="col-md-6 text-white" id="login">
            <div className="text-center pt-3 pb-3">
              <h4>
                <strong>Login In</strong>
              </h4>
            </div>
            <div className="pt-3 pb-3">
              <label> Email </label>
              {error.Email && <label style={{ color: "red", marginLeft: "30%" }}>{error.Email}</label>}
              <input type="email" className="form-control" name="Email" placeholder="Email ..." onChange={handleEmail} />
            </div>
            <div className="pt-3 pb-3">
              <label>Password</label>
              {error.Passowrd && <label style={{ color: "red", marginLeft: "15%" }}>{error.Passowrd}</label>}
              <input type="password" className="form-control" name="Passowrd" placeholder="Password..." onChange={handlePassowrd} />
            </div>
            <div className="text-center pt-3 pb-3">
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} onClick={save}>
                Submit
              </button>
            </div>
            <div className="text-center pt-3 pb-3">
              <p>
                Already have an account ?
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </p>
            </div>
            <div className="text-center pt-3 pb-3" style={{ color: "red", textAlign: "center" }}>
              {error.err && (
                  <p>{error.err}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
