const connection = require("../Connection/connection");
const bcrypt = require("bcrypt");
const isEmpty = require("is-empty");
const cloudinary =require("../Upload/cloudinary/cloudinary")
const upload  =require("../Upload/user")


const register =async (req, res) => {
const img = await cloudinary.uploader.upload(req.file.path)
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  let Phone = req.body.Phone;
  let Country = req.body.Country;

  let error = {};
  // check Name
  if (isEmpty(Name)) {
    error.Name = "Name field is required";
  }
  // Email checks
  if (isEmpty(Email)) {
    error.Email = "Email field is required";
  }
  if (!/\S+@\S+\.\S+/.test(Email)) {
    error.Email = "Email is invalid";
  }
  if (isEmpty(Passowrd)) {
    error.Passowrd = "Passowrd field is required";
  }
  if (isEmpty(Phone)) {
    error.Phone = "Phone field is required";
  }
  if (isEmpty(Country)) {
    error.Country = "Country field is required";
  }
/*   let Image = req.file;
  if (isEmpty(Image)) {
    error.Image = "Image field is required";
  } else {
    Image = req.file.filename;
  } */
  let Image = img.url
  const sql = `INSERT INTO users (Name, Email, Passowrd,Phone,Country,Image)
  VALUES ('${Name}', '${Email}', '${Passowrd}','${Phone}','${Country}','${Image}')`;
  Passowrd = bcrypt.hashSync(Passowrd, Number("salt"));
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ error: error, err: "Email is invalid" });
      console.log(error);
    }
    if (result) {
      res.json({ result: "Sign Up successfully" });
      console.log(req.file);
    }
  });

};

module.exports = { register };
