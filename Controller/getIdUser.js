const connection = require("../Connection/connection");

const getId = (req, res) => {
  const idUser = req.params.idUser;
  let sql = `select * from users where idUser = '${idUser}'`;
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
module.exports = { getId };