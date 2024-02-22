const platformRouter = require("express").Router();
const Launch = require("../models/platformLaunch");
// change this to marketing collection

platformRouter.get("/", async (req, res) => {
  try {
    await Launch.find().then((task) => {
      res.status(200).json({
        Boards: task,
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

platformRouter.post("/platformLaunch-post", async (req, res) => {
  console.log(req.body);
  //jkjk
  try {
    const platformLaunch = await new Launch({
      name: req.body.name,
      tasks: [
        {
          title: req.body.title,
          description: req.body.description,
          status: req.body.status,
          subtasks: [
            {
              title: req.body.title,
              isCompleted: req.body.isCompleted,
            },
          ],
        },
      ],
    });
    await platformLaunch.save().then((tasking) =>
      res.status(200).json({
        msg: "Task has been uploaded!",
        task: tasking,
      })
    );
  } catch (error) {}
});

module.exports = platformRouter;
