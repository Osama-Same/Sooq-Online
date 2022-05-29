const express = require("express");
const cors = require("cors");
const mysql = require("./Connection/connection");
const router = require("./Router/Router");
const path = require("path");
require("dotenv").config();
const app = express();
// cors
app.use(cors());
// express json
app.use(express.json());
app.use(express.Router());
app.use(router);

app.use(express.static(path.resolve(__dirname, "client/build")));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
