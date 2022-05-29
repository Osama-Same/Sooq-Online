import React, { useState } from "react";
import "../Register/register.css";
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
        
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="registration-form">
      <section>
        <div className="form-icon">
          <span>Login</span>
        </div>
        <div className="form-text">
          <p>Fill out the form below to Login</p>
        </div>
        <div className="form-group">
          <input type="email" className="form-control item" name="Email" placeholder="Email ..." onChange={handleEmail} />
        </div>
        <div className="form-group">
          <input type="Password" className="form-control item" name="Passowrd" placeholder="Password..." onChange={handlePassowrd} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block create-account" onClick={save}>
            Register
          </button>
        </div>
        <div className="form-text">
          <p>
            Already have an account ?<Link to="/register"> Register</Link>
          </p>
        </div>
        <div className="form-text" style={{ color: "red" }}>
          {error.result ||
            error.Email ||
            error.err ||
            (error.Passowrd && (
              <div>
                <p>{error.err}</p>
                <p>{error.result}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Login;
