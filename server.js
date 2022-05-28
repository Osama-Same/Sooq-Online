const express = require("express");
const cors = require("cors");
require("./Connection/connection");
require("dotenv").config();
const app = express();

// cors
app.use(cors());

// express json
app.use(express.json())


app.get("/", (req, res) => {
    const sql = `select * from users`;
    mysql.query(sql, (err, result) => {
      if (err) {
        res.send({ err: "error" });
      }
      if (result) {
        res.json({ result: result });
      }
    });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
