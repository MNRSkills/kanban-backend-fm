const roadMapRouter = require("express").Router();
const RoadMap = require("../models/roadMapModel");

roadMapRouter.get("/", (res, req) => {

})

roadMapRouter.post("/roadMap-post", async (req, res) => {
  try {
    const roadMapPost = await new RoadMap({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      subTasks: req.body.subTasks,
    });
    await roadMapPost.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        task: tasking,
      })
    );
  } catch (error) {
    res.status(500).json({
      Error_Catch: error,
      msg: "There is an error with API"
    })
  }
});

module.exports = roadMapRouter;
