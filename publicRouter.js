const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("i am logging something in my home");
  next();
};

publicRouter.param("user", (req, res, next, id) => {
  req.user = id === "1" ? "Admin" : "Anonymous";
  next();
});

publicRouter.get("/:user", (req, res) => {
  res.send(`this is ${req.user}`);
});
publicRouter.get("/about", (req, res) => {
  res.send("for home about ");
});

module.exports = publicRouter;
