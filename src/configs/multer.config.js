const multer = require("multer");
const path = require("path");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), "public", "voice");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const name =
      new Date().getTime().toString() + path.extname(file.originalname);

    const basename = name;
    cb(null, basename);
  },
});

const uploadFile = multer({
  storage: multerStorage,
});

module.exports = uploadFile;
