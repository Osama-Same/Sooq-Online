const express = require("express");
const cors = require("cors");
const mysql = require("./Connection/connection");
const path = require("path");
const multer = require("multer");
require("dotenv").config();
const app = express();
// cors
app.use(cors());
// express json

// Get All Users
const { allUsers } = require("./Controller/All Users");
app.get("/", allUsers);
// Get Id User
const { getId } = require("./Controller/getIdUser");
app.get("/a/:idUser", getId);

// Register
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null,path.join("./Images/user"));
  },
  filename: (req, file, callback) => {
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, '-')}`;
    callback(null, fileName);
},
});
const uploadUser = multer({ storage: storage });
const { register } = require("./Controller/register");
app.post("/register", uploadUser.single("Image"), register);

// Login
const { login } = require("./Controller/login");
app.post("/login", login);

app.use(express.static("./Images/user"));
app.use(express.static(path.resolve(__dirname, "client/build")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
