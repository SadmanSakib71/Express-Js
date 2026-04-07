const express = require("express");
const app = express();
const multer = require("multer");

const UPLOADS_FOLDER = "./uploads";

var upload = multer({
  dest: UPLOADS_FOLDER,
});

app.post(
  "/",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 2,
    },
  ]),

  (req, res) => {
    res.send("file saved in upload folder");
  },
);

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
