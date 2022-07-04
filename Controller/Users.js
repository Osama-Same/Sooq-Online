const connection = require("../Connection/connection");
const bcrypt = require("bcrypt");
const cloudinary = require("../Upload/cloudinary");
const validate = require("../Middlewares/register");
const express = require("express");
const app = express();
app.use(express.json());
// Get All Users
const getAllUsers = (req, res) => {
  let sql = "select * from users";
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }
    if (result) {
      res.json({ result: result });
    }
  });
};
// Get All Users Not user
const getAllNotUser = (req, res) => {
  let id  = req.params.idUser
  let sql = `select * from users where not idUser ='${id}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
    }else{
      res.json(result)
    }
    
  });
};
// Get id user
const getIdUser = (req, res) => {
  const idUser = req.params.idUser;
  let sql = `select * from users where idUser = '${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
    } else {
      res.json(result);
    }
  });
};

// update id User
const updateIdUser = async (req, res) => {
  let img = null;
  const { error, isValid } = validate(req.body);
  if (!isValid) {
    return res.json(error);
  } else {
    let idUser = req.params.idUser;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Passowrd = req.body.Passowrd;
    let Phone = req.body.Phone;
    let Country = req.body.Country;
    if (req.file) {
      img = await cloudinary.uploader.upload(req.file.path);
    } else {
      res.json("No images Selected");
    }
    let Image = img.url;

    let sql = `update users set 
    Name = '${Name}',
    Email = '${Email}',
    Passowrd = '${Passowrd}',
    Phone = '${Phone}',
    Country = '${Country}',
    Image = '${Image}'
    where idUser = '${idUser}'`;
    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ err: err });
        console.log(err);
      }
      if (result) {
        res.json(result);
        console.log({ result: "successfully" });
      }
    });
  }
};

// Delete id user
const deleteIdUser = (req, res) => {
  const idUser = req.params.idUser;
  let sql = `delete from users where idUser='${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
      console.log(err);
    }
    if (result) {
      res.json("Delete Account");
      console.log(result);
    }
  });
};
const MyAds = (req, res) => {
  let idUser = req.params.idUser;
  let sql = `select 
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
      where users.idUser = ${idUser}`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

// add User Or Regisetr
const addUser = async (req, res) => {
  const { error, isValid } = validate(req.body);

  if (!isValid) {
    return res.json(error);
  }
  let img = null;
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  let Phone = req.body.Phone;
  let Country = req.body.Country;

  if (req.file) {
    img = await cloudinary.uploader.upload(req.file.path, { folder: "Sooq Online/Users" });
  } else {
    res.json("No images Selected");
  }
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
    }
  });
};

// Login
const validateLogin = require("../Middlewares/login");
const jwt = require("jsonwebtoken");
const login = (req, res) => {
  const { error, isValid } = validateLogin(req.body);
  if (!isValid) {
    return res.json(error);
  }
  let Email = req.body.Email;
  let Passowrd = req.body.Passowrd;
  const sql = `select * from users where Email ='${Email}' and Passowrd = '${Passowrd}' `;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "You have entered invalid Email or password" });
      console.log(err);
    }
    if (result) {
      if (result.length > 0) {
        const idUser = result[0].idUser;
        const Image = result[0].Image;
        const token = jwt.sign({ idUser }, "jwtSecret", { expiresIn: process.env.TOKEN_EXPIRATION });
        res.json({ result: "User registered sucessfully", token: token, idUser: idUser, Image: Image });
        console.log(result);
      } else {
        res.json({ err: "You have entered invalid Email or password" });
      }
    }
  });
};

// chat insert sender

const sender = (req, res) => {
  let idUser = req.params.idUser;
  let idUser2 = req.body.idUser2;
  let sql = `select * from users where idUser = '${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
    }
    if (result) {
      let sql = `select * from massage where idUser2 = '${idUser2}'`;
      connection.query(sql, (err, result) => {
        if (err) {
          res.json({ err: "error" });
        } else if (result) {
          let sender = req.body.sender;
          // let receiver = req.body.receiver;
          let sql1 = `insert into massage (idUser,idUser2,sender) values
                    ('${idUser}','${idUser2}','${sender}')`;
          connection.query(sql1, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        }
      });
    }
  });
};

// chat insert receiver

const receiver = (req, res) => {
  let idUser = req.params.idUser;
  const idUser2 = req.body.idUser2;
  let sql = `select * from users where idUser = '${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
    }
    if (result) {
      let sql = `select * from massage where idUser2 = '${idUser2}'`;
      connection.query(sql, (err, result) => {
        if (err) {
          res.json({ err: "error" });
        } else if (result) {
          //let sender = req.body.sender;
          let receiver = req.body.receiver;
          let sql1 = `insert into massage (idUser,idUser2,receiver) values
                    ('${idUser}','${idUser2}','${receiver}')`;
          connection.query(sql1, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        }
      });
    }
  });
};

// chat Get receiver
const getMassage = (req, res) => {
  let idUser = req.params.idUser;
  let idUser2 = req.params.idUser2;
  let sql = `select * from massage where idUser2 ='${idUser2}' and '${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
    }
  });
};
module.exports = { getAllUsers, getIdUser, updateIdUser, deleteIdUser, MyAds, addUser, login,getAllNotUser, sender, receiver, getMassage };
