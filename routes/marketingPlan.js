const marketRouter = require("express").Router();

marketRouter.get("/", (req, res) => {
  res.send("THSI WORKS");
});

module.exports = marketRouter;
