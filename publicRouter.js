const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("i am logging something in my home");
  next();
};

publicRouter.all("{*splat}", log);

publicRouter.get("/", (req, res) => {
  res.send("for home ");
});
publicRouter.get("/about", (req, res) => {
  res.send("for home about ");
});

module.exports = publicRouter;
