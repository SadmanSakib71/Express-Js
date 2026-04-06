const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  console.log(req.secure);

  res.render("pages/page", {
    name: "you are a hero",
  });
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
