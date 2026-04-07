const express = require("express");
const app = express();
const multer = require("multer");

const UPLOADS_FOLDER = "./uploads";

var upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 1000000,
  },
});

app.post("/", upload.single("avatar"), (req, res) => {
  res.send("file saved in upload folder");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
