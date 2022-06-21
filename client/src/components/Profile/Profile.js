import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarProfile from "./NavbarProfile";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Passowrd, setPassowrd] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const [Image, setImage] = useState(null);
  useEffect(() => {
    getIdUser();
  }, []);

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
  const handleFirstName = (e) => {
    setName(e.target.value);
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
    setImage(e.target.files[0]);
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
          setUser(res.data);
        } else {
          console.log(res.data.err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const data = user.map((e, i) => {
    return (
      <div className="row gx-5 p-3 mb-2 bg-dark text-white" key={i}>
        <div className="col-md-4 ">
          <div className="text-center">
            <img src={e.Image} className="img-circle" alt="" />
            <br />
            <div className="card-body">
              <h5 className="card-title">{e.Name}</h5>
              <h5 className="card-title">{e.Email}</h5>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                Edit Profile
              </button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo" className="btn btn-warning" style={{ background: "red", color: "white", marginLeft: "10px" }}>
                Delete
              </button>
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
      </div>
    );
  });
  return (
    <div>
      <NavbarProfile user={user} />
      <div class="container px-4">{data}</div>
      <div>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content text-white-50 bg-dark">
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
                    <option value={Country || ""}>{Country}</option>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
