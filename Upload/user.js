const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, `../Images/user`),
    //destination: "../../frontend/src/images",
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  const uploadUser = multer({ storage:storage });

  module.exports = {uploadUser}