const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("i am logging something in my home");
  next();
};

publicRouter
  .route("/user")
  .all(log)
  .get((req, res) => {
    res.send("this is for get");
  })
  .post((req, res) => {
    res.send("this is for post");
  })
  .put((req, res) => {
    res.send("this is for put");
  })
  .delete((req, res) => {
    res.send("this is for delete");
  });

publicRouter.get("/:user", (req, res) => {
  res.send("this is for get");
});
publicRouter.get("/about", (req, res) => {
  res.send("for home about ");
});

module.exports = publicRouter;
