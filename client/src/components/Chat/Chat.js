import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Chat = () => {
  let { idUser } = useParams();
  let id = localStorage.getItem("idUser");
  let Image = localStorage.getItem("Image")
  const [user, setUsers] = useState([]);
  const [chat, setChat] = useState([]);
  const [receiver, setReceiver] = useState("");
  useEffect(() => {
    sender();
    getIdUser();
  }, [chat]);
  const getIdUser = () => {
    let id = idUser;
    axios.get(`getId/${id}`).then((res) => {
      setUsers(res.data);
    });
  };
  const handleReceiver = (e) => {
    setReceiver(e.target.value);
  };
  const sender = () => {
    let idUser2 = idUser;
    axios.get(`GetMassage/${id}/${idUser2}`).then((res) => {
      setChat(res.data);
      console.log(res.data);
    });
  };
  const addReceiver =()=>{
    let data ={
      idUser2 : idUser,
      receiver:receiver
    }
    axios.post(`Receiver/${id}`,data).then((res)=>{
   sender(res.data)
    })
  }
  const data = chat.map((e) => {
    return (
      
      <table className="table table-dark table-striped">
        <tr style={{ textAlign: "left"}}>
          <th  className="badge bg-primary text-white text-right">{e.sender}</th>
        </tr>
        <tr style={{ textAlign: "end"}}>
          <th  className="badge bg-success text-white text-end">{e.receiver}</th>
        </tr>
     
      </table>
    );
  });
  const user1 = user.map((e, i) => {
    return (
      <div className="row gx-5 p-3 mb-2 bg-dark text-white" key={i}>
        <div className="col-md-4">
          <div className="text-center">
            <img src={e.Image} className="img-circle" alt="" />
            <br />
            <div className="card-body">
              <h5 className="card-title">{e.Name}</h5>
              <h5 className="card-title">{e.Email}</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-left">
            <div className="card-header">
              <span>
                <img src={e.Image} width="40" height="35" className="rounded-circle" alt="" />
                <Link to={`/ProfileUser/${e.idUser}`} className="card-subtitle mb-2 text-white" style={{ padding: "5px" }}>
                  {e.Name}
                </Link>
              </span>
            </div>
            <br></br>
            {data}<br></br>
            <div className="row   bg-dark text-white">
        <div className="col-0 col-md-0 ">
          <img src={Image} width="40" height="35" className="rounded-circle" alt="" />
        </div>
        <div className="col-sm-9 col-md-10 ">
          <input type="text" className="form-control" name="receiver" placeholder="Massage"  onChange={handleReceiver}/>
        </div>
        <div className="col-0 col-md-0 ">
          <button className="btn btn-primary " type="button" onClick={addReceiver}>
            Send 
          </button>
          </div>
      </div>
      
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="container px-4">{user1}</div>
    </div>
  );
};

export default Chat;
