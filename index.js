const express = require("express");
const app = express();
const multer = require("multer");

const UPLOADS_FOLDER = "./uploads";

var upload = multer({
  dest: UPLOADS_FOLDER,
});

app.post("/", upload.array("avatar", 3), (req, res) => {
  res.send("file saved in upload folder");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
