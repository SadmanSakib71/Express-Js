const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is get for home page");
});

app.post("/", (req, res) => {
  res.send("this is post for home page");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
