const marketRouter = require("express").Router();
const Boards = require("../models/mainModel");
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
  console.log(req.body);
  //jkjk
  try {
    const marketPlan = await new Boards({
      boards: [
        {
          name: req.body.name,
          column: [
            {
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
