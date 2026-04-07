const express = require("express");
const app = express();
const multer = require("multer");

app.get("/", (req, res) => {
  res.send("for home router");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
