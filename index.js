const express = require("express");
const app = express();
const path = require("path");
const router = express.Router({ caseSensitive: true });
const handle = require("./handle");

app.use(router);

app.locals.title = "Manna vai";

router.get("/about", handle);

router.post("/", (req, res) => {
  res.send("this is post for my home page");
});

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
