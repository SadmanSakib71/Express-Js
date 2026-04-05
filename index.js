const express = require("express");
const app = express();

app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "bangladesh",
  };
  req.userDetails = user;
  next();
});

app.get("/about/:id", (req, res) => {
  console.log(req.userDetails);

  res.send("this is post for my home page");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
