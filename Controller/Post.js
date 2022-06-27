const connection = require("../Connection/connection");
const cloudinary = require("../Upload/cloudinary");
const validate = require("../Middlewares/AddPost");
const express = require("express");
const app = express();
app.use(express.json());


// Get All Post
const getAllPost = (req, res) => {
  let sql = `select 
        users.idUser, 
        users.Image,
        users.Name,
        post.Name_Post,
        post.Category_Post,
        post.Images_Post,
        post.Country_Post,
        post.Price_Post,
        post.Date_Post,
        post.idPost
        from post 
        inner join users on post.idUser = users.idUser`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

// Get id Post
const getIdPost = (req, res) => {
  let idPost = req.params.idPost;
  let sql = `select 
          users.idUser, 
          users.Image,
          users.Name,
          post.Name_Post,
          post.Category_Post,
          post.Images_Post,
          post.Country_Post,
          post.Price_Post,
          post.Date_Post,
          post.idPost
          from post 
          inner join users on post.idUser = users.idUser where idPost = '${idPost}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err)
    }else{
      res.json(result);
    }
  });
};

// Add Post
const addPost = async (req, res) => {
  const { error, isValid } = validate(req.body);
  if (!isValid) {
    return res.json(error);
  }

  let idUser = req.params.idUser;
  let Name_Post = req.body.Name_Post;
  let Category_Post = req.body.Category_Post;
  let Country_Post = req.body.Country_Post;
  let Price_Post = req.body.Price_Post;
  let Date_Post = req.body.Date_Post;
  let img = null;
  let url = null;
  if (req.file) {
    img = await cloudinary.uploader.upload(req.file.path, { folder: "Sooq Online/Post" });
    url = img.url;
  } else {
    res.json("No images Selected");
  }
 
  let Images_Post = url;
  let sql = `insert INTO post(idUser,Name_Post,Category_Post,Images_Post,Country_Post,Price_Post,Date_Post)
          VALUES('${idUser}','${Name_Post}','${Category_Post}','${Images_Post}','${Country_Post}','${Price_Post}','${Date_Post}')`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
      console.log(err);
    }
    if (result) {
      res.json({ result: "Add Post successfully" });
      console.log(result);
    }
  });
};
// update Like and unLike

const getLike = (req, res) => {
  let sql = `select * from likee where idPost= ${req.params.idPost} and likee = 'like' `;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);

      console.log(err);
    } else {
      res.json(result);
    }
  });
};
const getDisLike = (req, res) => {
  let sql = `select * from likee where idPost= ${req.params.idPost} and likee = 'Dislike'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
    }
  });
};
const text = (req, res) => {
  let sql = `select * from likee where idUser= ${req.params.idUser} `;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    }
    if (result) {
      if (!result[0]) {
        let sql1 = `insert into likee (idUser,idPost,Likee)VALUES('${req.params.idUser}','${req.body.idPost}','${req.body.Likee}')`;
        connection.query(sql1, (err, result) => {
          if (err) {
            res.json(err);
            console.log(err);
          } else {
            res.json("insert");
          }
        });
      } else {
        let data = [req.body.Likee];
        const sql = `UPDATE likee SET likee = ?, idPost = '${req.body.idPost}' WHERE  idUser = '${req.params.idUser}'`;

        connection.query(sql, data, (err) => {
          if (err) throw err;
          res.json("Success change Like ");
        });
      }
    }
  });
};
module.exports = { getAllPost, getIdPost, addPost, getLike, getDisLike, text };
