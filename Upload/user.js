const multer = require("multer");

const Storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const uploadUser = multer({ storage: Storage });

module.exports = { uploadUser };
