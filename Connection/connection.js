const mysql = require("mysql2");
require("dotenv").config();

 const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}); 
 /* const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "mysql1",
}); */


connection.connect((err) => {
  if (err) {
    console.error("CONNECTION ERROR: ", err.stack);
    return;
  }
  console.log("CONNECTION ID: ", connection.threadId);
});
module.exports = connection;
