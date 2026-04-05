const express = require("express");
const app = express();

app.use(express.raw());

app.get("/", (req, res) => {
  res.send("this is get for home page");
});

app.post("/", (req, res) => {
  console.log(req.body.toString());

  res.send("this is post for my home page");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
