const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  res.set("sakib", "vai");
  console.log(res.get("sakib"));

  res.end();
});

app.get("/test", (req, res) => {
  res.send("test router");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
