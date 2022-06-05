const connection = require("../Connection/connection");
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
        console.log(result)
      }
    });
  };
  module.exports = { deleteIdUser };
