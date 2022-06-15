const connection = require("../Connection/connection");
const validate = require("../Middlewares/login");
const jwt = require("jsonwebtoken");


const login = (req, res) => {
  const { error, isValid } = validate(req.body);
  if (!isValid) {
    return res.json(error);
  }
    let Email = req.body.Email;
    let Passowrd = req.body.Passowrd;
    const sql = `select * from users where Email ='${Email}' and Passowrd = '${Passowrd}' `;
  
    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ err: "You have entered invalid Email or password" });
        console.log(err)
      }
      if (result) {
        if (result.length > 0) {
          const idUser = result[0].idUser;
          const Image = result[0].Image
          const token = jwt.sign({ idUser }, "jwtSecret", { expiresIn: process.env.TOKEN_EXPIRATION });
          res.json({ result: "User registered sucessfully",token:token ,idUser:idUser,Image:Image});
          console.log(result)
        } else {
          res.json({ err: "You have entered invalid Email or password" });
        }
      }
    });
  };
module.exports={login}