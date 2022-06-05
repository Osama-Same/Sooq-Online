const connection = require("../Connection/connection");
const cloudinary = require("../Upload/cloudinary");
const validate = require("../Middlewares/AddPost");
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
  let sql = `insert INTO Post(idUser,Name_Post,Category_Post,Images_Post,Country_Post,Price_Post,Date_Post)
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

module.exports = { addPost };
