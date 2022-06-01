import React, { useState } from "react";
import "../Register/register.css";
import axios from "axios";

const AddPost = () => {
  const [Name_Post, setName_Post] = useState("");
  const [Category_Post, setCategory_Post] = useState("");
  const [Images_Post, setImages_Post] = useState(null);
  const [Country_Post, setCountry_Post] = useState("");
  const [Price_Post, setPrice_Post] = useState("");
  const [Date_Post, setDate_Post] = useState("");
  const [errors, setErrors] = useState("");
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
        if (res.data.err) {
          setErrors({err:res.data.err});
        } else {
          setErrors({result:res.data.result});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="registration-form">
      <section>
        <div className="form-text">
          <p style={{fontSize:"25px"}}>Add Post</p>
        </div>
        <div className="form-text">
          <p>Fill out the form below to Add Post</p>
        </div>

        <div className="form-group">
          <input type="text" className="form-control item" name="Name_Post" placeholder="Name..." onChange={handleName_Post} />
        </div>

        <div className="form-group">
          <input type="file" className="form-control item" accept=".jpg,.png,.svg" id="Images_Post" name="Images_Post" onChange={handleImages_Post} multiple="" />
        </div>

        <div className="form-group">
          <select className="form-control" name="Category_Post" style={{ borderRadius: "20px" }} onChange={handleCategory_Post}>
            <option value="">Open this select Category</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="Country_Post" style={{ borderRadius: "20px" }} onChange={handleCountry_Post}>
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
        <div className="form-group">
          <input type="number" className="form-control item" name="Price_Post" placeholder="Price" onChange={handlePrice_Post} />
        </div>
        <div className="form-group">
          <input type="date" className="form-control item" name="Date_Post" onChange={handleDate_Post} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block create-account" onClick={save}>
            Add Post
          </button>
        </div>

        <div className="form-group" style={{ color: "red", textAlign: "center" }}>
          {errors.Name_Post ||
            errors.Category_Post ||
            errors.Price_Post ||
            errors.Country_Post ||
            errors.Date_Post ||
            errors.err ||
            (errors.result && (
              <div>
                <p>{errors.Name_Post}</p>
                <p>{errors.Price_Post}</p>
                <p>{errors.Country_Post}</p>
                <p>{errors.Date_Post}</p>
                <p>{errors.err}</p>
                <p>{errors.result}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
export default AddPost;
