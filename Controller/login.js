const connection = require("../Connection/connection");
const validator = require("../Middlewares/login");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
    const { errors, isValid } = validator(req.body);
    if (!isValid) {
      console.log(errors);
      return res.json(errors);
    }
    let Email = req.body.Email;
    let Passowrd = req.body.Passowrd;
    const sql = `select * from users where Email ='${Email}' and Passowrd = '${Passowrd}' `;
  
    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ err: "You have entered invalid Email or password" });
      }
      if (result) {
        if (result.length > 0) {
          const idUser = result[0].idUser;
          const token = jwt.sign({ idUser }, "jwtSecret", { expiresIn: process.env.TOKEN_EXPIRATION });
          res.json({ result: "User registered sucessfully",token:token,idUser:idUser });
  
        } else {
          res.json({ err: "You have entered invalid Email or password" });
        }
      }
    });
  };
module.exports={login}