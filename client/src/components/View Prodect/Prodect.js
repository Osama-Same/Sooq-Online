import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Prodect = () => {
  const [ViewProdect, setViewProdect] = useState([]);
  const [vauleComment, setValueComment] = useState([]);
  const [allCommentLength, setAllCommentLength] = useState([]);
  const [valueLikee, setLikee] = useState([]);
  const [Dislike, setDisLike] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getidPost();
    getComment();
    getLike();
    getDislike();
    getCommentLength();
  }, [vauleComment]);
  let { idPost } = useParams();
  let Image = localStorage.getItem("Image");
  const idUser = localStorage.getItem("idUser");
  const getidPost = () => {
    axios.get(`ViewProdect/${idPost}`).then((res) => {
      setViewProdect(res.data);
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
      console.log(res.data);
    });
  };
  const getComment = () => {
    axios.get(`GetComment/${idPost}`).then((res) => {
      setValueComment(res.data);
    });
  };
  const getCommentLength = () => {
    axios.get(`AllCommentLength/${idPost}`).then((res) => {
      setAllCommentLength(res.data);
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
  const data = ViewProdect.map((e, i) => {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 mx-auto" key={i}>
            <section className="p-3 mb-2 bg-dark text-white">
              <h2 className="text-center">Product Details</h2>
              <hr style={{ background: "silver" }}></hr>
              <img src={e.Image} alt="" width="40" height="35" className="rounded-circle" />
              <small className="text-white"> {e.Name}</small>
              <hr style={{ background: "silver" }}></hr>
              <br></br>

              <div className="row justify-content-md-center  mt-0 mb-0">
                <div className="col-md-5">
                  <img src={e.Images_Post} className="rounded" style={{ width: "100%", height: "300px" }} alt="" />
                </div>
                <hr style={{ background: "silver" }}></hr>
                <div className="col-md-7 text-white">
                  <dl className="row text-white" style={{ margin: "10px 0px 0px ", width: "105%" }}>
                    <dt className="col-sm-3">
                      <i className="fa fa-shopping-cart"></i> Name :
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Name_Post}</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-flag"></i> Country
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Country_Post}</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-dollar"></i> Price
                    </dt>
                    <dd className="col-sm-9">
                      <p className="font-weight-bold">{e.Price_Post} &#8377;</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-clock-o"></i> Date
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Date_Post}</p>
                    </dd>
                    <dt className="col-sm-3">
                      <i className="fa fa-clock-o"></i> Category
                    </dt>
                    <dd className="col-sm-9">
                      <p>{e.Category_Post}</p>
                    </dd>
                  </dl>
                </div>
              </div>
              <hr style={{ background: "silver" }}></hr>
              <div class="bg-dark">
                <div class="d-flex justify-content-center">
                  <div class="like p-2 cursor">
                    <i class="fa fa-thumbs-o-up"></i>
                    <span class="ml-1">Like {valueLikee}</span>
                  </div>
                  <div class="like p-2 cursor">
                    <i class="fa fa-thumbs-o-down"></i>
                    <span class="ml-1">Dislike {Dislike}</span>
                  </div>
                  <div class="like p-2 cursor">
                    <i class="fa fa-commenting-o"></i>
                    <span class="ml-1">Comment {allCommentLength}</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="like p-2 cursor">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      updateLike();
                    }}
                  >
                    <i className="fa fa-thumbs-o-up" style={{ color: "white" }}></i>
                    Like
                  </button>
                </div>
                <div className="like p-2 cursor">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      updateUnlike();
                    }}
                  >
                    <i className="fa fa-thumbs-o-down" style={{ color: "white" }}></i>
                    Dislike
                  </button>
                </div>
                <div className="like p-2 cursor action-collapse" data-toggle="collapse" aria-expanded="true" aria-controls="collapse-2" href="#collapse-2">
                  <span className="ml-1">
                    <button className="btn btn-primary">Add Cart</button>
                  </span>
                </div>
              </div>
              <hr style={{ background: "silver" }}></hr>
              <div className="coment-bottom bg-dark p-2 px-4" key={i}>
                <div className="d-flex flex-row add-comment-section mt-4 mb-4" style={{ width: "100%" }}>
                  <img className="img-fluid img-responsive rounded-circle mr-2" src={Image} width="38" alt="" />
                  <input type="text" className="form-control form-control-sm mr-2" name="comment" placeholder="Add comment" onChange={handlComment} />
                  <button className="btn btn-primary btn-sm" type="button" style={{ height: "32px", padding: "4px 13px" }} onClick={insertComment}>
                    Comment
                  </button>
                </div>
              </div>

              {vauleComment.map((e, i) => {
                return (
                  <div className="coment-bottom bg-dark p-2 px-4" key={i}>
                    <div className="d-flex flex-row add-comment-section mt-4 mb-4" style={{ width: "100%" }}>
                      <img className="img-fluid img-responsive rounded-circle mr-2" src={e.Image} width="38" alt="" />
                      <div class="d-flex flex-column">
                        <h6 class="mb-0">{e.Name}</h6> <span class="date">{e.date_comment}</span>
                      </div>
                    </div>
                    <p>{e.comment}</p>
                    <hr style={{ background: "silver" }}></hr>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    );
  });
  return <div>{data}</div>;
};

export default Prodect;