const handle = (req, res) => {
  console.log(req.app.locals.title);

  res.send("this is get for home page");
};

module.exports = handle;
