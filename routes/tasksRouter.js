const tasksRouter = require("express").Router();
const { ObjectId } = require("mongodb");
const Tasks = require("../models/tasksModal");
const { query } = require("express");

tasksRouter.get("/", (req, res) => {
  res.send("TASKS Router Is working");
});

tasksRouter.post("/tasks-post", async (req, res) => {
  console.log(req.body.tasks.subtasks);
  //jkjk
  try {
    const tasks = await new Tasks({
      name: req.body.name,
      tasks: req.body.tasks,
    });
    await tasks.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        ...tasking,
      })
    );
  } catch (error) {
    res.status(400).json({
      ErrMsg: "Bad Request, this is perceived to by a client error",
      ...error,
    });
  }
});

module.exports = tasksRouter;
