const boardsRouter = require("express").Router();
const Boards = require("../models/mainModel");

boardsRouter.post("/boards-post", async (req, res) => {
  console.log(req.body.boards);
  //jkjk
  try {
    const boards = await new Boards({
      boards: req.body.boards,
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
