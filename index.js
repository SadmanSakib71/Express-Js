const express = require("express");
const app = express();
const adminRouter = require("./adminRouter");

app.get("/", (req, res) => {
  res.send("for home router");
});

app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
