const express = require("express");


// Users
const { allUsers } = require("../Controller/All Users");
const {register} =require("../Controller/register")
const {login} =require("../Controller/login")
const {getId} =require("../Controller/getIdUser")
const {uploadUser} =require("../Upload/user")

const router = express.Router();
// router Users
router.get("/GetUsers",allUsers)
router.get("/GetIdUser/:idUser",getId)
router.post("/login",login)
router.post("/register",uploadUser.single("Image") ,register)
module.exports = router;