const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(router);

router.get("/about", (req, res) => {
  res.send("this is get for home page");
});

router.post("/", (req, res) => {
  res.send("this is post for my home page");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
