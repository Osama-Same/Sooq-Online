const connection = require("../Connection/connection");
const cloudinary = require("../Upload/cloudinary/cloudinary");
const validate = require("../Middlewares/AddPost")
const addPost =  async(req,res) => {
 const { error, isValid } = validate(req.body);
  if (!isValid) {
    return res.json(error);
  }  
  const img = await cloudinary.uploader.upload(req.file.path, { folder: "Sooq Online/Post"});
    let idUser = req.params.idUser;
    let Name_Post = req.body.Name_Post;
    let Category_Post = req.body.Category_Post;
    let Images_Post = img.url;
    let Country_Post = req.body.Country_Post;
    let Price_Post = req.body.Price_Post;
    let Date_Post = req.body.Date_Post;
    let sql = `insert INTO Post(idUser,Name_Post,Category_Post,Images_Post,Country_Post,Price_Post,Date_Post)
    VALUES('${idUser}','${Name_Post}','${Category_Post}','${Images_Post}','${Country_Post}','${Price_Post}','${Date_Post}')`;
    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ err: "err" });
        console.log(err)
      }
      if (result) {
        res.json({ result: "Add Post successfully" });
        console.log(result)
      }
    });
};

module.exports = {addPost};

