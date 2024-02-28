const marketRouter = require("express").Router();
const Market = require("../models/marketingPlan");
// change this to marketing collection

marketRouter.get("/", async (req, res) => {
  try {
    await Boards.find().then((board) => {
      res.status(200).json({
        Boards: board,
        msg: "This is what we have",
      });
    });
  } catch (error) {
    res.status(400).json({
      msg: "there has been an error",
      ERROR: error,
    });
  }
  // try {
  //   await res.status(200).json({
  //     mkp: res,
  //   });
  // } catch (error) {}
});

marketRouter.post("/marketing-post", async (req, res) => {
  console.log(req.body.tasks);
  //jkjk
  try {
    const marketPlan = await new Market({
      status_name: req.body.statusname,
      tasks: req.body.tasks,
      tasks_status: req.body.tasks_status,
    });
    await console.log(marketPlan, "ThiS IS IT");
    await marketPlan.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        task: tasking,
      })
    );
  } catch (error) {}
});

module.exports = marketRouter;
