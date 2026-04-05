const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("this is get for home page");
});

app.post("/", (req, res) => {
  res.send("this is post for my home page");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
