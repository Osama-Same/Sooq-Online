import axios from "axios";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import MyAds from "../My Ads/MyAds";

const ProfileUser = () => {

  let { idUser } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    getFindUser();
  }, []);
  const getFindUser = async () => {
    await axios.get(`getId/${idUser}`).then((res) => {
      setUser(res.data);
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
                <div className="col-md-2">Phone : </div>
                <div className="col-md-2">{user[0].Phone}</div>
              </div>
              <div className="row mt-3">
                <div className="col-md-2">Country :</div>
                <div className="col-md-2">{user[0].Country}</div>
              </div>
            </div>
          </div>

        
        </div>
      )}
<MyAds/>

    </div>
  );
};
export default ProfileUser;
