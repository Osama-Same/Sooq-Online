const express = require("express");
const cors = require("cors");
const mysql = require("./Connection/connection");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();
// cors
app.use(cors());
// express json
app.use(express.json());
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Users
const { upload } = require("./Upload/upload");
const { getAllUsers, getIdUser, updateIdUser, deleteIdUser, MyAds, addUser, login ,sender,receiver, getMassage} = require("./Controller/Users");
app.get("/", getAllUsers);
app.get("/getId/:idUser", getIdUser);
app.put("/UpdateIdUser/:idUser", upload.single("Image"), updateIdUser);
app.delete("/deleteIdUser/:idUser", deleteIdUser);
app.get("/MyAds/:idUser", MyAds);
app.post("/register", upload.single("Image"), addUser);
app.post("/login", login);
app.get("/GetMassage/:idUser", getMassage);
app.post("/Sender/:idUser", sender);
app.post("/Receiver/:idUser", receiver);


// Post
const { getAllPost, getIdPost, addPost, getLike, getDisLike, text } = require("./Controller/Post");
app.get("/AllPost", getAllPost);
app.get("/GetIdPost/:idPost", getIdPost);
app.post("/AddPost/:idUser", upload.single("Images_Post"), addPost);
app.get("/GetLike/:idPost", getLike);
app.get("/GetDisLike/:idPost", getDisLike);
app.post("/text/:idUser", text);

// Category
const { getAllCategory, addCategory, findNameCategory } = require("./Controller/Category");
app.get("/Category", getAllCategory);
app.post("/insertCategory", upload.single("Images_Category"), addCategory);
app.get("/FindNameCategory/:Category_Post", findNameCategory);

// comment
const { getAllComment, addComment } = require("./Controller/Comment");
app.get("/GetComment/:idPost", getAllComment);
app.post("/insertComment/:idPost", addComment);


app.use(express.static(path.resolve(__dirname, "./client/build")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));
