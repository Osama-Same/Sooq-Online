const connection = require("../Connection/connection");
const allUsers = (req, res) => {
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
module.exports = { allUsers };