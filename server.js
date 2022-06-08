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

// Get All Users
const { allUsers } = require("./Controller/All Users");
app.get("/", allUsers);

// Get Id User
const { getId } = require("./Controller/get Id User");
app.get("/getId/:idUser", getId);

// Register
const { upload } = require("./Upload/upload");
const { register } = require("./Controller/register");
app.post("/register", upload.single("Image"), register);

// Login
const { login } = require("./Controller/login");
app.post("/login", login);

// Update Id User
const { updateIdUser } = require("./Controller/Update Id User");
app.put("/UpdateIdUser/:idUser", upload.single("Image"), updateIdUser);

// Delete Id User
const { deleteIdUser } = require("./Controller/Delete User");
app.delete("/deleteIdUser/:idUser", deleteIdUser);

// Add Post
const { addPost } = require("./Controller/Add Post");
app.post("/AddPost/:idUser", upload.single("Images_Post"), addPost);

// Get All AllPost
const { allPost } = require("./Controller/All Post");
app.get("/AllPost", allPost);

// Get id Post viewProdect
const { viewProdect } = require("./Controller/View Prodect");
app.get("/ViewProdect/:idPost", viewProdect);

// Get id User My Ads
const { MyAds } = require("./Controller/My Ads");
app.get("/MyAds/:idUser", MyAds);

// Get All Category
const { allCategory, insertCategory ,findNameCategory} = require("./Controller/Category");

app.get("/Category", allCategory);

// Insert Category
app.post("/insertCategory", upload.single("Images_Category"), insertCategory);

// Find Name Category

app.get("/FindNameCategory/:Category_Post",findNameCategory)
app.use(express.static(path.resolve(__dirname, "/client/build")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));

