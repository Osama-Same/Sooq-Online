const connection = require("../Connection/connection");
const bcrypt = require("bcrypt");
const cloudinary = require("../Upload/cloudinary/cloudinary");
const validate = require("../Middlewares/register");

const register = async (req, res) => {
  const { error, isValid } = validate(req.body);
  if (!isValid) {
    return res.json(error);
  }
  
  const img = await cloudinary.uploader.upload(req.file.path, { folder: "Sooq Online/Users/"});
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  let Phone = req.body.Phone;
  let Country = req.body.Country;
  let Image = img.url;

  const sql = `INSERT INTO users (Name, Email, Passowrd,Phone,Country,Image)
  VALUES ('${Name}', '${Email}', '${Passowrd}','${Phone}','${Country}','${Image}')`;
  Passowrd = bcrypt.hashSync(Passowrd, Number("salt"));
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "Email is invalid" });
      console.log({ err: "Email is invalid" });
      console.log(err);
    }

    if (result) {
      res.json({ result: "Sign Up successfully" });
      console.log(req.file);
    }
  });
};

module.exports = { register };
