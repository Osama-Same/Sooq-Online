import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Passowrd, setPassowrd] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const [Image, setImage] = useState(null);
  const [errors, setErrors] = useState("");
  let history = useHistory();
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

  const save = (e) => {
    e.preventDefault();

    const fromData = new FormData();
    fromData.append("Name", Name);
    fromData.append("Email", Email);
    fromData.append("Passowrd", Passowrd);
    fromData.append("Phone", Phone);
    fromData.append("Country", Country);
    if (Image) {
      fromData.append("Image", Image, Image.name);
    }

    axios
      .post("register", fromData)
      .then((res) => {
        if (res.data.err) {
          setErrors(res.data.err);
        } else if (res.data.result) {
          setErrors(res.data.result);
          history.push("/");
        } else {
          setErrors(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="pt-3 pb-3">
      <div className="text-center text-white pt-3 pb-3">
        <h5
          className="text-capitalize fst-italic"
          style={{ paddingTop: "10px" }}
        >
          Sooq Online
        </h5>
      </div>
      <div className="container">
        <div className="row  justify-content-md-center ">
          <div className="col-md-6 text-white" id="login">
            <div className="text-center pt-3 pb-3">
              <h4>
                <strong>Register</strong>
              </h4>
            </div>
            <div className="pt-3 pb-3">
              <label> Name </label>
              {errors.Name && (
                <label style={{ color: "red", marginLeft: "30%" }}>
                  {errors.Name}
                </label>
              )}
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="Name ..."
                onChange={handleFirstName}
              />
            </div>
            <div className="pt-3 pb-3">
              <label> Email </label>
              {errors.Email && (
                <label style={{ color: "red", marginLeft: "30%" }}>
                  {errors.Email}
                </label>
              )}
              <input
                type="email"
                className="form-control"
                name="Email"
                placeholder="Email ..."
                onChange={handleEmail}
              />
            </div>
            <div className="pt-3 pb-3">
              <label>Password</label>
              {errors.Passowrd && (
                <label style={{ color: "red", marginLeft: "15%" }}>
                  {errors.Passowrd}
                </label>
              )}
              <input
                type="password"
                className="form-control"
                name="Passowrd"
                placeholder="Password..."
                onChange={handlePassowrd}
              />
            </div>
            <div className="pt-3 pb-3">
              <label>Phone</label>
              {errors.Phone && (
                <label style={{ color: "red", marginLeft: "15%" }}>
                  {errors.Phone}
                </label>
              )}
              <input
                type="tel"
                className="form-control"
                name="Phone"
                placeholder="Phone..."
                onChange={handlePhone}
              />
            </div>
            <div className="pt-3 pb-3">
              <label>Country</label>
              {errors.Country && (
                <label style={{ color: "red", marginLeft: "15%" }}>
                  {errors.Country}
                </label>
              )}
              <select
                className="form-control"
                name="Country"
                onChange={handleCountry}
              >
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
            <div className="pt-3 pb-3">
              <label>Image</label>
              <input
                type="file"
                className="form-control"
                name="Image"
                accept=".jpg,.png,.svg"
                onChange={handleImage}
              />
            </div>
            <div className="text-center pt-3 pb-3">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: "100%" }}
                onClick={save}
              >
                Submit
              </button>
            </div>
            <div className="text-center pt-3 pb-3">
              <p>
                Already have an account ?
                <Link to="/" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </p>
            </div>
            <div
              className="form-group"
              style={{ color: "red", textAlign: "center" }}
            >
              {errors.err && <p>{errors.err}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
