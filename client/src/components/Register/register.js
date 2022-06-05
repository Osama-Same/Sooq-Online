import React, { useState } from "react";
import "./register.css";
import axios from "axios";

import { Link } from "react-router-dom";
const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Passowrd, setPassowrd] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const [Image, setImage] = useState(null);
  const [errors, setErrors] = useState("");

  const handleFirstName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassowrd = (e) => {
    setPassowrd(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleImage = (e) => {
    console.log(e.target.files[0].name);
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const save = async (e) => {
    e.preventDefault();

    const fromData = await new FormData();
    fromData.append("Name", Name);
    fromData.append("Email", Email);
    fromData.append("Passowrd", Passowrd);
    fromData.append("Phone", Phone);
    fromData.append("Country", Country);
    if (Image) {
      fromData.append("Image", Image, Image.name);
    }
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("register", fromData, config)
      .then((res) => {
        if (res.data) {
          setErrors(res.data);
        } else if (res.data.err) {
          setErrors(res.data.err);
        } else {
          setErrors(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="registration-form">
      <section>
        <div className="form-icon">
          <span>Register</span>
        </div>
        <div className="form-text">
          <p>Fill out the form below to Register</p>
        </div>

        <div className="form-group">
          <input type="text" className="form-control item" name="Name" placeholder="Name..." onChange={handleFirstName} />
        </div>

        <div className="form-group">
          <input type="email" className="form-control item" name="Email" placeholder="Email ..." onChange={handleEmail} />
        </div>
        <div className="form-group">
          <input type="Password" className="form-control item" name="Passowrd" placeholder="Password..." onChange={handlePassowrd} />
        </div>
        <div className="form-group">
          <input type="tel" className="form-control item" name="Phone" placeholder="Phone..." onChange={handlePhone} />
        </div>

        <div className="form-group">
          <input type="file" className="form-control item" accept=".jpg,.png,.svg" id="Image" name="Image" onChange={handleImage} multiple="" />
        </div>

        <div className="form-group">
          <select className="form-control" name="Country" style={{ borderRadius: "20px" }} onChange={handleCountry}>
            <option name="Country" value="">
              Open this select Country
            </option>
            <option name="Country" value="Jordan">
              Jordan
            </option>
            <option name="Country" value="Egypt">
              Egypt
            </option>
            <option name="Country" value="Saudi Arabia">
              Saudi Arabia
            </option>
            <option value="Iraq ">Iraq </option>
            <option value="Syria">Syria </option>
            <option value="Emirates">Emirates</option>
            <option value="Qatar">Qatar</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block create-account" onClick={save}>
            Register
          </button>
        </div>

        <div className="form-text">
          <p>
            Already have an account ?
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              Login
            </Link>
          </p>
        </div>
        <div className="form-group" style={{ color: "red", textAlign: "center" }}>
          {errors.FirstName ||
            errors.Email ||
            errors.Passowrd ||
            errors.Phone ||
            errors.Country ||
            errors.err ||
            (errors.result && (
              <div>
                <p>{errors.FirstName}</p>
                <p>{errors.Email}</p>
                <p>{errors.Passowrd}</p>
                <p>{errors.Phone}</p>

                <p>{errors.Country}</p>
                <p>{errors.err}</p>
                <p>{errors.result}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Register;
