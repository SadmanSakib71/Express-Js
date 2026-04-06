const express = require("express");
const app = express();
const adminRouter = require("./adminRouter");
const publicRouter = require("./publicRouter");

app.use("/", publicRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("listening on the server port 3000");
});
