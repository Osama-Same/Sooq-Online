import React, { useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";
const AddPost = () => {
  const [Name_Post, setName_Post] = useState("");
  const [Category_Post, setCategory_Post] = useState("");
  const [Images_Post, setImages_Post] = useState(null);
  const [Country_Post, setCountry_Post] = useState("");
  const [Price_Post, setPrice_Post] = useState("");
  const [Date_Post, setDate_Post] = useState("");
  const [errors, setErrors] = useState("");
  let history = useHistory();
  const handleName_Post = (e) => {
    setName_Post(e.target.value);
    console.log(e.target.value);
  };
  const handleCategory_Post = (e) => {
    setCategory_Post(e.target.value);
    console.log(e.target.value);
  };
  const handleImages_Post = (e) => {
    console.log(e.target.files[0].name);
    console.log(e.target.files[0]);
    setImages_Post(e.target.files[0]);
  };
  const handleCountry_Post = (e) => {
    setCountry_Post(e.target.value);
    console.log(e.target.value);
  };
  const handlePrice_Post = (e) => {
    setPrice_Post(e.target.value);
    console.log(e.target.value);
  };
  const handleDate_Post = (e) => {
    setDate_Post(e.target.value);
    console.log(e.target.value);
  };
  const save = async (e) => {
    e.preventDefault();
    const fromData = await new FormData();
    fromData.append("Name_Post", Name_Post);
    fromData.append("Category_Post", Category_Post);
    fromData.append("Country_Post", Country_Post);
    fromData.append("Price_Post", Price_Post);
    fromData.append("Date_Post", Date_Post);
   
    if (Images_Post) {
      fromData.append("Images_Post", Images_Post, Images_Post.name);
    }
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const id = localStorage.getItem("idUser");
    axios
      .post(`AddPost/${id}`, fromData, config)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          setErrors(res.data);
        } else if (res.data.err) {
          setErrors(res.data.err);
        }else if(res.data.result){
          history.push(`/Home/${id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="registration-form">
      <div className="container">
        <div className="row  justify-content-md-center ">
          <div className="col-md-6 text-white" id="login">
            <div className="text-center pt-3 pb-3">
              <h4>
                <strong>Add Post</strong>
              </h4>
            </div>
            <div className="pt-3 pb-3">
              <label> Name </label>
              {errors.Name_Post && <label style={{ color: "red", marginLeft: "15%" }}>{errors.Name_Post}</label>}
              <input type="text" className="form-control" name="Name_Post" placeholder="Name ..." onChange={handleName_Post} />
            </div>
            <div className="pt-3 pb-3">
              <label> Category </label>
              {errors.Category_Post && <label style={{ color: "red", marginLeft: "10%" }}>{errors.Category_Post}</label>}
              <select className="form-control" name="Category_Post" onChange={handleCategory_Post}>
                <option>Select Category</option>
                <option value="Cars">Cars</option>
                <option value="Tablet">Tablet</option>
                <option value="Mobile">Mobile</option>
                <option value="Computer">Computer</option>
                <option value="Laptop">Laptop</option>
                <option value="Playstation">Playstation</option>
                <option value="Baby Supplies">Baby Supplies</option>
                <option value="Clothes">Clothes</option>
              </select>
            </div>
            <div className="pt-3 pb-3">
              <label> Country </label>
              {errors.Country_Post && <label style={{ color: "red", marginLeft: "15%" }}>{errors.Country_Post}</label>}
              <select className="form-control" name="Country_Post" onChange={handleCountry_Post}>
                <option value="">Open this select Country</option>
                <option value="Jordan">Jordan</option>
                <option value="Egypt">Egypt</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Iraq ">Iraq </option>
                <option value="Syria">Syria </option>
                <option value="Emirates">Emirates</option>
                <option value="Qatar">Qatar</option>
              </select>
            </div>
            <div className="pt-3 pb-3">
              <label> Price </label>
              {errors.Price_Post && <label style={{ color: "red", marginLeft: "15%" }}>{errors.Price_Post}</label>}
              <input type="number" className="form-control" name="Price_Post" placeholder="Price ..." onChange={handlePrice_Post} />
            </div>
            <div className="pt-3 pb-3">
              <label> Date </label>
              {errors.Date_Post && <label style={{ color: "red", marginLeft: "15%" }}>{errors.Date_Post}</label>}
              <input type="date" className="form-control" name="Date_Post" onChange={handleDate_Post} />
            </div>
            <div className="pt-3 pb-3">
              <label> Images </label>
              <input type="file" className="form-control" name="Images_Post" accept=".jpg,.png,.svg" onChange={handleImages_Post} />
            </div>
            <div className="pt-3 pb-3">
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} onClick={save}>
                Submit
              </button>
            </div>
            <div className="form-group" style={{ color: "red", textAlign: "center" }}>
            {errors.err && <p>{errors.err}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
