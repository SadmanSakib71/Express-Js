const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  res.send("for home router");
});

module.exports = publicRouter;
