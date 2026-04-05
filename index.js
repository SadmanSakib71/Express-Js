const express = require("express");
const app = express();
const admin = express();

app.use("/admin", admin);

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);

  res.send("this is get for admin dashboard page");
});

app.get("/", (req, res) => {
  res.send("this is post for my home page");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
