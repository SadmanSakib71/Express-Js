const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  res.redirect("/test");
  res.end();
});

app.get("/test", (req, res) => {
  res.send("test router");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
