const connection = require("../Connection/connection");

// Get All id Post Comment Length
const AllCommentLength =(req,res) => {
  let idPost = req.params.idPost;
  let sql = 
  `select 
  users.idUser,
  users.Image,
  users.Name,
  comment.comment,
  comment.date_comment
  from comment inner join users on comment.idUser = users.idUser
  where idPost = '${idPost}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result.length);
    }
  });
}

// Get id Post from comment
const getAllComment = (req, res) => {
  let idPost = req.params.idPost;
  let sql = 
  `select 
  users.idUser,
  users.Image,
  users.Name,
  comment.comment,
  comment.date_comment
  from comment inner join users on comment.idUser = users.idUser
  where idPost = '${idPost}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const addComment = (req, res) => {
  let idUser = req.body.idUser;
  let idPost = req.params.idPost;
  let comment = req.body.comment;
  let date_comment = req.body.date_comment
  let sql =`insert into comment (idUser,idPost,comment,date_comment)VALUES('${idUser}','${idPost}','${comment}','${date_comment}')`
  connection.query(sql,(err,result)=>{
    if(err){
        res.json(err)
        console.log(err)
    }else{
        res.json(result)
        console.log(result)
    }
  })
};
module.exports = { getAllComment, addComment ,AllCommentLength};

