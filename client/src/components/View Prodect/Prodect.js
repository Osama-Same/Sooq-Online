import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Prodect = () => {
  const [iPost, setIdPost] = useState([]);
  const [getComment, setGetComment] = useState([]);
  const [comment, setComment] = useState("");
  const [Likee,setLikee] = useState([])
  const [disLike,setDisLike]=useState([])
  useEffect(() => {
    getidPost();
    getAllComment();
    getLike();
    getDislike();
  }, [getComment]);
  let { idPost } = useParams();
  const Image = localStorage.getItem("Image");
  const idUser = localStorage.getItem("idUser");
  const getidPost = () => {
    axios.get(`GetIdPost/${idPost}`).then((res) => {
      setIdPost(res.data);
    });
  };
  const handlComment = (e) => {
    setComment(e.target.value);
  };

  const insertComment = () => {
    let date_comment = new Date();
    date_comment = `${date_comment.getDate()}/${date_comment.getMonth() + 1}/${date_comment.getFullYear()}`;
    const data = {
      idUser: idUser,
      comment: comment,
      date_comment: date_comment,
    };
    axios.post(`insertComment/${idPost}`, data).then((res) => {
      //console.log(res.data);
    });
  };
  const getAllComment = () => {
    axios.get(`GetComment/${idPost}`).then((res) => {
      if (res.data) {
        setGetComment(res.data);
      }
    });
  };


  const updateLike = () => {
    let data = {
      Likee: "Like",
      idPost: idPost,
    };
    axios.post(`text/${idUser}`, data).then((res) => {
      console.log(res.data);
    });
  };
  const updateUnlike = () => {
    let data = {
      Likee: "Dislike",
      idPost: idPost,
    };
    axios.post(`text/${idUser}`, data).then((res) => {
      console.log(res.data);
    });
  };
  const getLike = () => {
    axios.get(`GetLike/${idPost}`).then((res) => {
      setLikee(res.data);
    });
  };
  const getDislike = () => {
    axios.get(`GetDisLike/${idPost}`).then((res) => {
      setDisLike(res.data);
    });
  };
  const data = iPost.map((e, i) => {
    return (
      <div className="row  p-3 bg-dark text-white">
        <div className="col-md-6" key={i}>
          <div className="col pt-3 pb-3">
            <img src={e.Image} width="40" height="35" className="rounded-circle" alt="" />
            <Link to={`/ProfileUser/${e.idUser}`} className="text-white" style={{ paddingLeft: "10px" }}>
              {e.Name}
            </Link>
          </div>
          <div className="col">
            <img src={e.Images_Post} className="rounded" style={{ width: "100%", height: "300px" }} alt="" />
          </div>
        </div>
        <div className="col ">
          <div className="text-center">
            <div className="card-header">Information</div>
            <br></br>
            <table className="table table-dark table-striped">
              <tr>
                <th scope="col">Name :</th>
                <th scope="col">{e.Name_Post}</th>
              </tr>
              <tr>
                <th scope="col">Category :</th>
                <th scope="col">{e.Category_Post}</th>
              </tr>
              <tr>
                <th scope="col">Country :</th>
                <th scope="col">{e.Country_Post}</th>
              </tr>
              <tr>
                <th scope="col">Price :</th>
                <th scope="col">{e.Price_Post}</th>
              </tr>
              <tr>
                <th scope="col">Date :</th>
                <th scope="col">{e.Date_Post}</th>
              </tr>
            </table>
          </div>
          <div className="col">
            <table className="table table-dark table-striped">
              <tr>
                <th scope="col" style={{ paddingLeft: "50px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      updateLike();
                    }}
                  >
                    Like ({Likee.length}) 
                  </button>
                </th>
                <th scope="col" style={{ paddingLeft: "50px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      updateUnlike();
                    }}
                  >
                    Dislike ({disLike.length})
                  </button>
                </th>
                <th scope="col" style={{ paddingLeft: "50px" }}>
                  <Link to={`/Chat/${e.idUser}`}  className="btn btn-primary">Massage</Link>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  });
  const commentData = getComment.map((e, i) => {
    return (
      <div className="row p-3  bg-dark text-white">
        <div className="col">
          <div className="d-flex flex-row add-comment-section mt-4 mb-4" style={{ width: "100%" }}>
            <img className="img-fluid img-responsive rounded-circle mr-2" src={e.Image} width="38" alt="" />
            <div class="d-flex flex-column">
              <h6 class="mb-0">{e.Name}</h6> <span class="date">{e.date_comment}</span>
            </div>
          </div>
          <p>{e.comment}</p>
          <hr style={{ background: "silver" }}></hr>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      {data}
      <div className="row p-3  bg-dark text-white">
        <div className="col-auto ">
          <img src={Image} width="40" height="35" className="rounded-circle" alt="" />
        </div>
        <div className="col ">
          <input type="text" className="form-control" name="comment" placeholder="Add comment" onChange={handlComment} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary " type="button" onClick={insertComment}>
            Comment ({getComment.length})
          </button>
        </div>
      </div>
      {commentData}
    </div>
  );
};

export default Prodect;
