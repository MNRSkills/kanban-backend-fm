const roadMapRouter = require("express").Router();
const RoadMap = require("../models/roadMapModel");

roadMapRouter.post("/roadMap-post", async (req, res) => {
  console.log(req.body);
  //jkjk
  try {
    const roadMapPost = await new RoadMap({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      subTasks: [
        {
          subTitle: req.body.subTitle,
          isCompleted: req.body.isCompleted,
        },
      ],
    });
    await roadMapPost.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        task: tasking,
      })
    );
  } catch (error) {}
});

module.exports = roadMapRouter;
