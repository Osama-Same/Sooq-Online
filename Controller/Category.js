const connection = require("../Connection/connection");
const cloudinary = require("../Upload/cloudinary");
const allCategory = (req, res) => {
  //const idUser = req.params.idUser;
  let sql = `select * from category`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
};
const insertCategory = async (req, res) => {
  let name_Category = req.body.name_Category;
  let img = null
  if (req.file) {
    img = await cloudinary.uploader.upload(req.file.path, { folder: "Sooq Online/Category" });
  } else {
    res.json("No images Selected");
  }
  let Images_Category = img.url;
  let sql = `INSERT INTO category (name_Category,Images_Category)VALUES ('${name_Category}','${Images_Category}')`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    }else{
      res.json(result);
    }

  });
};
const findNameCategory = (req, res) => {
  let Category_Post = req.params.Category_Post;
  let sql =  
  `select 
  users.idUser, 
  users.Image,
  users.Name,
  Post.Name_Post,
  Post.Category_Post,
  Post.Images_Post,
  Post.Country_Post,
  Post.Price_Post,
  Post.Date_Post,
  Post.idPost
  from Post inner join users on Post.idUser = users.idUser
  where post.Category_Post = '${Category_Post}'`
connection.query(sql,(err,result)=>{
   if(err){
     res.json(err)
   }else{
     res.json(result)
   }
})
};
module.exports = { allCategory, insertCategory ,findNameCategory};
