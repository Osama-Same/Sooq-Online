const connection = require("../Connection/connection");

const allPost = (req, res) => {
    let sql = "select * from Post";
    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ err: err });
        console.log(err)
      }
      if (result) {
        res.json({ result: result });
      }
    });
};
module.exports = { allPost };
