const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.end("For admin dashboard");
});

adminRouter.get("/login", (req, res) => {
  res.end("For admin login ");
});

module.exports = adminRouter;
