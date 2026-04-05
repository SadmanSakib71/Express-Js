const express = require("express");
const app = express();
const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl);

  res.send("we are in admin route");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.baseUrl);
  res.send("this is for get method");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
