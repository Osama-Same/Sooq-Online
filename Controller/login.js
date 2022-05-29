const connection = require("../Connection/connection");
const validator = require("../Middlewares/login");
const jwt = require("jsonwebtoken");


const login = (req, res) => {
  
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
          res.json({ result: "User registered sucessfully" });
  
        } else {
          res.json({ err: "You have entered invalid Email or password" });
        }
      }
    });
  };
module.exports={login}