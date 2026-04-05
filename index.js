const express = require("express");
const app = express();

app
  .route("/sakib/akif")
  .get("", (req, res) => {
    res.send("this is post for my home page");
  })
  .post("", (req, res) => {
    res.send("this is post for my home page");
  })
  .put("", (req, res) => {
    res.send("this is post for my home page");
  })
  .delete("", (req, res) => {
    res.send("this is post for my home page");
  });

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
