const marketingRouter = require("express").Router();

marketingRouter.get("/", async (req, res) => {
  res.send("THISI IS WORKING !!!!!");
});



marketingRouter.post("/market-post", (req, res) => {
  
})

module.exports = marketingRouter;