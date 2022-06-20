import React, { useEffect, useState } from "react";
import axios from "axios";
import Follow from "./Follow";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Passowrd, setPassowrd] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const [Image, setImage] = useState(null);
  useEffect(() => {
    getIdUser();
  }, []);

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

  const getIdUser = async () => {
    const id = localStorage.getItem("idUser");
    await axios.get(`getId/${id}`).then((res) => {
      setUser(res.data);
      setName(res.data[0].Name);
      setEmail(res.data[0].Email);
      setPassowrd(res.data[0].Passowrd);
      setPhone(res.data[0].Phone);
      setCountry(res.data[0].Country);
      setImage(res.data[0].Image);
    });
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("idUser");
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
      .put(`UpdateIdUser/${id}`, fromData, config)
      .then((res) => {
        if (res.data.result) {
          setUser(res.data[0].result);
        } else {
          console.log(res.data.err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    
    <div className="container rounded bg-black mt-5">
      {user && (
        <div className="row p-3 mb-2 bg-dark text-white">
          <div className="col-md-4 border-right ">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img src={user[0].Image} height="120" width="120" alt="" />
              <br />
              <span className="font-weight-bold">{user[0].Name}</span>
              <span className="text-warning  font-weight-bold">{user[0].Email}</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back">
                  <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <h6>Information</h6>
                </div>
                <h6 className="text-right">
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    Edit Profile
                  </button>
                </h6>
              </div>
           
                <div className="row mt-2">
                  <div className="col-md-2">Name :</div>
                  <div className="col-md-2">{user[0].Name}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2">Email :</div>
                  <div className="col-md-2">{user[0].Email}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2">Password : </div>
                  <div className="col-md-2">{user[0].Passowrd}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2">Phone : </div>
                  <div className="col-md-2">{user[0].Phone}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2">Country :</div>
                  <div className="col-md-2">{user[0].Country}</div>
                </div>
              
            </div>
          </div>

          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content text-white-50 bg-dark">
                <form onSubmit={updateUser}>
                  <div className="modal-body text-white-50 bg-dark ">
                    <div className="mb-3">
                      <label className="col-form-label">Name:</label>
                      <input type="text" className="form-control" name="Name" value={Name || ""} onChange={handleFirstName} />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Email:</label>
                      <input type="Email" className="form-control" name="Email" value={Email || ""} onChange={handleEmail} />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label text-black">Password:</label>
                      <input type="text" className="form-control" name="Passowrd" value={Passowrd || ""} onChange={handlePassowrd} />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Phone:</label>
                      <input type="text" className="form-control" name="Phone" value={Phone || ""} onChange={handlePhone} />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Image:</label>
                      <div className="form-group">
                        <input type="file" className="form-control item" accept=".jpg,.png,.svg" id="Image" name="Image" multiple="" onChange={handleImage} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Country:</label>
                      <select className="form-control" name="Country" style={{ borderRadius: "20px" }} onChange={handleCountry}>
                        <option value={user[0].Country}>{user[0].Country}</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Iraq ">Iraq </option>
                        <option value="Syria">Syria </option>
                        <option value="Emirates">Emirates</option>
                        <option value="Qatar">Qatar</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={updateUser} data-bs-dismiss="modal">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Follow/>
    </div>
  );
};
export default Profile;
