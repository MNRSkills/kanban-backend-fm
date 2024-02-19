const marketRouter = require("express").Router();
const Boards = require("../models/marketing");

marketRouter.get("/", async (req, res) => {
  res.send("This is working")
  // try {
  //   await res.status(200).json({
  //     mkp: res,
  //   });
  // } catch (error) {}
});

marketRouter.post("/marketing-post", async (req, res) => {
  try {
    const marketPlan = await new Boards({
      name: req.params.name,
      tasks: [
        {
          title: req.params.title,
          description: req.params.description,
          status: req.params.status,
          subtasks: [
            {
              title: req.params.title,
              isCompleted: req.params.isCompleted,
            },
          ],
        },
      ],
    });
    await marketPlan.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        task: tasking,
      })
    );
  } catch (error) {}
});

module.exports = marketRouter;
