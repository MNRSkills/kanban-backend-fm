const boardsRouter = require("express").Router();
const Boards = require("../models/mainModel");







boardsRouter.post("/boards-post", async (req, res) => {
  console.log(req.body);
  //jkjk
  try {
    const boards = await new Boards({
      name: req.body.name,
      tasks: req.body.tasks,
      task_status: req.body.task_status,
    });
    await boards.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        task: tasking,
      })
    );
  } catch (error) {}
});

module.exports = boardsRouter;
