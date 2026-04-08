const express = require("express");
const app = express();
const multer = require("multer");

const UPLOADS_FOLDER = "./uploads";

var upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (file.mimetype === "image/jpeg") {
        cb(null, true);
      } else {
        cb(new Error("only jpeg format allowed"));
      }
    } else if (file.fieldname === "pdf") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("only jpeg format allowed"));
      }
    } else {
      cb(new Error("there was an unknown error"));
    }
  },
});

app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
  ]),
  (req, res) => {
    res.send("file saved in upload folder");
  },
);

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
